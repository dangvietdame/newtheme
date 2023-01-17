jQuery(document).ready(function($) {
    $('.cover-image').click(function(){
        $('.video-popup').fadeIn('fast');
        $('body').css('overflow','hidden');
    });
    $('.video-popup, .video-popup .icon-close').click(function(){
        $('.video-popup').fadeOut('fast');
        $('body').css('overflow','auto');
    });
})