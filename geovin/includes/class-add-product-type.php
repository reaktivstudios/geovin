<?php
/**
 * Geovin Variable Product Type
 */
namespace Geovin;

if ( ! defined( 'ABSPATH' ) ) {
    return;
}

class Add_Product_Type {

    /**
     * Build the instance
     */
    public function __construct() {
        add_action( 'woocommerce_loaded', array( $this, 'load_product_type' ) );
        add_filter( 'product_type_selector', array( $this, 'add_type' ) );
        register_activation_hook( __FILE__, array( $this, 'install' ) );

        add_filter('woocommerce_product_class', array( $this, 'geovin_variable_product_type_class'), 10, 2);

        add_action('admin_footer', array($this,'geovin_variable_product_type_data_tabs'));


        add_filter('woocommerce_product_data_tabs', array($this,'geovin_variable_product_data_tabs_for_product'), 10, 1);

        add_filter('woocommerce_delete_variations_on_product_type_change', array($this,'do_not_remove_variations'), 10, 4);
        add_filter( 'woocommerce_data_stores', array($this,'geovin_variable_data_store'), 10, 1 );
        //add_action( 'woocommerce_geovin_add_to_cart', 'woocommerce_variable_add_to_cart' );

        add_action( 'wp_ajax_woocommerce_get_variation_from_sku', array( $this, 'get_variation_from_sku' ) );
        add_action( 'wp_ajax_nopriv_woocommerce_get_variation_from_sku', array( $this, 'get_variation_from_sku' ) );

        // WC AJAX can be used for frontend ajax requests.
        add_action( 'wc_ajax_get_variation_from_sku', array( $this, 'get_variation_from_sku' ) );

        add_filter( 'woocommerce_add_to_cart_handler', array( $this, 'filter_add_to_cart_type' ), 10, 2 );

        add_action( 'woocommerce_after_variations_table', array( $this, 'add_cart_image_input' ) );

        add_filter( 'woocommerce_add_cart_item_data', array( $this, 'add_cart_image_data' ), 10, 4 );

        add_filter( 'woocommerce_cart_item_thumbnail', array( $this, 'adjust_cart_thumb' ), 10, 3 );

    }

    public function adjust_cart_thumb( $image, $cart_item, $cart_item_key ) {
        if ( isset( $cart_item['image_to_use'] ) && $cart_item['image_to_use'] !== '' ) {
            $image = '<img width="300" height="300" src="' . $cart_item['image_to_use'] . '" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" loading="lazy" />';
        }
        return $image;
    }

    public function add_cart_image_data( $cart_item_data, $product_id, $variation_id, $quantity ) {
        $cart_item_data['image_to_use'] = $_REQUEST['cart_image_to_use'];
        $cart_item_data['link_to_use'] = $_REQUEST['cart_link_to_use'];
        $cart_item_data['dimensions_to_use'] = $_REQUEST['cart_dimensions_to_use'];
        $cart_item_data['niceatts_to_use'] = $_REQUEST['cart_niceatts_to_use'];

        return $cart_item_data;
    }

    public function add_cart_image_input() {
        echo '<input type="hidden" name="cart_image_to_use" id="cart_image_to_use" value="" />';
        echo '<input type="hidden" name="cart_link_to_use" id="cart_link_to_use" value="" />';
        echo '<input type="hidden" name="cart_dimensions_to_use" id="cart_dimensions_to_use" value="" />';
        echo '<input type="hidden" name="cart_niceatts_to_use" id="cart_niceatts_to_use" value="" />';
    }

    /* 
     * Make sure that our product type is seen as a variable product when added to cart
     */
    public function filter_add_to_cart_type( $type, $adding_to_cart ) {      
        if ( $type === 'geovin' ) {
            $type = 'variable';
        }
        return $type;
    }

    /**
     * Defines Data Store Class for new custom product type
     * @param array $stores
     * @return array
     */
    function geovin_variable_data_store( $stores ) {
        $stores['product-geovin'] = 'WC_Product_Variable_Data_Store_CPT';
        return $stores;
    }

    public function do_not_remove_variations( $condition, $product, $from, $to ) {
        if ( $to === 'geovin' || $to === 'variable' ) {
            return false;
        } elseif ( $from === 'geovin' && $to === 'simple' ) {
            return true;
        } else {
            return $condition;
        } 
    }
    public function geovin_variable_product_data_tabs_for_product($tabs) {
        array_push($tabs['attribute']['class'], 'show_if_variable show_if_geovin');
        array_push($tabs['variations']['class'], 'show_if_geovin');
        array_push($tabs['inventory']['class'], 'show_if_geovin');
        array_push($tabs['general']['class'], 'show_if_geovin');

        return $tabs;
    }

    public function geovin_variable_product_type_data_tabs() {
        if('product' != get_post_type()) :
            return;
        endif;
        ?>
        <script type='text/javascript'>
        jQuery(document).ready(function () {
              
        jQuery('.enable_variation').addClass('show_if_geovin').show();
                    jQuery('.inventory_options').addClass('show_if_geovin').show();
        jQuery('#inventory_product_data ._manage_stock_field').addClass('show_if_geovin').show();
        jQuery('#inventory_product_data ._sold_individually_field').parent().addClass('show_if_geovin').show();
        jQuery('#inventory_product_data ._sold_individually_field').addClass('show_if_geovin').show();
                });
        </script>
        <?php

    }

    public function geovin_variable_product_type_class( $classname, $product_type ) {
    if ( $product_type == 'geovin' ) {
        $classname = 'Geovin\Geovin_Variable_Product';
        }
        return $classname;
    }

    /**
     * Load WC Dependencies
     *
     * @return void
     */
    public function load_product_type() {
        require get_plugin_dir() . 'includes/class-geovin-variable-product.php';
    }

    /**
     * Advanced Type
     *
     * @param array $types
     * @return void
     */
    public function add_type( $types ) {
        $types['geovin'] = __( 'Geovin Variable', 'geovin' );
       
        return $types;
    }

    /**
     * Installing on activation
     *
     * @return void
     */
    public function install() {
        // If there is no advanced product type taxonomy, add it.
        if ( ! get_term_by( 'slug', 'geovin', 'product_type' ) ) {
            wp_insert_term( 'geovin', 'product_type' );
        }
    }

    /**
     * Get a matching variation based on sku.
     */
    public static function get_variation_from_sku() {
        ob_start();

        if ( empty( $_POST['sku'] ) ) {
            wp_die();
        }
        $variable_product_id = wc_get_product_id_by_sku( $_POST['sku'] );
        $variable_product = wc_get_product( absint( $_POST['product_id'] ) );

        if ( ! $variable_product ) {
            wp_die();
        }

        $variation    = $variable_product_id ? $variable_product->get_available_variation( $variable_product_id ) : false;
        wp_send_json( $variation );

    }
}

new Add_Product_Type();