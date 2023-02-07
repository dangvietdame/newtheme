jQuery(document).ready(function($) {
    //Active Menu Overlay
    $('.col-menu .menu-item-1, .col-menu .collections').hover(function(){
        $('.menu-overlay').toggleClass('menu-overlay-active');
    });
    //ALignment megamenu vector X
    var offset10 = $('.has-megamenu').offset();
    $('.mega-menu-wrapper').css('left', - offset10.left);

    $( window ).resize(function() {
        var offset1 = $('.has-megamenu').offset();
        $('.mega-menu-wrapper').css('left', - offset1.left);
    });

    //Dropdown category in search form
    $('.category').click(function(){
        $('.category .dropdown-list').slideToggle(300);
    }); 
    
    //Sidebar menu

    //Hide and Show sidebar menu
    $('.mobile-layout .icon-menu').click(function(){
        $('.container-inner').css('transform','translateX(32vw)');
        $('.container-inner').css('position','fixed');
        $('.sidebar-menu').css('opacity',1);
        $('.mobile-layout .close-button').css('display','flex');
        $('.mobile-layout .icon-menu').css('display','none');
    });
    $('.mobile-layout .close-button').click(function(){
        $('.container-inner').css('transform','translateX(0)');
        $('.container-inner').css('position','relative');
        $('.sidebar-menu').css('opacity',0);
        $('.mobile-layout .close-button').css('display','none');
        $('.mobile-layout .icon-menu').css('display','block');

    });
    //Alignment Submenu Vector Y
    $('.sidebar-menu-container .menu-item-1').each(function(){
        var offset2 = $(this).offset();
        $(this).children('.menu-2').css('top', - offset2.top);
    });
    $('.sidebar-menu-container .menu-item-2').each(function(){
        var offset3 = $(this).offset();
        $(this).children('.menu-3').css('top', - offset3.top);
    });
    $('.sidebar-menu-container .collection-item-wrapper').each(function(){
        var offset4 = $(this).offset();
        $(this).children('.type-tag-wrapper').css('top', - offset4.top);
    });
    $('.sidebar-menu-container .type-item-wrapper').each(function(){
        var offset5 = $(this).offset();
        $(this).children('.tag-wrapper').css('top', - offset5.top);
    });
    //Add class active for submenu and align sub-submenu
    $('.has-dropdown > .icon-dropdown-right').click(function(){
        $(this).siblings('ul').addClass('menu-active');
    });
    $('.menu-title > .icon-arrow-left').click(function(){
        $(this).parent().parent().removeClass('menu-active');
    });

    $('.collection-item-wrapper > .icon-dropdown-right').click(function(){
        $(this).siblings('ul').addClass('active');
    });
    $('.title > .icon-arrow-left').click(function(){
        $(this).parent().parent().removeClass('active');
    });

    $('.type-item-wrapper > .icon-dropdown-right').click(function(){
        $(this).siblings('ul').addClass('active');
    });
});