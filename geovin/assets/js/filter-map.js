( function( $ ) {
	acf.addFilter('google_map_result', function( result, obj, map, el ){

	    for (var i = 0; i < obj.address_components.length; i++) {
          var component = obj.address_components[i];
          var component_type = component.types[0]; // Look for matching component type.
          if ( component_type === 'subpremise' ) {
          	result['subpremise'] = obj.address_components[i].long_name;
          }
        }

	    return result;
	});

} )( jQuery );