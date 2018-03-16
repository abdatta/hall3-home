$(document).on('ready', function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* ----------------------------
    Mobile menu click then remove
    -------------------------------*/
    $("#mainmenu ul.nav.navbar-nav li a").on("click", function () {
        $("#mainmenu").removeClass("in");
    });

    /*--------------------
    Scroll to top
    ----------------------*/
    $.scrollUp({
        scrollText: '<span class="ti-arrow-up"></span>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // jQuery Ripples
    if (typeof $.fn.ripples == 'function') {
        try {
            $('.ripple').ripples({
                resolution: 500,
                perturbance: 0.04
            });
        } catch (e) {
            $('.error').show().text(e);
        }
    }
    /* Gallery Slider Active
    =============================*/
    $('.client-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    /* Gallery Slider Active
    =============================*/
    $('.bg-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        center: true,
        items: 1,
    });



    /*---------------------------
    Client Details Slider jQuery
    ----------------------------*/
    var client_details = $('.client_details');
    client_details.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayTimeout: 4000,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    /*---------------------------
    Client Photo Slider jQuery
    ----------------------------*/
    var Client_photo = $('.client_photo');
    Client_photo.owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
    $('.client_nav .testi_next').on('click', function () {
        Client_photo.trigger('next.owl.carousel');
    });
    $('.client_nav .testi_prev').on('click', function () {
        Client_photo.trigger('prev.owl.carousel');
    });

    Client_photo.on('translate.owl.carousel', function (property) {
        $('.client-details-content .owl-dot:eq(' + property.page.index + ')').click();
    });
    client_details.on('translate.owl.carousel', function (property) {
        $('.client-photo-list .owl-dot:eq(' + property.page.index + ')').click();
    });

    /*--------------------
    MAGNIFIC POPUP JS
    ----------------------*/
    var magnifPopup = function () {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            },
        });
    };
    // Call the functions
    magnifPopup();

    $('.price-table').on('mouseenter', function () {
        $('.price-table').removeClass('active');
        $(this).addClass('active');
    });
    $('.price-table').on('mouseleave', function () {
        $('.price-table').removeClass('active');
        $('.main-price').addClass('active');
    });


    /*-----------------
    Mesonary jQuery
    -------------------*/
    var $boxes = $('.grid-item');
    $boxes.hide();
    var $container = $('#grid');
    $container.imagesLoaded(function () {
        $boxes.fadeIn();
        $container.masonry({
            itemSelector: '.grid-item',
        });
    });

    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscrie-form input, .subscrie-form button').fadeOut();
            }
        }
    });

$('.home-parallax').parallax("50%", -0.5);
$('.parallax').parallax("50%", 0.1);

    $(window).on("load", function () {
        /*-----------------
        Preloader Js
        ------------------*/
        $('.preloade').fadeOut(500);

        /*------------------
        WoW js Active
        -------------------*/
        new WOW().init({
            mobile: true
        });
    });
}(jQuery));


    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
    var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
    pc.createDataChannel("");    //create a bogus data channel
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
    pc.onicecandidate = function(ice){  //listen for candidate events
        if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
        var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
        window.localIP = myIP;
        pc.onicecandidate = noop;
    };