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

     /* change dots onscroll page*/
     $(window).scroll(function (event) {
        if ($("#first_page").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#first_dot").addClass('scroll_item_active');
            $("#second_dot").removeClass('scroll_item_active');
            $("#third_dot").removeClass('scroll_item_active');
            $("#fours_dot").removeClass('scroll_item_active');
            $("#fives_dot").removeClass('scroll_item_active');
        }
        if ($("#second_page").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#second_dot").addClass('scroll_item_active');
            $("#first_dot").removeClass('scroll_item_active');
            $("#third_dot").removeClass('scroll_item_active');
            $("#fours_dot").removeClass('scroll_item_active');
            $("#fives_dot").removeClass('scroll_item_active');
            
        }
        if ($("#third_page").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#third_dot").addClass('scroll_item_active');
            $("#first_dot").removeClass('scroll_item_active');
            $("#second_dot").removeClass('scroll_item_active');
            $("#fours_dot").removeClass('scroll_item_active');
            $("#fives_dot").removeClass('scroll_item_active');
        }
        if ($("#testimonials").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#fours_dot").addClass('scroll_item_active');
            $("#first_dot").removeClass('scroll_item_active');
            $("#second_dot").removeClass('scroll_item_active');
            $("#third_dot").removeClass('scroll_item_active');
            $("#fives_dot").removeClass('scroll_item_active');
        }
        if ($("#footer").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#first_dot").removeClass('scroll_item_active');
            $("#second_dot").removeClass('scroll_item_active');
            $("#third_dot").removeClass('scroll_item_active');
            $("#fours_dot").removeClass('scroll_item_active');
            $("#fives_dot").addClass('scroll_item_active');
        }
    });
}); 
