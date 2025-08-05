/* global window, document, jQuery */
'use strict';


var noticeCreated = false; //let's only do this once

var specsCheck = function() {

	var isEmpty = jQuery('#acf-group_61b195f35073b .acf-repeater').hasClass('-empty');
	return isEmpty;
}
var createNotice = function() {
	
	wp.data.dispatch( 'core/notices' ).createWarningNotice(
        //'warning', // Can be one of: success, info, warning, error.
        'The specs section is empty!', // Text string to display.
        {
        	id: 'specscheck',
            isDismissible: true, // Whether the user can dismiss the notice.
            explicitDismiss: true, //don't let us accidentally dismiss it
            onDismiss: function() {
            	wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'specscheck' );
            },
            // Any actions the user can perform.
            actions: [
                {
                    url: '#',
                    label: 'View post',
                },
            ],
        }
    );
	noticeCreated = true;
}

wp.data.subscribe(function () {
	
	if ( wp.data.select('core/editor') !== null && wp.data.select( 'core/editor' ).isSavingPost() && ! wp.data.select( 'core/editor' ).isAutosavingPost() ) {
		wp.data.useDispatch();
		if ( specsCheck() ) {
			
			if ( ! noticeCreated ) {
				
				createNotice();
			} 
			
		}
		
	}
})