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
});

var selectCallback = function(variant, selector) {
    document.getElementById('product-price').innerHTML = Shopify.formatMoney(variant.price, '');
    if (variant.compare_at_price > 0){
        document.getElementById('compare-price').innerHTML = Shopify.formatMoney(variant.compare_at_price, '');
    }
    else {
        document.getElementById('compare-price').innerHTML = '';
    }
    if (variant.available == false){
        document.getElementById('variant-available').innerHTML = 'Sold Out';
    }
    else{
        document.getElementById('variant-available').innerHTML = '';

    }
}  