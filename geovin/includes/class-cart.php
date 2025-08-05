<?php
/**
 * Adjustments to the Woo Cart for Geovin products
 */
namespace Geovin;

if ( ! defined( 'ABSPATH' ) ) {
    return;
}

class Cart {
	public function __construct() {
		add_filter( 'woocommerce_form_field', array( $this, 'adjust_billing_fields' ), 1, 4 );
		add_filter( 'woocommerce_form_field_args', array( $this, 'adjust_field_args' ), 1, 3 );

		add_filter( 'woocommerce_get_script_data', array($this,'filter_localized_script'), 10, 2); 

		add_filter( 'woocommerce_billing_fields', array( $this, 'remove_fields' ), 10, 1 );
		add_filter( 'woocommerce_shipping_fields', array( $this, 'remove_shipping_fields' ), 10, 1 );

		add_filter( 'woocommerce_checkout_fields', array( $this, 'add_order_fields' ), 10, 1 );

		add_filter( 'woocommerce_shipping_fields', array( $this, 'add_fields' ), 10, 1 );

		add_action( 'admin_enqueue_scripts', array( $this, 'add_admin_scripts' ), 10, 1 );

		add_filter( 'woocommerce_order_get_formatted_shipping_address', array( $this, 'format_shipping_address' ), 10, 3 );
		add_filter( 'woocommerce_order_get_formatted_billing_address', array( $this, 'format_billing_address' ), 10, 3 );

		add_action( 'woocommerce_before_checkout_shipping_form', array( $this, 'add_address_dropdown' ), 10, 1 );
		add_action( "woocommerce_before_edit_address_form_shipping", array( $this, 'add_personal_address_dropdown' ), 10, 1 );

		add_action( 'shipping_address_list', array( $this, 'add_address_list' ), 10, 1 );
		add_action( 'my_shipping_address_list', array( $this, 'my_add_address_list' ), 10, 1 );

		//add_action( 'woocommerce_after_save_address_validation', array( $this, 'save_shipping_addresses'), 10, 4); 
		//add_action( 'woocommerce_checkout_order_processed', array( $this, 'save_shipping_addresses_checkout'), 10, 3);

		add_action( 'woocommerce_thankyou', array( $this, 'add_to_order_summary'), 10, 1 );
		add_filter( 'woocommerce_email_recipient_customer_processing_order', array( $this, 'add_copies' ), 10, 3);

		add_filter( 'woocommerce_email_subject_customer_processing_order', array( $this, 'add_extras' ), 10, 3 );
		add_filter( 'woocommerce_email_subject_new_order', array( $this, 'add_extras' ), 10, 3 );

		add_filter( 'woocommerce_email_heading_customer_processing_order', array( $this, 'adjust_email_heading' ), 10, 3 );
		add_filter( 'woocommerce_email_heading_new_order', array( $this, 'adjust_email_heading' ), 10, 3 );


		//include sku on cart item
		add_action( 'woocommerce_after_cart_item_name', array( $this, 'add_product_sku' ), 10, 2 );

		add_filter( 'woocommerce_cart_item_permalink', array( $this, 'adjust_permalink' ), 10, 3); 
		add_filter( 'woocommerce_order_item_permalink', array( $this, 'adjust_permalink' ), 10, 3);

		add_filter( 'woocommerce_get_item_data', array( $this, 'add_extra_data' ), 10, 2 );
		add_action('woocommerce_checkout_create_order_line_item', array( $this, 'save_as_custom_order_item_meta_data'), 10, 4 );

		add_filter( 'woocommerce_my_account_my_address_formatted_address', array( $this, 'filter_addresses' ), 10, 3 );

		add_filter( 'woocommerce_get_order_item_totals', array( $this, 'filter_email_order_meta'), 10, 3  );

		add_filter( 'woocommerce_order_button_text', array( $this, 'filter_button_text') );

		add_filter( 'woocommerce_order_item_thumbnail', array( $this, 'replace_order_item_image'), 10, 2 );

		add_filter( 'woocommerce_default_address_fields', array( $this, 'fix_address_fields' ), 10, 1);

		add_action( 'woocommerce_after_checkout_validation', array( $this, 'validate_checkout' ), 10, 2 );

		add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'add_mini_cart_on_update'), 10, 1 );

		add_action('wp_ajax_update_cart_item_qty', array($this, 'update_cart_item_qty'),10, 1);
		add_action('wp_ajax_nopriv_update_cart_item_qty', array($this, 'update_cart_item_qty'),10, 1);
	}

	public function update_cart_item_qty() {
		$result = false;
		$product_id = $_POST['product_id'];
		$qty = $_POST['qty'];

		foreach( WC()->cart->get_cart() as $key => $cart_item ){
	        if ( $cart_item['variation_id'] == $product_id ) {
	        	$result['success'] = WC()->cart->set_quantity($key, $cart_item['quantity'] + intval($qty));
	        }
	    }
	    if ($result['success']) {
	    	ob_start();
	    	geovin_mini_cart('white');
	    	$result['fragments']['a.geovin_mini_cart--white'] = ob_get_clean();
	    	ob_start();
	    	geovin_mini_cart('black');
	    	$result['fragments']['a.geovin_mini_cart--black'] = ob_get_clean();
	    }

	    wp_send_json($result);
	}

	public function add_mini_cart_on_update( $fragments ) {
		ob_start();
		geovin_mini_cart('white');
		$fragments['a.geovin_mini_cart--white'] = ob_get_clean();

		ob_start();
		geovin_mini_cart('black');
		$fragments['a.geovin_mini_cart--black'] = ob_get_clean();

		return $fragments;
	}

	public function validate_checkout( $fields, $errors ) {

		// shipping_address_type
		if ( $fields['shipping_address_type'] ) {
			// we should un-require some fields: Care of and Ship to Contact Name
			$errors->remove('shipping_dealer_required'); // Care of
			$errors->remove('shipping_last_name_required'); // Ship to contact name
		} else {
			// since we made the field required but want to allow it to be unchecked
			// let's just make sure we have a value that is consistent with it being accurately unchecked
			if ( ! empty($fields['shipping_company']) ) {
				$errors->remove('shipping_address_type_required'); // Address type
			}
		}

	}

	public function fix_address_fields( $fields ) {
		$fields['address_1']['label'] = 'address';
		$fields['address_1']['placeholder'] = 'Number and street name';

		$fields['country']['priority'] = 81;
		$fields['state']['priority'] = 78;
		$fields['postcode']['priority'] = 80;

		return $fields;
	}

	public function replace_order_item_image( $image, $item ) {
		$new_image = $item->get_meta('image_to_use');
		$link = $item->get_meta('link_to_use');
		$product = $item->get_product();
		$link          = $product->get_permalink();
		$attribute_selections =  stripslashes( $item->get_meta('niceatts_to_use') );
	
		if ( isset($item['link_to_use']) ) {
			$link .= '&' . $item['link_to_use'] . '&niceatts=' . urlencode( base64_encode( $attribute_selections ) );
		} 
		if ( $new_image ) {
			if ( strpos($new_image, 'base64') !== false ) {
            	$new_image = GF_Filters::base64_to_png( $new_image );
            	$link .= '&image=' . $new_image;
            	$resized_image = explode('.png',$new_image)[0] . '-100x100.png';
            	$new_image = GF_Filters::resize_image( $resized_image, 100, 100, false );
            } else {
            	$link .= '&image=' . $new_image;
            }
            
            $image = '<a href="' . $link . '"><img width="100" height="100" src="' . $new_image . '" class="attachment-100x100 size-100x100" /></a>';
		} else {
			$image = '<a href="' . $link . '">' . str_replace('32','100',$image) . '</a>';
		}
		return $image;
	}

	public function save_as_custom_order_item_meta_data( $item, $cart_item_key, $values, $order ) {
		$keys_to_save = array('image_to_use', 'link_to_use', 'dimensions_to_use', 'niceatts_to_use');
		foreach( $keys_to_save as $key_to_save ) {
			if ( isset( $values[$key_to_save] ) ) {
				$item->update_meta_data( $key_to_save, $values[$key_to_save] );
			}
		}
	}

	
	public function save_shipping_addresses_checkout( $order_id, $posted_data, $order ) {
		$structured_data = array();
		$address_key = '';
		$my_addresses = get_user_meta( get_current_user_id(), 'saved_shipping_addresses', true );
		if ( ! is_array( $my_addresses ) ) {
			$my_addresses = array();
		}
		foreach( $posted_data as $key => $value ) {
			if ( strpos( $key, 'shipping_' ) !== false ) {
				if ( $key === 'shipping_address_name' ) {
					$address_key = $value;
				}
				$structured_data[$key] = $value;
			}
		}
		if ( $address_key !== '' ) {
			$my_addresses[$address_key] = $structured_data;
		}
		update_user_meta( get_current_user_id(), 'saved_shipping_addresses', $my_addresses );
	}



	public function save_shipping_addresses( $user_id, $load_address, $address, $customer ) {
		$structured_data = array();
		$address_key = '';
		$my_addresses = get_user_meta( get_current_user_id(), 'saved_shipping_addresses', true );
		if ( ! is_array( $my_addresses ) ) {
			$my_addresses = array();
		}
		foreach( $_POST as $key => $value ) {
			if ( strpos( $key, 'shipping_' ) !== false ) {
				if ( $key === 'shipping_address_name' ) {
					$address_key = $value;
				}
				$structured_data[$key] = $value;
			}
		}
		if ( $address_key !== '' ) {
			$my_addresses[$address_key] = $structured_data;
		}
		update_user_meta( get_current_user_id(), 'saved_shipping_addresses', $my_addresses );
	}
	public function filter_button_text( $text ) {
		return 'Place sales order';
	}

	public function filter_email_order_meta( $total_rows, $order, $tax_display ) {
		unset($total_rows['shipping']);
		unset($total_rows['payment_method']);
		unset($total_rows['order_total']);

		return $total_rows;
	}

	public function filter_addresses( $address, $customer_id, $address_type ) {
		
		$dealer = Geovin_Dealers::get_dealer();
		if ( $address_type === 'billing' && ! $address['address_1'] ) {
			//use dealer address
			$addresses = Geovin_Dealers::get_dealer_addresses( $dealer->ID );
			$address['first_name'] = '';
		    $address['last_name'] = '';
		    $address['company'] = $dealer->post_title;
		    $address['address_1'] = !empty($addresses[0]['location_data']['normalized_address_line_1']) ? $addresses[0]['location_data']['normalized_address_line_1'] : $addresses[0]['location_data']['street_number'] . ' ' . $addresses[0]['location_data']['street_name'];
		    $address['address_2'] = isset($addresses[0]['location_data']['subpremise']) ? $addresses[0]['location_data']['subpremise'] : '';
		    $address['city'] = $addresses[0]['location_data']['city'];
		    $address['postcode'] = $addresses[0]['location_data']['post_code'];
		    $address['country'] = isset( $addresses[0]['location_data']['country_short'] ) ? $addresses[0]['location_data']['country_short'] : $addresses[0]['location_data']['country'];
		    $address['state'] = isset( $addresses[0]['location_data']['state_short'] ) ? $addresses[0]['location_data']['state_short'] : $addresses[0]['location_data']['state'];
		} elseif ( $address_type === 'billing' ) {
			$address['first_name'] = '';
		    $address['last_name'] = '';
		    $address['company'] = $dealer->post_title;
		}

		return $address;
	}

	public function add_extra_data( $item_data, $cart_item ) {
		$atts = json_decode( stripslashes( $cart_item['niceatts_to_use'] ) );

		if ( isset($atts->Dimensions) ) {
			$item_data[] = array(
				'key' => 'Dimensions New',
				'value' => $atts->Dimensions,
				'display' => $atts->Dimensions

			);
		}
		return $item_data;
	}

	public function adjust_permalink( $permalink, $cart_item, $cart_item_key ) {
		$cart = WC()->session->get('cart');
		if ( isset($cart_item['link_to_use']) ) {
			$permalink .= '&' . $cart_item['link_to_use'];
		}
		if ( isset($cart_item['image_to_use']) ) {
			$image = $cart_item['image_to_use'];
            if ( strpos($image, 'base64') !== false ) {
            	//upload the image and use the url
            	$image = GF_Filters::base64_to_png( $image );
            	$permalink = $permalink . '&image=' . $image;

            	$resized_image = explode('.png',$image)[0] . '-600x600.png';
                $image = GF_Filters::resize_image( $resized_image, 600, 600, false );

            	//save to the cart item
            	$cart[$cart_item_key]['image_to_use'] = $image;
            	WC()->session->set( 'cart', $cart );
            } else {
            	$permalink = $permalink . '&image=' . $image;
            }
		}
		if ( isset( $cart_item['niceatts_to_use'] ) ) {
			$attribute_selections =  stripslashes( $cart_item['niceatts_to_use'] );
        	$permalink = $permalink . '&niceatts=' . urlencode( base64_encode( $attribute_selections ) );
		}
		
		return $permalink;
	}

	public function add_product_sku( $cart_item, $cart_item_key ) {
		$raw_sku = $cart_item['data']->get_data()['sku'];
		$formatted_sku = str_replace('X', '', $raw_sku);
		$formatted_sku = str_replace('-', '', $formatted_sku);
		echo '<br/><span class="code-key">Code Key: ' . $formatted_sku . '</span>';
	}

	public static function format_atts( $item_data ) {
		$new_data = array();
		$dimensions = array();
		$finish = array();
		$hardware = array();
		$base_finish = array();
		$doors = array();
		$bed_size = array();
		$headboard_panel = array();
		$fabric = array();

		foreach( $item_data as $att ) {
			
			if ( strpos( $att['value'], 'X' ) === false ) {
				//Build Dimensions
				if ( $att['key'] === 'Dimensions' ) {
					//circle back to this one
					if ( $att['value'] === 'King' || $att['value'] === 'Queen' || $att['value'] === 'Full' || $att['value'] === 'Twin' ) {
						$bed_size = array(
							'key' => 'Bed Size',
							'value' => $att['value'],
							'display' => $att['value']
						);
					}
				}
				if ( $att['key'] === 'Dimensions New' ) {
					
					$dimensions = array(
						'key' => 'Dimensions',
						'value' => $att['value'],
						'display' => $att['value']
					);
					
				}

				//Build Finish
				if ( $att['key'] === 'Wood Type' ) {
					$wood_code = substr( $att['value'], 0, 1 );
				}
				if ( $att['key'] === 'Finish' ) {
					$finish_code = self::get_att_code( $att['value'], 'pa_finish' );
					$finish_label = $att['value'];
				}
				if ( isset($wood_code) && isset($finish_code) && isset($finish_label) ) {
					$finish['key'] = 'Finish';
					$finish['value'] = $finish_label . ' — ' . $wood_code . '-' . $finish_code;
					$finish['display'] = $finish_label . ' — ' . $wood_code . '-' . $finish_code;
				}

				//Build Hardware
				if ( $att['key'] === 'Hardware Shape' ) {
					$h_shape_code = self::get_att_code( $att['value'], 'pa_hardware-shape' );
				}
				if ( $att['key'] === 'Hardware Finish' ) {
					$h_finish_code = self::get_att_code( $att['value'], 'pa_hardware-finish' );
					$h_finish_label = $att['value'];
				}
				if ( isset($h_shape_code) && isset($h_finish_code) && isset($h_finish_label) ) {
					$hardware['key'] = 'Hardware';
					$hardware['value'] = $h_finish_label . ' — ' . $h_shape_code . '-' . $h_finish_code;
					$hardware['display'] = $h_finish_label . ' — ' . $h_shape_code . '-' . $h_finish_code;
				}

				//Base Finish
				if ( $att['key'] === 'Base Finish' ) {
					$base_finish = array(
						'key' => $att['key'],
						'value' => $att['display'] . ' — ' . self::get_att_code( $att['value'], 'pa_base-finish' ),
						'display' => $att['display'] . ' — ' . self::get_att_code( $att['value'], 'pa_base-finish' ),
					);
				}

				//Doors
				if ( $att['key'] === 'Doors' ) {
					$doors = array(
						'key' => $att['key'],
						'value' => $att['display'] . ' — ' . self::get_att_code( $att['value'], 'pa_doors' ),
						'display' => $att['display'] . ' — ' . self::get_att_code( $att['value'], 'pa_doors' ),
					);
				}

				//Headboard Panel
				if ( $att['key'] === 'Headboard Panel' ) {
					$headboard_panel = array(
						'key' => $att['key'],
						'value' => $att['display'] . ' — ' . self::get_att_code( $att['value'], 'pa_headboard-panel' ),
						'display' => $att['display'] . ' — ' . self::get_att_code( $att['value'], 'pa_headboard-panel' ),
					);
				}

				//Headboard Panel
				if ( $att['key'] === 'Fabric' ) {
					//look up attribute combo label
					$att = self::filter_att_display_value( $att );
					$fabric = array(
						'key' => $att['key'],
						'value' => $att['display'] . ' — ' . self::get_att_code( $att['value'], 'pa_fabric' ),
						'display' => $att['display'] . ' — ' . self::get_att_code( $att['value'], 'pa_fabric' ),
					);
				}
			}
		}

		if ( ! empty( $bed_size ) ) {
			$new_data[] = $bed_size;
		}
		if ( ! empty( $dimensions ) ) {
			$new_data[] = $dimensions;
		}
		if ( ! empty( $finish ) ) {
			$new_data[] = $finish;
		}
		if ( ! empty( $hardware ) ) {
			$new_data[] = $hardware;
		}
		if ( ! empty( $base_finish ) ) {
			$new_data[] = $base_finish;
		}
		if ( ! empty( $doors ) ) {
			$new_data[] = $doors;
		}
		if ( ! empty( $headboard_panel ) ) {
			$new_data[] = $headboard_panel;
		}
		if ( ! empty( $fabric ) ) {
			$new_data[] = $fabric;
		}

		return $new_data;
	}

	public static function format_order_atts( $item_data ) {
		$new_data = array();

		foreach( $item_data as $data ) {
			$att = $data->get_data();
			if ( $att['key'] === 'niceatts_to_use' ) {
				$usable_values = json_decode( stripslashes( $att['value'] ) );

				foreach( $usable_values as $key => $usable_value ) {
					$new_data[] = array(
						'key' => $key,
						'display' => $usable_value
					);
				}
			}
		}

		return $new_data;
	}

	public static function filter_att_display_value( $att ) {
		if ( have_rows( 'combinations', 'option' ) ) :
			while ( have_rows( 'combinations', 'option' ) ) : the_row();
				if ( get_sub_field( 'combination_category' ) === 'fabric' ) {
					$atts = get_sub_field('attributes');
					foreach( $atts as $attribute ) {
						if ( $att['value'] === $attribute->name ) {
							$att['display'] = get_sub_field( 'label' );
						}
					}
				}	
			endwhile;
		endif; 

		return $att;
	}

	public static function get_att_code( $att_value, $tax ) {
		$term = get_term_by('name', $att_value, $tax);
		$taxonomy_prefix = $term->taxonomy;
        $term_id = $term->term_id;
        $term_id_prefixed = $taxonomy_prefix .'_'. $term_id;
        $geovin_code = get_field( 'code', $term_id_prefixed );

        return $geovin_code;
	}

	public function add_copies( $recipient, $order, $email ) {
		$send_to = $order->get_meta('_billing_sales_order_send_to');
		if ( $send_to ) {
			$recipient = $recipient . ', ' . $send_to;
		}
		return $recipient;
	}

	public function add_extras( $subject, $order, $email ) {
		$po = $order->get_meta('_billing_sales_order_po');
		$tag = $order->get_meta('_billing_sales_order_tag');
		$copy_geovin = $order->get_meta('_billing_sales_order_copy_geovin');
		if ( $po || $tag ) {
			$subject .= ' - ';
		}
		if ( $po ) {
			$subject .= 'Sales Order# ' . $po;
		}
		if ( $po && $tag ) {
			$subject .= ', Tag# ' . $tag;
		} elseif ( $tag ) {
			$subject .= 'Tag# ' . $tag;
		}

		if ( $email->id === 'new_order' ) {
			if ( $copy_geovin ) {
				$subject = 'SUBMITTED: ' . $subject;
			} else {
				$subject = 'DRAFT ONLY: ' . $subject;
			}
			
		} 
		
		return $subject;
	}

	public function adjust_email_heading( $heading, $order, $email ) {
		if ( $email->id === 'new_order' ) {
			$copy_geovin = $order->get_meta('_billing_sales_order_copy_geovin');
			if ( ! $copy_geovin ) {
				$header = str_replace('New','Draft',$header);
			}
		}

		return $heading;
	}

	public function add_to_order_summary( $order_id ) {
		
		$order = wc_get_order( $order_id );
		$po = $order->get_meta('_billing_sales_order_po');
		$tag = $order->get_meta('_billing_sales_order_tag');
		$send_to = $order->get_meta('_billing_sales_order_send_to');
		$copy_geovin = $order->get_meta('_billing_sales_order_copy_geovin');
		if ( $po || $tag || $send_to ) {
			echo '<ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details">';

			if ( $po ) {
				echo '<li>Sales Order #: <strong>' . $po . '</strong></li>';
			}
			if ( $tag ) {
				echo '<li>Tag: <strong>' . $tag . '</strong></li>';
			}
			if ( $send_to ) {
				echo '<li>Copied Emails: <strong>' . $send_to . '</strong></li>';
			}
			if ( $copy_geovin ) {
				echo '<li>Sales Order was sent to Geovin.</li>';
			}

			echo '</ul>';
		}
		
	}

	public function filter_localized_script( $params, $handle ) {
		if ( $handle === 'wc-address-i18n' ) {
			$paramlocal_array = json_decode($params['locale']);
			$paramlocalfields_array = json_decode($params['locale_fields']);
			$paramlocalfields_array->city = str_replace('#billing_city_field, ', '', $paramlocalfields_array->city);
			$paramlocalfields_array->address_1 = str_replace('#billing_address_1_field, ', '', $paramlocalfields_array->address_1);
			$paramlocalfields_array->address_2 = str_replace('#billing_address_2_field, ', '', $paramlocalfields_array->address_2);
			$paramlocalfields_array->postcode = str_replace('#billing_postcode_field, ', '', $paramlocalfields_array->postcode);
			$paramlocalfields_array->state = str_replace('#billing_state_field, ', '', $paramlocalfields_array->state);
			$params['locale_fields'] = json_encode($paramlocalfields_array);
		}
		

		return $params;
	}

	public function add_address_dropdown( $checkout ) {
		$dealer = Geovin_Dealers::get_dealer();
		$addresses = Geovin_Dealers::get_dealer_addresses( $dealer->ID );
		$select_html = '<p class="form-row form-row-wide"><label>Select an Address</label><select class="dealer-saved-addresses"><option>Add New Address</option>';

		$user = get_user_by('ID', get_current_user_id() );
		foreach ( $addresses as $address ) {
			$address['location_data']['first_name'] = $user->first_name;
			$address['location_data']['last_name'] = $user->last_name;
			$location_json = json_encode($address['location_data']);
			$select_html .= '<option value="' . $address['name'] . '" data-location="' . htmlspecialchars($location_json) . '">' . $address['name'] . '</option>';
		}
		$my_addresses = get_user_meta( get_current_user_id(), 'saved_shipping_addresses', true );
		if ( is_array( $my_addresses ) ) {
			foreach ( $my_addresses as $key => $address ) {
				$location_json = json_encode($address);
				$select_html .= '<option value="' . $key . '" data-location="' . htmlspecialchars($location_json) . '">' . $key . '</option>';
			}
		}
		$select_html .= '</select><small>Select an existing address to auto-populate shipping fields.</small></p>';
		echo $select_html;
	}

	public function add_personal_address_dropdown( $checkout ) {
		$addresses = get_user_meta( get_current_user_id(), 'saved_shipping_addresses', true );
		$select_html = '<p class="form-row form-row-wide"><label>Select an Address</label><select class="staff-saved-addresses"><option selected="selected">Add New Address</option>';
		if ( is_array( $addresses ) ) {
			foreach ( $addresses as $key => $address ) {
				$location_json = json_encode($address);
				$select_html .= '<option value="' . $key . '" data-location="' . htmlspecialchars($location_json) . '">' . $key . '</option>';
			}
		}
		$select_html .= '</select><small>Select an existing saved address to edit it or add new address.</small></p>';
		echo $select_html;
	}

	public function add_address_list() {
		$dealer = Geovin_Dealers::get_dealer();
		$addresses = Geovin_Dealers::get_dealer_addresses( $dealer->ID );
		$li_html = '<ul class="list--unstyle list--my-account-addresses">';
		if ( $addresses ) {
			foreach ( $addresses as $address ) {
				$location_json = json_encode($address['location_data']);
				$this_address = array();
				$this_address['address_1'] = isset( $address['location_data']['normalized_address_line_1'] ) ? $address['location_data']['normalized_address_line_1'] : $address['location_data']['street_number'] . ' ' . $address['location_data']['street_name'];
			    $this_address['address_2'] = isset($address['location_data']['subpremise']) ? $address['location_data']['subpremise'] : '';
			    $this_address['city'] = $address['location_data']['city'];
			    $this_address['postcode'] = $address['location_data']['post_code'];
			    $this_address['country'] = isset( $address['location_data']['country_short'] ) ? $address['location_data']['country_short'] : $address['location_data']['country'];
			    $this_address['state'] = isset( $address['location_data']['state_short'] ) ? $address['location_data']['state_short'] : $address['location_data']['state'];
				
				$li_html .= '<li><strong>' . $address['name'] . '</strong><br/>'. WC()->countries->get_formatted_address( $this_address ) .'</li>';
			}
		}
		$li_html .= '</ul>';
		echo $li_html;
	}

	public function my_add_address_list() {
		$addresses = get_user_meta( get_current_user_id(), 'saved_shipping_addresses', true);
		$li_html = '<ul class="list--unstyle list--my-account-addresses">';
		if ( is_array( $addresses ) ) {
			foreach ( $addresses as $address ) {
				foreach( $address as $key => $field ) {
					$adjusted_key = str_replace('shipping_', '', $key);
					$address[$adjusted_key] = $field;
				}
				$li_html .= '<li><strong>' . $address['shipping_address_name'] . '</strong><br/>'. WC()->countries->get_formatted_address( $address ) .'</li>';
			}
		}
		$li_html .= '</ul>';
		echo $li_html;
	}

	public function format_billing_address( $address, $raw_address, $order ) {
		//remove email address showing
		//add long country
		if ( ! empty( $raw_address['country'] ) ) {
			$long_country = WC()->countries->get_countries()[$raw_address['country']];
			$address = $address . '<br/>' . $long_country;
		}
		return $address;
	}

	public function format_shipping_address( $address, $raw_address, $order ) {
		$address = '';
		$shipping_address_name = $order->get_meta('_shipping_address_name');
		$i = 0;
		if ( $shipping_address_name ) {
			$address = '<strong>' . $shipping_address_name . '</strong><br/>';
		}
		$i++;
		if ( ! empty( $raw_address['first_name'] ) ) {
			$address = $address . $raw_address['first_name'] . ' ';
		}
		$i++;
		if ( ! empty( $raw_address['last_name'] ) ) {
			$address = $address . $raw_address['last_name'] . '<br/>';
		} elseif ( ! empty( $raw_address['first_name'] ) ) {
			$address = $address . '<br/>';
		}
		$i++;
		if ( ! empty( $raw_address['company'] ) ) {
			$address = $address . $raw_address['company'] . '<br/>';
		}
		$i++;
		$shipping_dealer = $order->get_meta('_shipping_dealer');
		if ( $shipping_dealer ) {
			$address = $address . 'C/O ' . $shipping_dealer . '<br/>';
		}
		$i++;
		if ( ! empty( $raw_address['address_1'] ) ) {
			$address = $address . $raw_address['address_1'] . '<br/>';
		}
		$i++;

		if ( ! empty( $raw_address['address_2'] ) ) {
			$address = $address . $raw_address['address_2'] . '<br/>';
		}
		$i++;

		if ( ! empty( $raw_address['city'] ) ) {
			$address = $address . $raw_address['city'];
		}
		$i++;

		if ( ! empty( $raw_address['state'] ) ) {
			$address = $address . ', ' . $raw_address['state'];
		}
		$i++;

		if ( ! empty( $raw_address['postcode'] ) ) {
			$address = $address . ', ' . $raw_address['postcode'] . '<br/>';
		}
		$i++;


		if ( ! empty( $raw_address['country'] ) ) {
			$long_country = WC()->countries->get_countries()[$raw_address['country']];
			$address = $address . $long_country . '<br/>';
		}
		$i++;
		
		$shipping_email = $order->get_meta('_shipping_email');
		if ( $shipping_email ) {
			$address = $address . $shipping_email . '<br/>';
		}
		$i++;
		$shipping_phone = $order->get_meta('_shipping_phone');
		if ( $shipping_phone ) {
			$address = $address . $shipping_phone . '<br/>';
		}
		$i++;

		$shipping_note = $order->get_meta('_shipping_note');
		if ( $shipping_note ) {
			$address = $address . $shipping_note . '<br/>';
		}
		$i++;

		return $address;
	}

	public function add_fields( $fields ) {

		$shipping_dealer =  ['shipping_dealer' => array(
	        'label'     => __('Care of', 'woocommerce'),
		    'placeholder'   => _x('Your Business Name', 'placeholder', 'woocommerce'),
		    'required'  => true,
		    'class'     => array('form-row-wide'),
		    'clear'     => true,
		    //'default'   => $dealer->post_title, // this did not work as expected
		    'priority'  => 41,
	     )];
		$shipping_email =  ['shipping_email' => array(
	        'label'     => __('Shipping Email', 'woocommerce'),
		    'placeholder'   => _x('Recipient Email', 'placeholder', 'woocommerce'),
		    'required'  => false,
		    'class'     => array('form-row-wide'),
		    'clear'     => true,
		    'priority'  => 93
	     )];
		$shipping_phone =  ['shipping_phone' => array(
	        'label'     => __('Ship to Phone', 'woocommerce'),
		    'placeholder'   => _x('Recipient Phone', 'placeholder', 'woocommerce'),
		    'required'  => false,
		    'class'     => array('form-row-wide'),
		    'clear'     => true,
		    'priority'  => 94
	     )];
		$shipping_note =  ['shipping_note' => array(
			'type'      => 'textarea',
	        'label'     => __('Shipping Note', 'woocommerce'),
		    'placeholder'   => _x('Note for Shipping', 'placeholder', 'woocommerce'),
		    'required'  => false,
		    'class'     => array('form-row-wide'),
		    'clear'     => true,
		    'priority'  => 95
	     )];
		$shipping_address_type =  ['shipping_address_type' => array(
			'type'      => 'checkbox',
	        'label'     => __('Using a pre-saved dealer address', 'woocommerce'),
		    'required'  => true,
		    'class'     => array('form-row-wide'),
		    'clear'     => true,
		    'priority'  => 95
	     )];
		$fields['shipping_company']['label'] = "Ship to";
		$fields['shipping_company']['required'] = true;
		$fields['shipping_company']['priority'] = 40;
		$fields['shipping_country']['priority'] = 81;
		$fields['shipping_state']['priority'] = 78;
		$fields['shipping_postcode']['priority'] = 80;
		$fields['shipping_last_name']['priority'] = 92;
		$fields['shipping_last_name']['label'] = 'Ship to contact name';
		$fields['shipping_address_1']['label'] = 'address';
		$fields['shipping_address_1']['placeholder'] = 'Number and street name';
		$fields = $shipping_dealer + $fields + $shipping_email + $shipping_phone + $shipping_note + $shipping_address_type;
     	return $fields;
	}

	public function add_order_fields( $fields ) {
		$fields['order']['billing_sales_order_po'] =  array(
	        'label'     => __('Sales Order # (optional)', 'woocommerce'),
		    'placeholder'   => _x(' ', 'placeholder', 'woocommerce'),
		    'required'  => false,
		    'class'     => array('form-row-wide'),
		    'clear'     => true
	     );

		$fields['order']['billing_sales_order_tag'] =  array(
	        'label'     => __('Tag (optional)', 'woocommerce'),
		    'placeholder'   => _x(' ', 'placeholder', 'woocommerce'),
		    'required'  => false,
		    'class'     => array('form-row-wide'),
		    'clear'     => true
	     );

		$fields['order']['billing_sales_order_copy_geovin'] =  array(
			'type'      => 'checkbox',
	        'label'     => __('Send order to sales@geovin.com', 'woocommerce'),
		    'required'  => false,
		    'class'     => array('input-checkbox'),
		    'clear'     => true,
		    'default' => 'checked'
	     );

		$fields['order']['billing_sales_order_send_to'] =  array(
	        'label'     => __('Also send to', 'woocommerce'),
		    'placeholder'   => _x('Multiple emails to be separated by comma', 'placeholder', 'woocommerce'),
		    'required'  => false,
		    'class'     => array('form-row-wide'),
		    'clear'     => true
	     );
		
     	return $fields;
	}

	public function remove_fields( $address_fields ) {
		unset($address_fields['billing_phone']);
		unset($address_fields['billing_email']);
		unset($address_fields['billing_first_name']);
		unset($address_fields['billing_last_name']);
		return $address_fields;
	}

	public function remove_shipping_fields( $address_fields ) {
		unset($address_fields['shipping_first_name']);

		return $address_fields;
	}

	/* Load to get subpremise (apartment, unit number) in map result to save) */
	public function add_admin_scripts($hook) {

	    global $parent_file;
	    if ('edit.php?post_type=geovin_dealer' != $parent_file) {
	        return;
	    }

	    wp_enqueue_script( 'geovin-acf-map-filter' , get_plugin_url() . 'assets/js/filter-map.js', array( 'jquery' ), '2', true );
	 
	}


	/* Make Company Required Field */
	/* Assign State Country for billing to dealer country */
	public function adjust_field_args( $args, $key, $value ) {

		if ( $key === 'order_comments' ) {
			$args['label'] = 'Sales Order Notes';
			$args['placeholder'] = ' ';
			$args['maxlength'] = 500;
		}
		if ( $key === 'billing_company' ) {
			$args['required'] = true;
		}
		if ( $key === 'billing_state' ) {
			$dealer = Geovin_Dealers::get_dealer();
			$dealer_addresses = Geovin_Dealers::get_dealer_addresses( $dealer->ID );
			$dealer_country = isset($dealer_addresses[0]['location_data']['country']) ? $dealer_addresses[0]['location_data']['country'] : false;
			if ( $dealer_country === 'United States' ) {
				$args['country'] = 'US';
			} elseif ( $dealer_country === 'Canada' ) {
				$args['country'] = 'CA';
			}
		}
		if ( strpos($key,'billing') !== false ) {
			$args['required'] = false;
		}
		if ( empty($args['placeholder']) ) {
			$args['placeholder'] = $args['label'];
		}
		return $args;
	}

	public function adjust_billing_fields( $field, $key, $args, $value ) {
		$dealer = Geovin_Dealers::get_dealer();
		$dealer_addresses = Geovin_Dealers::get_dealer_addresses( $dealer->ID );
		$primary_address = isset($dealer_addresses[0]['location_data']) ? $dealer_addresses[0]['location_data'] : false;

		if ( $key === 'order_comments' ) {
			$field = str_replace('</textarea></span></p>', '</textarea><span class="textarea-counter" style="float:right;"><small>
    <span class="current-count">0</span>
    <span class="maximum">/ <span class="max-count"></span> character max </span></small>
  </span></span></p>', $field);
		}
		if ( $key === 'shipping_dealer') {
			$field = str_replace('value=""', 'value="'.$dealer->post_title.'"', $field);
		}

		if ( $key === 'shipping_address_type' ) {
			$field = str_replace('<input', '<input disabled ', $field);
		}

		if ( strpos( $key, 'billing' ) !== false && $primary_address ) {

			$optional = '&nbsp;<span class="optional">(' . esc_html__( 'optional', 'woocommerce' ) . ')</span>';
			$field = str_replace( $optional, '', $field );

			$required = '<abbr class="required" title="required">*</abbr>';
			$field = str_replace( $required, '', $field );
			
			$new_value = false;
			$managers = Geovin_Dealers::get_dealer_managers();
	
			if ( $key === 'billing_company' ) {
				$new_value = $dealer->post_title;
			} elseif ( $key === 'billing_first_name' ) {
				$new_value = isset( $managers[0]->first_name ) ? $managers[0]->first_name : false;
				$size = strlen( $new_value );
				$field = str_replace('id="billing_first_name"', 'id="billing_first_name" size="' . $size . '"', $field);
			} elseif ( $key === 'billing_last_name' ) {
				$new_value = isset( $managers[0]->last_name ) ? $managers[0]->last_name : false;
			} elseif ( $key === 'billing_address_1' ) {
				$new_value = isset( $primary_address['normalized_address_line_1'] ) ? $primary_address['normalized_address_line_1'] : $primary_address['street_number'] . ' ' . $primary_address['street_name'];
			} elseif ( $key === 'billing_address_2' ) {
				$new_value = isset( $primary_address['subpremise'] ) ? $primary_address['subpremise'] : false;

				if ( ! $new_value ) {
					$field = str_replace('class="form-row form-row-wide address-field"', 'class="form-row form-row-wide address-field hidden"', $field);

				}
			} elseif ( $key === 'billing_postcode' ) {
				$new_value = $primary_address['post_code'];
				$new_value = $new_value;
				$size = strlen( $new_value );
				$field = str_replace('id="billing_postcode"', 'id="billing_postcode" size="' . $size . '"', $field);
			} elseif ( $key === 'billing_state' ) {

				if ( ! isset( $primary_address['country_short'] ) ) {
					$countries = WC()->countries->get_countries();

					foreach( $countries as $key => $country ) {
							if ( $country === $primary_address['country'] ) {
								$primary_address['country_short'] = $key;
							}
						}
				}
				if ( ! isset( $primary_address['state_short'] ) ) {
					$states = WC()->countries->get_states($primary_address['country_short']);

					foreach( $states as $key => $state ) {
						if ( $state === $primary_address['state'] ) {
							$primary_address['state_short'] = $key;
							break;
						}
					}
				}
				$new_value = isset( $primary_address['state_short'] ) ? $primary_address['state_short'] : '';
				$size = strlen( $new_value );
				$field = str_replace('id="billing_state"', 'id="billing_state" size="' . $size . '"', $field);
				$field = str_replace('</span></p>',',&nbsp;</span></p>', $field);
			} elseif ( $key === 'billing_country' ) {

				if ( ! isset( $primary_address['country_short'] ) ) {
					$countries = WC()->countries->get_countries();

					foreach( $countries as $key => $country ) {
							if ( $country === $primary_address['country'] ) {
								$primary_address['country_short'] = $key;
							}
						}
				}
				$new_value = isset( $primary_address['country_short'] ) ? $primary_address['country_short'] : '';
			} else {
				$parsed_key = str_replace('billing_', '', $key);
				$new_value = isset( $primary_address[$parsed_key] ) ? $primary_address[$parsed_key] : false;

				if ( $key === 'billing_city' ) {
					$new_value = $new_value;
					$size = strlen( $new_value );
					$field = str_replace('id="billing_city"', 'id="billing_city" size="' . $size . '"', $field);
					$field = str_replace('</span></p>',',&nbsp;</span></p>', $field);
				}
			}

			if ( $value && $new_value && $args['type'] === 'text' ) {
				$field = str_replace($value, $new_value, $field);
				$field = str_replace('<input', '<input disabled ', $field);
			} elseif ( $new_value && $args['type'] === 'text' ) {
				$field = str_replace('value=""', 'value="' . $new_value . '"', $field);
				$field = str_replace('<input', '<input disabled ', $field);
			} elseif ( $args['type'] === 'country' || $args['type'] === 'state' ) {
				if ( $new_value === 'United States' ) {
					$new_value = "US";
				} elseif ( $new_value === 'Canada' ) {
					$new_value = "CA";
				}
				
				if ( $value && $new_value ) {
					$field = str_replace("selected='selected'", '', $field);
					$field = str_replace('selected="selected"', '', $field);
					$field = str_replace('value="'. $new_value . '"', 'value="' . $new_value . '"  selected="selected"', $field );
					$field = str_replace('<select', '<select disabled ', $field );
				} elseif ( $new_value ) {
					$field = str_replace('value="' . $new_value . '"', 'value="' . $new_value . '"  selected="selected"',  $field );
					$field = str_replace('<select', '<select disabled ', $field );
				}
			} 
		}

		if ( $key === 'billing_sales_order_send_to' ) {
			$user = wp_get_current_user();
			$field = str_replace('><label for="billing_sales_order_send_to"','><span>'. $user->user_email.' will receive this order via email.</span><label for="billing_sales_order_send_to"', $field);
			$field = str_replace('</p>','<span><small>Please add email(s) you would like copied. You may add multiple emails, separated by a comma.</small></span></p>', $field);
		}

		if ( $key === 'billing_sales_order_copy_geovin' ) {
			$field = str_replace('</p>','<span><small>Uncheck to send a draft copy of the order to yourself and any emails you have entered above.</small></span></p>', $field);
		}

		return $field;
	}
}

new Cart();

