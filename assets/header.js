jQuery(document).ready(function($) {
    //Active Menu Overlay
    $('.col-menu .menu-item-1, .col-menu .collections').hover(function(){
        $('.menu-overlay').toggleClass('menu-overlay-active');
    });

    //ALignment megamenu
    var offset1 = $('.mega-menu-wrapper').offset();
    $('.mega-menu-wrapper').css('left', - offset1.left);
    $('.category').click(function(){
        $('.category .dropdown-list').slideToggle(300);
    }); 
    
    //Sidebar menu
    $('.mobile-layout .icon-menu').click(function(){
        $('.container-inner').css('transform','translateX(370px)');
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

    $('.sidebar-menu-container .menu-item-1').each(function(){
        var offset2 = $(this).offset();
        $(this).children('.menu-2').css('top', - offset2.top);
    });

    $('.has-dropdown > .icon-dropdown-right').click(function(){
        $(this).siblings('ul').addClass('menu-active');
    });
});