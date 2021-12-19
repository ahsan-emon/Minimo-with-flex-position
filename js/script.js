(function($){
    $(document).ready(function(){
        $('.lifestyle-hide').hide();
        $('.load-more-button button').click(function(){
            $('.load-more-button').fadeOut(100);
            $('.lifestyle-hide').fadeIn(100);
        });
    });
})(jQuery)