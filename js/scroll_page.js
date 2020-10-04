$(document).ready(function(){
    $('.dots').click(function(){
        $('.dots').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.play_btn').click(function(){
        $('.video_container').css("display", "block");
    });

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('#up_down_text').text('вгору');
        } else {
            $('#up_down_text').text('вниз');
        };
       
     });

});
