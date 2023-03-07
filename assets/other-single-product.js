$(document).ready(function() {
    //Change data in input quantity product
    $('.quantity .minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.quantity .plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
var selectCallback = function(variant, selector) {
    // callback content
    document.getElementById('single-product-price').innerHTML = Shopify.formatMoney(variant.price);

    var compare_price = document.getElementById('single-product-compare-price');
    if (variant.compare_at_price > 0){
        compare_price.innerHTML = Shopify.formatMoney(variant.compare_at_price);
    }
    else{
        compare_price.innerHTML = '';
    }
    
    var available = document.getElementById('single-product-available');
    var add_to_cart = document.getElementById('add-to-cart-button');
    var buy_now = document.getElementsByClassName('shopify-payment-button__button');
    if (variant.available == false){
        available.innerHTML = available.dataset.available;
        add_to_cart.innerHTML = add_to_cart.dataset.sold_out;
        add_to_cart.removeAttribute('class','add-to-cart-button');
        add_to_cart.setAttribute('class','sold-out-button');
        add_to_cart.setAttribute('disabled','disable');
    }
    else{
        available.innerHTML = '';
        add_to_cart.innerHTML = add_to_cart.dataset.value;
        add_to_cart.removeAttribute('class','sold-out-button');
        add_to_cart.removeAttribute('disabled');
        add_to_cart.setAttribute('class','add-to-cart-button');
    }
}