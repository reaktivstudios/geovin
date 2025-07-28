jQuery(document).ready(function($) {

	function setCookie( name, value, days ) {
	    var expires = "";
	    if ( days ) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}

	function getCookie( name ) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

	function eraseCookie( name ) {   
	    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	var urlParams = new URLSearchParams(window.location.search);
	var clearSession = urlParams.get('clearSession');

	if ( clearSession === 'true' ) {
		eraseCookie('geovinDistance');
	}
	/** used for testing 
	var urlParams = new URLSearchParams(window.location.search);
	var forceLocation = urlParams.get('forceLocation');

	if (forceLocation) {
		console.log('we want to force a new location');
		eraseCookie( 'geovinDistance' )
	} else {
		console.log('not forcing');
	}*/

	function getDistance() {
		var savedDistance = getCookie('geovinDistance');

		if ( savedDistance /*&& ! forceLocation*/ ) {
			return savedDistance;
		} else {
			/*
			if ( forceLocation === 'US' ) {
				var geo = {"latitude":"39.0997","longitude":"-94.5786"};
			} else if( forceLocation === 'CA1' ) {
				var geo = {"latitude":"45.5088","longitude":"-73.5878"};
			} else if ( forceLocation === 'CA2' ) {
				var geo = {"latitude":"49.2576039","longitude":"-123.4109873"};
			} else {
				var geo = JSON.parse(ajax_object.geo);
			}*/
			var geo = JSON.parse(ajax_object.geo);
			var geovinGeo = JSON.parse(ajax_object.geovinGeo);
			if ( geo.latitude && geo.longitude ) {
				var location1 = new google.maps.LatLng(geo.latitude, geo.longitude);
				var location2 = new google.maps.LatLng(geovinGeo.latitude, geovinGeo.longitude);
				var distance = google.maps.geometry.spherical.computeDistanceBetween(location1, location2);
				setCookie( 'geovinDistance', distance, 7 );
				return distance;
			} else {
				var distance = 10;
				setCookie( 'geovinDistance', distance, 1 );
				return distance;
			}
		}
	}

	if ( typeof ajax_object.sessionData !== 'undefined' ) {
		var sessionData = JSON.parse(ajax_object.sessionData);

		if ( sessionData.needsRegion ) {
			var distance = getDistance();
			
			if ( distance ) {
				
				//set the distance for this session
				var data = {
					'action': 'set_distance',
					'distance': distance
				}
				jQuery.post(ajax_object.ajax_url, data, function(response) {
					
				});
			} 

		} 
	}

	var initTextareaCount = function() {
		var $textareas = $('textarea');

		$textareas.each(function(){
			var maxCount = $(this).attr('maxlength'),
				$maxCount = $(this).siblings('.textarea-counter').find('.max-count');

			if (typeof maxCount !== 'undefined') {
				
				$maxCount.text(maxCount);

				$(this).on('keyup',function(){

					var characterCount = $(this).val().length,
					      current = $(this).siblings('.textarea-counter').find('.current-count'),
					      maximum = $(this).siblings('.textarea-counter').find('.max-count'),
					      theCount = $(this).siblings('.textarea-counter'),
					      warningCount = maxCount * .8,
					      alertCount = maxCount * .95;

					current.text(characterCount);
					

					if (characterCount >= alertCount) {
					    current.css('color', 'red');
					    theCount.css('font-weight','bold');
					  } else if (characterCount >= warningCount) {
					    current.css('color', 'orange');
					    theCount.css('font-weight','bold');
					  } else {
					    theCount.css('font-weight','normal');
					  }
				})
			}
		})
	}

	initTextareaCount();

	$(document).on('update_checkout',function(){
		initTextareaCount();
	})
	$(document).on('updated_checkout',function(){
		initTextareaCount();
	})
});