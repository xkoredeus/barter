$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {
    $('.js-show-menu').on('click', function () {
        $('.menu').addClass('menu--active');

        $('body').addClass('fixed');
    });
    $('.js-close-menu').on('click', function () {
        $('.menu').removeClass('menu--active');
        $('body').removeClass('fixed');
    });

    $('.menu__link').click(function(event) {
        $('.menu').removeClass('menu--active');
        $('body').removeClass('fixed');
        // The id of the section we want to go to.
        var id = $(this).attr("href");
        // An offset to push the content down from the top.
        var offset = 60;
        // Our scroll target : the top position of the
        // section that has the id referenced by our href.
        var target = $(id).offset().top - offset;
        // The magic...smooth scrollin' goodness.
        $('html, body').animate({scrollTop:target}, 1000);
        //prevent the page from jumping down to our section.
        event.preventDefault();
    });

    const indSlider = new Swiper(".js-ind-slider", {
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            snapOnRelease: true,
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 35,
            },
        }
    });

    const tariffSlider = new Swiper(".js-tariff-slider", {
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            snapOnRelease: true,
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
        }
    });


    const whySlider = new Swiper(".js-why-slider", {
        speed: 1000,
        slidesPerView: 'auto',
        breakpoints: {
            0: {
                spaceBetween: 13,
            },
            768: {
                spaceBetween: 28,
            },
            1200: {
                spaceBetween: 41,
            },
        }
    });


    if ( $(window).width() < 1200 ) {
        const materialSlider = new Swiper(".js-material-slider", {
            speed: 1000,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                },
            }
        });
    }


    $('.question__bottom').hide();
    $('.js-toggle-question').on('click', function () {
        $(this)
            .parent('.question')
            .toggleClass('question--active')
            .find('.question__bottom')
            .slideToggle();
    })

});


var reviewTop = new Swiper(".js-rev-top-slider", {
    speed: 1500,
    freeMode: false,
    allowTouchMove: false,
    navigation: {
        nextEl: ".js-rev-next",
        prevEl: ".js-rev-prev",
    },
    thumbs: {
        swiper: reviewBottom,
    },
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

var reviewBottom = new Swiper(".js-rev-bottom-slider", {
    speed: 1500,
    slidesPerView: 1,
    thumbs: {
        swiper: reviewTop,
    },
    navigation: {
        nextEl: ".js-rev-next",
        prevEl: ".js-rev-prev",
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

