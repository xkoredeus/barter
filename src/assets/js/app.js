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
        },
        // mousewheel: true,
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
                scrollbar: {
                    snapOnRelease: true,
                    draggable: true,
                },
            },
        }
    });

    const tariffSlider = new Swiper(".js-tariff-slider", {
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
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
                scrollbar: {
                    snapOnRelease: true,
                    draggable: true,
                },
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


$(() => {
    if ( $(window).width() > 768 ) {
        const blissSlider = new Swiper(".js-bliss-slider", {
            speed: 1000,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        hide: false,
                        snapOnRelease: true,
                        draggable: true,
                    },
                },
                1200: {
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        hide: false,
                        snapOnRelease: true,
                        draggable: true,
                    },
                    slidesPerView: 3,
                },
            }
        });
    }

    const aboutReviews = new Swiper(".js-about-rev-slider", {
        freeMode: false,
        allowTouchMove: false,
        navigation: {
            nextEl: ".js-about-rev-next",
            prevEl: ".js-about-rev-prev",
        },
        slidesPerView: 1,
        speed: 1500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    const aboutBottom = new Swiper(".js-about-bottom-slider", {
        speed: 1500,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 19,
            },
            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                },
                spaceBetween: 33,
            },
        },
        navigation: {
            nextEl: ".js-about-bottom-next",
            prevEl: ".js-about-bottom-prev",
        },
    });
    const intSlider = new Swiper(".js-int-slider", {
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        // mousewheel: true,
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
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 35,
                scrollbar: {
                    snapOnRelease: true,
                    draggable: true,
                },
            },
        }
    });

    if ( $(window).width() > 1200 ) {
        const howSlider = new Swiper(".js-how-slider", {
            speed: 1000,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            // mousewheel: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    scrollbar: {
                        snapOnRelease: true,
                        draggable: true,
                    },
                },
            }
        });
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 5){
            $('.float-button').addClass('float-button-floating');
        } else {
            $('.float-button').removeClass('float-button-floating');
        }
    });


    if ( $(window).width() > 768 ) {
        $('.js-act-card').hover(function () {
            if (!($(this).hasClass('.card--active'))) {
                $('.js-act-card').removeClass('card--active');

                $(this).addClass('card--active');

                $('.js-act-picture').attr('src', $(this).data('picture'));
            }
        });
    };
    $('[data-fancybox]').fancybox({
        animationDuration: 600,
        animationEffect: 'slide-in-in',
        touch: false,
    });


    const popupReviews = new Swiper(".js-popup-rev-slider", {
        freeMode: false,
        // allowTouchMove: false,
        navigation: {
            nextEl: ".js-popup-rev-next",
            prevEl: ".js-popup-rev-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 1500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    $('.js-close-popup-review').on('click', function () {
        $.fancybox.close();
    })
});

if ( $(window).width() < 768 ) {

    var actBottom = new Swiper(".js-act-slider-bottom", {
        speed: 1500,
        slidesPerView: 1,
        watchSlidesProgress: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

    });
    var actTop = new Swiper(".js-act-slider-top", {
        speed: 1500,
        freeMode: false,
        watchSlidesProgress: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    actTop.controller.control = actBottom;
    actBottom.controller.control = actTop;

    actBottom.on('slideChange', function () {
        $('.js-act-slider-current').html(actBottom.activeIndex + 1);
    });
    $('.js-act-slider-length').html(actBottom.slides.length);
};