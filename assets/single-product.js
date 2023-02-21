jQuery(document).ready(function($) {
    //See more Description toggle
    $('.single-product-layout-1 .product-description-wrapper .seemore').click(function(){
        $(this).siblings('.sur-description').toggleClass('active');
        $(this).siblings('.bread-description').toggleClass('de-active');
        $(this).children('.icon-dropdown').toggleClass('de-active');
        $(this).children('.icon-dropdown-up').toggleClass('active');
    });

    //Accordion toggle
    $('.single-product-layout-1 .accordion-header').click(function(){
        $(this).siblings('.accordion-content').slideToggle('fast');
    });
})