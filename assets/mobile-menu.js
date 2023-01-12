jQuery(document).ready(function($) {
    $('.icon-menu').click(function(){
        $('.mobile-menu-container').fadeIn('fast');
        $('.icon-menu').css('display','none');
        $('.icon-menu-close').css('display','block');
        $('body').css('overflow','hidden');
    });
    $('.icon-menu-close').click(function(){
        $('.mobile-menu-container').fadeOut('fast');
        $('.icon-menu').css('display','block');
        $('.icon-menu-close').css('display','none');
        $('body').css('overflow','auto');
    });
    $('.menu-item-1 > .icon-dropdown').click(function(){
        $(this).parent().toggleClass('active');
        $(this).siblings('ul').slideToggle('fast');
    });
    $('.menu-item-2 > .icon-dropdown').click(function(){
        $(this).parent().toggleClass('active');
        $(this).siblings('ul').slideToggle('fast');
    });
    $(window).resize(function() {
        var width = $(window).width();
        if (width > 768){
            $('.icon-menu').css('display','none');
            $('.icon-menu-close').css('display','none');
            $('.mobile-menu-container').css('display','none');
        }
        if (width <= 768){
            $('.icon-menu').css('display','block');
            $('.icon-menu-close').css('display','none');
        }
    });
})