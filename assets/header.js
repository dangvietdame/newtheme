jQuery(document).ready(function($) {
    $('.menu-item-1, .collections').hover(function(){
        $('.menu-overlay').toggleClass('menu-overlay-active');
    });

    var offset = $('.mega-menu-wrapper').offset();
    $('.mega-menu-wrapper').css('left', - offset.left);
})