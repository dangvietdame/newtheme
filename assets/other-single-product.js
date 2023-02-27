$(document).ready(function() {
    //Change data in input quantity product
    $('.quantity .quantity-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.quantity .quantity-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.add-to-cart').click(function(){ 
        console.log(currentVariant.id)
        // addItemToCart( '44502547988775', 1)
    });
    
    function addItemToCart(variant_id, qty) {
    data = {
        "id": variant_id,
        "quantity": qty
    }
    
    jQuery.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: data,
        dataType: 'json',
        success: function() { 
        document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
            bubbles: true  //this code is for prestige theme, is to refresh the cart
        }));
        }
    });
    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
        bubbles: true    // same code for prestige theme   
        }));
    }
});