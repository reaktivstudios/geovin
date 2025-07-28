<?php

namespace Geovin;
use WC_Product_Variable;

defined( 'ABSPATH' ) || exit;

/**
 * Geovin Variable product class extends WC_Product_Variable
 * This class is used to eliminate intensive queries that are unnecessary for Geovin products, and create lag due to 
 * the number of variations and attributes Geovin products have.
 */
class Geovin_Variable_Product extends \WC_Product_Variable {


	public function __construct( $product ) {
        parent::__construct( $product );
        add_action( 'woocommerce_geovin_add_to_cart', 'woocommerce_variable_add_to_cart' );
    }

	/**
     * Return the product type
     * @return string
     */
    public function get_type() {
    	if ( ! is_admin() && is_product() ) {
    		return parent::get_type();
    	} 
        return 'geovin';
    }

    /**
	 * Returns an array of data for a variation. Used in the add to cart form.
	 *
	 * @since  2.4.0
	 * @param  WC_Product $variation Variation product object or ID.
	 * @return array|bool
	 */
	public function get_available_variation( $variation ) {

		if ( is_numeric( $variation ) ) {
			$variation = wc_get_product( $variation );
		}
		
		// See if prices should be shown for each variation after selection.
		// We need to ensure this is always set to true, so it doesn't query all pricing on variations
		$show_variation_price = true;

		return apply_filters(
			'woocommerce_available_variation',
			array(
				'attributes'            => $variation->get_variation_attributes(),
				'availability_html'     => wc_get_stock_html( $variation ),
				'backorders_allowed'    => $variation->backorders_allowed(),
				'dimensions'            => $variation->get_dimensions( false ),
				'dimensions_html'       => wc_format_dimensions( $variation->get_dimensions( false ) ),
				'display_price'         => wc_get_price_to_display( $variation ),
				'display_regular_price' => wc_get_price_to_display( $variation, array( 'price' => $variation->get_regular_price() ) ),
				'image'                 => wc_get_product_attachment_props( $variation->get_image_id() ),
				'image_id'              => $variation->get_image_id(),
				'is_downloadable'       => $variation->is_downloadable(),
				'is_in_stock'           => $variation->is_in_stock(),
				'is_purchasable'        => $variation->is_purchasable(),
				'is_sold_individually'  => $variation->is_sold_individually() ? 'yes' : 'no',
				'is_virtual'            => $variation->is_virtual(),
				'max_qty'               => 0 < $variation->get_max_purchase_quantity() ? $variation->get_max_purchase_quantity() : '',
				'min_qty'               => $variation->get_min_purchase_quantity(),
				'price_html'            => $show_variation_price ? '<span class="price">' . $variation->get_price_html() . '</span>' : '',
				'sku'                   => $variation->get_sku(),
				'variation_description' => wc_format_content( $variation->get_description() ),
				'variation_id'          => $variation->get_id(),
				'variation_is_active'   => $variation->variation_is_active(),
				'variation_is_visible'  => $variation->variation_is_visible(),
				'weight'                => $variation->get_weight(),
				'weight_html'           => wc_format_weight( $variation->get_weight() ),
			),
			$this,
			$variation
		);
	}

	/**
	 * Returns whether or not the product is on sale.
	 *
	 * @param  string $context What the value is for. Valid values are view and edit. What the value is for. Valid values are view and edit.
	 * @return bool
	 */
	public function is_on_sale( $context = 'view' ) {
		//Geovin does not use sale prices, so we return false here to avoid unnecessary queries.
		return false;
	}

	/**
	 * Get an array of available variations for the current product.
	 *
	 * @param string $return Optional. The format to return the results in. Can be 'array' to return an array of variation data or 'objects' for the product objects. Default 'array'.
	 *
	 * @return array[]|WC_Product_Variation[]
	 */
	public function get_available_variations( $return = 'array' ) {
		$variation_ids        = $this->get_children();
		$available_variations = array();
		if ( is_callable( '_prime_post_caches' ) ) {
			_prime_post_caches( $variation_ids );
		}

		foreach ( $variation_ids as $variation_id ) {

			$variation = wc_get_product( $variation_id );
			// Hide out of stock variations if 'Hide out of stock items from the catalog' is checked.
			if ( ! $variation || ! $variation->exists() || ( 'yes' === get_option( 'woocommerce_hide_out_of_stock_items' ) && ! $variation->is_in_stock() ) ) {
				continue;
			}

			// Filter 'woocommerce_hide_invisible_variations' to optionally hide invisible variations (disabled variations and variations with empty price).
			if ( apply_filters( 'woocommerce_hide_invisible_variations', true, $this->get_id(), $variation ) && ! $variation->variation_is_visible() ) {
				continue;
			}

			if ( 'array' === $return ) {
				$available_variations[] = $this->get_available_variation( $variation );
			} else {
				$available_variations[] = $variation;
			}
		}

		if ( 'array' === $return ) {
			$available_variations = array_values( array_filter( $available_variations ) );
		}
		
		return $available_variations;
	}

	public function get_price_html( $price = '' ) {
		return 'Varies';
	}
}