var myGeovinSD;


var geovinCodes = {
    1 : {
      name: 'Shape',
      pattern: 'G##',
      required: true,
      set_by: 'category',
      woo_attribute_name: 'pa_shape',
      sd_name: 'Code-01',
    },
    2 : {
      name: 'Base',
      pattern: '***',
      required: true,
      set_by: 'collection',
      woo_attribute_name: 'pa_base',
      sd_name: 'Code-02',
    },
    3: {
      name: 'Dimension',
      pattern: '###',
      required: true,
      set_by: 'attribute',
      woo_attribute_name: 'pa_dimensions',
      sd_name: 'Code-03',
    },
    4: {
      name: 'Wood Type',
      pattern: 'A',
      required: true,
      set_by: 'attribute',
      woo_attribute_name: 'pa_wood-type',
      sd_name: 'Code-04',
    },
    5: {
      name: 'Wood Finish',
      pattern: 'F##',
      required: true,
      set_by: 'attribute',
      woo_attribute_name: 'pa_finish',
      sd_name: 'Code-05',
    },
    6: {
      name: 'Hardware Shape',
      pattern: 'J##',
      required: false,
      fallback: 'XXX',
      set_by: 'attribute',
      woo_attribute_name: 'pa_hardware-shape',
      sd_name: 'Code-06',
    },
    7: {
      name: 'Hardware Finish',
      pattern: 'A',
      required: false,
      fallback: 'X',
      set_by: 'attribute',
      woo_attribute_name: 'pa_hardware-finish',
      sd_name: 'Code-07',
    },
    8: {
      name: 'Base Finish',
      pattern: 'A',
      required: false,
      fallback: 'X',
      set_by: 'attribute',
      woo_attribute_name: 'pa_base-finish',
      sd_name: 'Code-08',
    },
    9: {
      name: 'Doors',
      pattern: 'D##',
      required: false,
      fallback: 'XXX',
      set_by: 'attribute',
      woo_attribute_name: 'pa_doors',
      sd_name: 'Code-09',
    },
    10: {
      name: 'Headboard Panel',
      pattern: 'P##',
      required: false,
      fallback: 'XXX',
      set_by: 'attribute',
      woo_attribute_name: 'pa_headboard-panel',
      sd_name: 'Code-10',
    },
    11: {
      name: 'Fabric',
      pattern: 'U##',
      required: false,
      fallback: 'XXX',
      set_by: 'attribute',
      woo_attribute_name: 'pa_fabric',
      sd_name: 'Code-11',
    }
  }
var attributeGroups = {
    'finish' : [ 'wood-type', 'finish' ],
    'dimensions' : ['dimensions'],
    'hardware-finish' : [ 'hardware-shape', 'hardware-finish' ],
    'base-finish' : ['base-finish'],
    'doors' : ['doors'],
    'headboard-panel' : ['headboard-panel'],
    'fabric' : ['fabric']
  }

function populateControls() {
    var controls = $('.sd-control');

    for ( i=0;i < controls.length; i++ ) {
        var attribute = $(controls[i]).data('control');
        var control_options = available_attributes[attribute];
        var markup = '<div class="sd-options__wrapper">';
        if ( typeof control_options === 'object' ) {
            var k = 0;
            var options_presort = attribute === 'dimensions' ? Object.entries(control_options).sort((a, b) => a[0].localeCompare(b[0])) : Object.entries(control_options);
            var options_sorted = typeof control_options.KKBE !== 'undefined' ? Object.entries(control_options).sort( myGeovinSD.sortBedSize ) : options_presort;
            for (const [key, value] of options_sorted) {
                k++;
                if ( key.includes('-') || attribute === 'doors' || attribute === 'fabric' ) {
                    var keys = key.split('-');
                    var attributes = attributeGroups[attribute];
                    var combo_codes = [];
                    for ( j = 0; j < attributes.length; j++ ) {
                        
                            var choice = getCurrentChoiceForAttribute( attributes[j] );
                            
                            combo_codes.push(choice);

                            if ( j+1 === attributes.length ) {
                            var combo_code = typeof combo_codes.join('-') !== 'undefined' ? combo_codes.join('-') : combo_codes[0];
                            var checked = key === combo_code ? 'checked' : '';
                            markup = markup + '<div class="sd-option"><input type="radio" name="'+ attribute +'" value="'+ key +'" '+ checked +' data-img="'+ value.image +'" /><label for="'+ key +'"><div class="quickview__icon"><img src="'+ value.image +'" class="sd-img" /><div class="quickview__details"><div class="label">'+ value.label +' &#8212 <span class="small-caps">'+key+'</span></div><img src="'+ value.image +'"/></div></div><div class="sd-label">'+ value.label +' &#8212 '+ key +'</div></label></div>';

                            $(controls[i]).find('.sd-control__choices').html(markup)
                            if ( checked === 'checked' ) {
                                var keyclass = $(controls[i]).data('control');
                                var icon = '<div class="quickview__icon"><svg class="icon-svg--view"><use xlink:href="#icon-view"></use></svg><div class="quickview__details"><div class="label">'+value.label+' &#8212 <span class="small-caps">'+key+'</span></div><img src="'+value.image+'"/></div></div>';
                                
                                $(controls[i]).find('.sd-control__selected-value').html( icon + value.label + ' &#8212 '+ key +' (selected)').data('thumb',value.image);
                                $('#tab-sd .'+keyclass+' .product-attribute-selected').html( icon + '<span class="js-selected-text">' + value.label + '&#8212 '+ combo_code + '</span>' );
                                if ( keyclass === 'doors' && combo_code === 'D00' ) {
                                    $('#tab-sd .'+keyclass).hide();
                                } else if ( keyclass === 'doors' ) {
                                    $('#tab-sd .'+keyclass).show();
                                }
                            }
                            }
                    }
                } else {
                    var choice = getCurrentChoiceForAttribute( attribute );
                    var checked = value.code === choice ? 'checked' : '';
                    markup = markup + '<div class="sd-option"><input type="radio" name="'+ attribute +'" value="'+ value.code +'" '+ checked +' /><label for="'+ value.code +'">'+ value.label +'</label></div>';
                    $(controls[i]).find('.sd-control__choices').html(markup);
                    $(controls[i]).find('.open-options').hide();
                    if ( checked === 'checked' ) {
                        $(controls[i]).find('.sd-control__selected-value').text(value.label + ' (selected)').hide();
                        var keyclass = $(controls[i]).data('control');
                        var icon = '<div class="quickview__icon"><svg class="icon-svg--view"><use xlink:href="#icon-view"></use></svg><div class="quickview__details"><div class="label">'+value.label+' &#8212 <span class="small-caps">'+key+'</span></div><img src="'+value.image+'"/></div></div>';

                        $('#tab-sd .'+keyclass+' .product-attribute-selected').html( '<span class="js-selected-text">' + value.label  + '&#8212 '+ value.code + '</span>' );
                        if ( keyclass === 'dimensions' && value.code === 'KKBE' ) {
                                var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> King</span>';
                                $('#tab-sd .'+keyclass).prepend(bedSize);
                            } else if ( keyclass === 'dimensions' && value.code === 'QQBE' ) {
                                $('#tab-sd .bed-size').remove();
                                var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Queen</span>';
                                $('#tab-sd .'+keyclass).prepend(bedSize);
                            } else if ( keyclass === 'dimensions' && value.code === 'FFBE' ) {
                                $('#tab-sd .bed-size').remove();
                                var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Full</span>';
                                $('#tab-sd .'+keyclass).prepend(bedSize);
                            } else if ( keyclass === 'dimensions' && value.code === 'TTBE' ) {
                                $('#tab-sd .bed-size').remove();
                                var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Twin</span>';
                                $('#tab-sd .'+keyclass).prepend(bedSize);
                            } else {
                                var bedSize = '';
                            }
                        }
                }
                
                if ( Object.keys(control_options).length === k ) {
                    markup = markup + '</div>';
                    $(controls[i]).find('.sd-control__choices').html(markup);
                }
            }

        }
        if ( i === controls.length - 1 ) {
            $('.sd-curtain').addClass('open');
            $('.sd-controls__wrapper').focus();
            myGeovinSD.visible = true;
            $('body').addClass('noscroll');
            $(document).trigger('sd_loaded');
        }
    }
}
function findParameterNameForAttribute( attribute ) {
    for (const [key, value] of Object.entries(geovinCodes)) {
        if ( value.woo_attribute_name === attribute ) {
          return value.sd_name;
        }
    }
}
function getCurrentChoiceForAttribute( attribute ) {
    var parameter_name = findParameterNameForAttribute( 'pa_' + attribute );
    return myGeovinSD.getParameterChoice( parameter_name ).split(' ')[0];
}
function getParameterValuesFromAttributes() {
    var productParameters = {};
    var attribute_containers = $('.variations .value');
    var sku = $('.tabs').data('product-sku');
    var base_options = sku.split('-');
    productParameters[findParameterNameForAttribute('pa_shape')] = base_options[0];
    if ( base_options[1] !== 'XXX' ) {
        productParameters[findParameterNameForAttribute('pa_base')] = base_options[1];
    }
    for( i = 0; i < attribute_containers.length; i++ ) {
        var select = $(attribute_containers[i]).find('select');
        var this_attribute = select.attr('id');
        var currentOption = $('#' + this_attribute + ' option:selected');
        if (select && currentOption.length > 0 ) {
            if ( select.val() === 'xxx' || select.val() === 'x' ) {
                //do nothing
            } else {
                var newValue = currentOption.data('geovin-code-value');
                var parameter = findParameterNameForAttribute( this_attribute );
                productParameters[parameter] = newValue;
            }
        }
        if ( i === attribute_containers.length - 1 ) {
            return productParameters;
        }
    }
}

function updateCustomizationTabLabels( data ) {   
    for (const [key, value] of Object.entries(data)) {
        var codes = [];
        i = 0;
        j = Object.keys(value).length;
        $('.sd-controls .sd-control--'+key+' input[type="radio"]:checked').prop('checked',false);

        for (const [subkey, subvalue] of Object.entries(value) ) {
            i++;
            codes.push(subvalue.code);
            if (i === j) {
                var this_code = typeof codes.join('-') !== 'undefined' ? codes.join('-') : codes[0];
                //find label for key
                if ( codes.length > 1 || this_code.includes('D') || this_code.includes('P') || this_code.includes('U') ) {
                    var labelcode = ' &#8212 ' + this_code;
                } else {
                    var labelcode = '';
                }

                var label = available_attributes[key][ this_code ].label + labelcode;
                var imgsrc = '';
                if ( typeof available_attributes[key][ this_code ].image !== 'undefined' ) {
                    imgsrc = available_attributes[key][ this_code ].image;
                    var icon = '<div class="quickview__icon"><svg class="icon-svg--view"><use xlink:href="#icon-view"></use></svg><div class="quickview__details"><div class="label">'+label+' </div><img src="' + imgsrc + '"/></div></div>';
                } else {
                    var icon = '';
                }
                if ( key === 'doors' && subvalue.code === 'D00' ) {
                    $('#tab-sd .'+key).hide();
                } else if ( key === 'doors' ) {
                    $('#tab-sd .'+key).show();
                }
                
                var tabSelectedHTML = icon + '<span class="js-selected-text">' + label + '</span>';
                var selectedValueHTML = icon + label + ' (selected)';

                if ( key === 'dimensions' && subvalue.code === 'KKBE' ) {
                    $('#tab-sd .bed-size').remove();
                    var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> King</span>';
                    $('#tab-sd .'+key).prepend(bedSize);
                } else if ( key === 'dimensions' && subvalue.code === 'QQBE' ) {
                    $('#tab-sd .bed-size').remove();
                    var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Queen</span>';
                    $('#tab-sd .'+key).prepend(bedSize);
                } else if ( key === 'dimensions' && subvalue.code === 'FFBE' ) {
                    $('#tab-sd .bed-size').remove();
                    var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Full</span>';
                    $('#tab-sd .'+key).prepend(bedSize);
                } else if ( key === 'dimensions' && subvalue.code === 'TTBE' ) {
                    $('#tab-sd .bed-size').remove();
                    var bedSize = '<span class="bed-size"><strong>Bed Size:</strong> Twin</span>';
                    $('#tab-sd .'+key).prepend(bedSize);
                } else {
                    var bedSize = '';
                }
                $('#tab-sd .'+key+' .product-attribute-selected').html( tabSelectedHTML );
                $('.sd-controls .sd-control--'+key+' .sd-control__selected-value').html( selectedValueHTML );
                $('.sd-controls .sd-control--'+key+' .sd-control__choices :radio[value="' + subvalue.code + '"]').prop('checked',true);
            }
        }
        
    }
}

function addEventListeners() {
    $('#sd-wrapper').on('click tap','.sd-option input + label',function(){
        $('.sd-wrapper').addClass('busy');
        input = $(this).siblings('input');
        input.trigger('click');
    })
    $('#sd-wrapper').on('click tap','.sd-option input',function(){
        $('.sd-wrapper').addClass('busy');
        var values = $(this).val().split('-');
        var groupName = $(this).attr('name');
        var attributes = attributeGroups[groupName];
        var data = {};
        data[groupName] = {};
        for ( i = 0; i < values.length; i++ ) {
            var attribute = 'pa_' + attributes[i];
            var newValue = values[i];
            var parameter_name = findParameterNameForAttribute( attribute );
            myGeovinSD.setParameterChoice( parameter_name, newValue ).then( function() {
                myGeovinSD.adjustPeripherals();
            } ); 
            data[groupName][attributes[i]] = {name: attribute, code: newValue};
            
            if ( i + 1 === values.length ) {
                updateCustomizationTabLabels(data);
                $(document).trigger('update_attributes', [ data ]);
                $(document).trigger('update_sku', [ data ]);
            }
        }
    })

    $('.sd-close').on('click tap',function(){
        closeViewer();
    })

    $('#sd-wrapper').on('click tap', '#mattress', function(e){
        $('.sd-wrapper').addClass('busy');
        toggleMattress();
    })

    $('#sd-wrapper').on('click tap', '#drawers', function(e){
        $('.sd-wrapper').addClass('busy');
        toggleDrawers();
    })

    $('#sd-wrapper').on('click tap', '#storage', function(e){
        $('.sd-wrapper').addClass('busy');
        toggleStorage();
    })
}

function closeViewer() {
    if ( myGeovinSD.rendering === true ) {
        //we are working dont close
    } else {
        myGeovinSD.takeScreenshot();
        myGeovinSD.visible = false;
        $('body').removeClass('noscroll');
    }
    
}

function toggleMattress() {
    if ( $('#mattress').is(":checked") ) {
        myGeovinSD.showMattress();
    } else {
        myGeovinSD.hideMattress();
    }
}

function toggleDrawers() {
    if ( $('#drawers').is(":checked") ) {
        myGeovinSD.showDrawers();
    } else {
        myGeovinSD.hideDrawers();
    }
}

function toggleStorage() {
    if ( $('#storage').is(":checked") ) {
        myGeovinSD.showStorage();
    } else {
        myGeovinSD.hideStorage();
    }
}

function cropImage(file) {
    return new Promise (function (resolved, rejected) {
        var i = new Image();
        var canvas = document.createElement("canvas");
        var context = canvas.getContext('2d');

        canvas.width = canvas.height = 1024;

        i.onload = function(){

            
            var targetWidth = 1024;
            var targetHeight = 1024;

            if ( i.width < i.height ) {
                //vertical image, width is smaller
                var scale = targetWidth / i.width;
            } else {
                //horizontal image, height is smaller
                var scale = targetHeight / i.height;
            }
            var newWidth = i.width * scale;
            var newHeight = i.height * scale;
            var dx = -Math.abs( ( ( targetWidth - newWidth ) / 2 ) );
            var dy = -Math.abs( ( ( targetHeight - newHeight ) / 2 ) );

            var canvas = document.createElement("canvas");                  
            canvas.width  = 1024;
            canvas.height = 1024;
                
            canvas.getContext("2d").drawImage(i, dx, dy, newWidth, newHeight );

            dataUrl = canvas.toDataURL('image/jpeg');
            resolved({url:dataUrl})
        };

        i.src = file
    })
}
function getImageDimensions(file) {
  return new Promise (function (resolved, rejected) {
    var i = new Image();
    i.onload = function(){
      resolved({w: i.width, h: i.height})
    };
    i.src = file
  })
}

$(document).ready(function(){
    myGeovinSD = new GeovinSD( sd_ticket );
})



$(document).on('openSD',function(){
    $('#sd-wrapper').show();
    $('#sd-wrapper').css({'opacity':'1','pointerEvents':'auto'});
    $('body').addClass('noscroll');
});

$(document).on('initSD',function(){
    var values = getParameterValuesFromAttributes();
    myGeovinSD.init(values).then( function() {  
        addEventListeners();
    });
});
$(document).on('populate-controls-ready',function(){
    if (myGeovinSD.initialized && myGeovinSD.activated && ! myGeovinSD.rendering ) {
        $('.sd-curtain span').text('Populating controls ...');
        $('.loading-bar__inner').text('95%');
        $('.loading-bar__inner').css({width:'95%'});
        populateControls();
    } else {
       //not ready
    }
    
})

$(document).on( 'geovin-shapediver-update', function( e, data ) {
    updateCustomizationTabLabels( data )
    for (const [key, value] of Object.entries(data)) {
        var newValue = '';
        if ( typeof value === 'object' ) {
            var subvalues = Object.values(value);
            for (const [subkey,subvalue] of Object.entries(value) ) {
                var attribute = 'pa_' + subkey;
                var newValue = subvalue.code;
                var parameter_name = findParameterNameForAttribute( attribute );
                myGeovinSD.setParameterChoice( parameter_name, newValue ).then( function() {
                    myGeovinSD.adjustPeripherals( );
                } ); 
            }
        } 
    } 
})

$(document).on( 'update-cart-image', function( e, datauri ) {
    cropImage(datauri).then(function(res,rej){
        var image = res;

        $('.flex-active-slide').find('a').attr('href',image.url)
        $('.flex-active-slide').find('img').attr('src', image.url )
        $('.flex-active-slide').find('img').attr('srcset','')
        $('.flex-active-slide').find('img').attr('data-src',image.url)
        $('.flex-active-slide').find('img').attr('data-large_image',image.url);
        $('.flex-active-slide').find('img').attr('title',$('.geovin-product-code').text());
        $('.flex-control-thumbs li:nth-child(7) img').attr('src', image.url );
        getImageDimensions(image.url).then(function(r,j){
            $image_size = r;
            $('.flex-active-slide').find('img').attr('data-large_image_width',$image_size.w);
            $('.flex-active-slide').find('img').attr('data-large_image_height',$image_size.h);
            $(document).trigger('update_cart_image');
        });
    })
})
