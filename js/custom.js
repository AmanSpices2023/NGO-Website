//  Sticky Menu

$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
        $('.sticky_header').addClass('menu_fixed');
    } else {
        $('.sticky_header').removeClass('menu_fixed');
    }
});


//   banner

var swiper = new Swiper(".banner_slider", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".documents_slider", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        479: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper(".project_detail_info", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
});


// partners

var swiper = new Swiper(".partners", {
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        150: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


// testimonials

var swiper = new Swiper('.client_slider', {
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    touch: {
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
    },
});
