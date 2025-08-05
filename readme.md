# Geovin Plugin

## Description
The **Geovin** plugin is a custom WordPress plugin designed to enhance e-commerce functionality for Geovin products. It integrates advanced features such as geolocation-based pricing, ShapeDiver 3D model integration, custom WooCommerce product types, and dealer management tools.

## Features
- **Geolocation-Based Pricing**: Dynamically calculate and display prices based on the user's location.
- **ShapeDiver Integration**: Interactive 3D model viewer for product customization.
- **Custom WooCommerce Product Types**: Support for variable products with advanced attributes.
- **Dealer Management**: Tools for managing dealers, pricing tiers, and user roles.
- **Custom Shortcodes**: Dynamic shortcodes for embedding product specifications and dealer onboarding forms.
- **AJAX-Powered Features**: Seamless user experience with AJAX-based updates for cart, pricing, and product variations.

## File Structure
```
geovin/
    geovin.php
    composer.json
    package.json
    tsconfig.json
    webpack.config.js
    assets/
        js/
            add-to-cart-geovin-variation.js
            geo-transit-price.js
            shapediver.js
    includes/
        class-add-product-type.php
        class-cart.php
        class-geolocation.php
        class-geovin-dealers.php
        class-geovin-product-page.php
        class-invite-users.php
        class-shapediver.php
        woocommerce-filters.php
    templates/
    vendor/
```


## Usage
- **Geolocation Pricing**: Automatically calculates pricing based on user location. Customize logic in `class-geolocation.php`.
- **ShapeDiver Viewer**: Embed 3D models using the ShapeDiver API. Customize behavior in `assets/js/shapediver.js`.
- **Custom Product Types**: Add advanced product types and attributes using `class-add-product-type.php`.
- **Dealer Management**: Manage dealers and pricing tiers via the WordPress admin interface.
- **Shortcodes**:
  - `[dynamic_spec spec="spec_name"]`: Embed dynamic product specifications.
  - `[dealer_onboarding_page]`: Display dealer onboarding forms.

## Development
### Prerequisites
- WordPress installation.
- PHP 7.4 or higher.
- Composer for dependency management.
- Node.js and npm for asset building.

### Sample Purposes Only