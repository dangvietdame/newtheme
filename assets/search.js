jQuery(document).ready(function($) {
    $('.icon-search').click(function(){
        $('.search-container').css({"opacity":1,"z-index":1});
        $('.overlay').css({"opacity":0.5,"z-index":0});
        $('body').css('overflow','hidden');
    });
    $('.icon-close').click(function(){
        $('.search-container').css({"opacity":0,"z-index":-1});
        $('.overlay').css({"opacity":0, "z-index":-1});
        $('body').css('overflow','auto');
    });  
})