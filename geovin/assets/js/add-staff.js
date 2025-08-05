( function( $ ) {

    var $roleCell = $('.gfield_list_1_cell4'),
    	$roleCellInput = $roleCell.find('input'),
    	i = 1;

    $roleCellInput.addClass('u-accessible-hide');
    $roleCellInput.val('Staff');
    $roleCell.append('<select id="user-role-'+i+'"><option value="Staff" selected>Staff</option><option value="Manager">Manager</option></select>');
    $('#user-role-'+i).on('change',function(){
    	$roleCellInput.val($(this).val());
    })

    var $addressCell = $('.gfield_list_1_cell5'),
    	$addressCellInput = $addressCell.find('input'),
    	i = 1;

    $addressCellInput.addClass('u-accessible-hide');
    $addressCellInput.val('Do not assign an address');
    var dealer = $('#input_5_2').val();

    var data = {
        'action': 'load_dealer_addresses',
        'dealer_id': dealer 
    };
    
    $.post('/wp-admin/admin-ajax.php', data, function(response) {
        if ( response !== 'false' ) {
            var addresses = JSON.parse(response);
            var options = '<option>Do not assign an address</option>';
            Object.keys(addresses).map(function(key){
                options = options + '<option value="'+addresses[key].name+'">'+addresses[key].name+'</option>';
            })
            $addressCell.append('<select id="user-address-'+i+'">'+options+'</select>');
		   
        } 
    });
    $('#user-address-'+i).on('change',function(){
    	$addressCellInput.val($(this).val());
    })
    

    gform.addAction( 'gform_list_post_item_add', function ( item, container ) {
    	i++;
    	var $itemCell = item.find('.gfield_list_1_cell4'),
    		$item_input = $itemCell.find('input'),
    		$select = $itemCell.find('select');
    		item_count = i;

    	$item_input.addClass('u-accessible-hide');
	    $item_input.val('Staff');
	    $select.attr('id','user-role-'+item_count);
	    $select.val('Staff');
	    $('#user-role-'+item_count).on('change',function(){
	    	$item_input.val($(this).val());
	    })
	    var $iaddressCell = item.find('.gfield_list_1_cell5'),
    		$iaddress_input = $iaddressCell.find('input'),
    		$iaddress_select = $iaddressCell.find('select');
    		iaddress_count = i;

    	$iaddress_input.addClass('u-accessible-hide');
	    $iaddress_input.val('Do not assign an address');
	    $iaddress_select.attr('id','user-address-'+iaddress_count);
	    $iaddress_select.val('Do not assign an address');
	    $('#user-address-'+iaddress_count).on('change',function(){
	    	$iaddress_input.val($(this).val());
	    })
	} );

	$(document).on('change','.gfield_list_1_cell3 input',function(){
		if ( isEmail($(this).val()) ) {
			$(this).removeClass('invalid');
			$(this).parents('.gfield_list_1_cell3').find('.warning').remove();
		} else {
			if ( $(this).parents('.gfield_list_1_cell3').find('.warning').length < 1 ) {
				$(this).addClass('invalid');
				$(this).parents('.gfield_list_1_cell3').prepend('<span class="warning" style="color:red;">Please enter a valid email address.</span>');
			}
		}
	})

	function isEmail(email) {
	  	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  	return regex.test(email);
	}
	
} )( jQuery );