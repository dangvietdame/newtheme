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
    document.getElementById('demo').innerHTML = Shopify.formatMoney(variant.price, '')
}  