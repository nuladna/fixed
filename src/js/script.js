
$('.mobile-btn').on('click', function () {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header_menu').toggleClass('show-menu');
    $('.header_link').toggleClass('show-header_link');
});

$('.header_menu nav a').on('click', function () {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header_menu').removeClass('show-menu');
    $('.header_link').removeClass('show-header_link');
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});