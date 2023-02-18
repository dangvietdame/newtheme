jQuery(document).ready(function($) {
    $('.product-description-wrapper .seemore').click(function(){
        $(this).siblings('.sur-description').toggleClass('active');
        $(this).siblings('.bread-description').toggleClass('de-active');
        $(this).children('.icon-dropdown').toggleClass('de-active');
        $(this).children('.icon-dropdown-up').toggleClass('active');

    });
})