$('.home').hide();





$(document).ready(function () {


    $('.ordernow_button').click(function () {
        $('.home').show();
        $('.promotion_containers').show();
        $('.Welcome_page').hide();
        $('.cart_txt').hide();
    });

    $('.profile').click(function () {
        $('.home').hide();
        $('.welcome_page').show();

    });

    $('.cart').click(function () {
        $('.search').hide();
        $('.Welcome_page').hide();
        $('.cart_txt').show();

    });

    $('.menu').click(function () {
        $('.search').show();
        $('.Welcome_page').hide();
        $('.cart_txt').hide();

    });

    $('.favourite').click(function () {
        $('.search').hide();
        $('.Welcome_page').hide();
        $('.cart_txt').hide();

    });

  

}); //end here