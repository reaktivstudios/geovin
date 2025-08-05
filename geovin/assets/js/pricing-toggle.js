( function( $ ) {
	$('#price-shown').on('click tap', function() {
		if ( $('#price-shown').is(":checked") ) {
            changePriceShown('MSRP');
            $('#price-shown').prop('checked',true);
        } else {
        	changePriceShown('COST');
            $('#price-shown').prop('checked',false);
        }
	} )

	function changePriceShown( priceType ) {
		var data = {
			'action': 'set_price_shown',
			'price_type': priceType
		}
		$.post(ajax_price_shown.ajax_url, data, function(response) {
			$(document).trigger('wc_update_cart');
			$( document.body ).trigger( 'update_checkout' );
			$(document).trigger('woo_update');
		});
	}

} )( jQuery );