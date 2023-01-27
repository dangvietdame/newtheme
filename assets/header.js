jQuery(document).ready(function($) {
    $('.icon-menu').click(function(){
        // $('.mobile-menu-container').fadeIn('fast');
        // $('.icon-menu').css('display','none');
        // $('.icon-menu-close').css('display','block');
        // $('body').css('overflow','hidden');
    });
    $('.icon-menu-close').click(function(){
        // $('.mobile-menu-container').fadeOut('fast');
        // $('.icon-menu').css('display','block');
        // $('.icon-menu-close').css('display','none');
        // $('body').css('overflow','auto');
    });
    $('.icon-dropdown').click(function(){
        // $(this).parent().addClass('active');
        // $(this).siblings('ul').slideDown('fast');
        // $(this).parent().siblings('li').children('ul').css('display','none');
        // $(this).parent().siblings('li').children('ul').children('.has-dropdown').children('ul').css('display','none');
        // $(this).parent().siblings('.has-dropdown').children('.icon-dropdown').css('display','inline');
        // $(this).parent().siblings('.has-dropdown').children('.icon-dropdown-up').css('display','none');
        // $(this).parent().siblings('.has-dropdown').children('.has-dropdown').children('.has-dropdown').children('.icon-dropdown').css('display','inline');
        // $(this).parent().siblings('.has-dropdown').children('.has-dropdown').children('.has-dropdown').children('.icon-dropdown-up').css('display','none');
        // $(this).css('display','none');
        // $(this).siblings('.icon-dropdown-up').css('display','inline');
    });
    $('.icon-dropdown-up').click(function(){
        // $(this).parent().removeClass('active');
        // $(this).siblings('ul').slideUp('fast');
        // $(this).css('display','none');
        // $(this).siblings('.icon-dropdown').css('display','inline');
    });
    $(window).resize(function() {
        var width = $(window).width();
        if (width > 768){
            // $('.icon-menu').css('display','none');
            // $('.icon-menu-close').css('display','none');
            // $('.mobile-menu-container').css('display','none');
        }
        if (width <= 768){
            // $('.icon-menu').css('display','block');
            // $('.icon-menu-close').css('display','none');
        }
    });
})