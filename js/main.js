
MyApp = {
    scroll: {
        init: function () {
            window.addEventListener("scroll", function () {
                if (this.pageYOffset > 60) {
                    document.querySelector("header").classList.add("sticky");
                }
                else {
                    document.querySelector("header").classList.remove("sticky");
                }
            });
        }
    },
}

if ($('header').length > 0) {
    MyApp.scroll.init();
}

$('.slider-novedades').slick({
    infinite: false,
    speed: 300,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1601,
            settings: {
                slidesToShow: 3,/* 1.94 */
                slidesToScroll: 1,
            }
        },        
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
});