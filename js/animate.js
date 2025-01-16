const arrivals = new Swiper(".arrivals", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,

    breakpoints: {
        769: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3.5,
        },
    },

});

$(".events_slide ul li").hide();
$(".events_slide ul li").eq(0).fadeIn();
let num = 0;
setInterval(() => {

    if (num < 2) {
        num++;
    } else {
        num = 0;
    }
    $(".events_slide ul li").fadeOut();
    $(".events_slide ul li").eq(num).fadeIn();
}, 3000);


$(".best1").show();
$(".best2, .best3, .best4").hide();

$(".best_right ul li:nth-child(1)").click(function () {
    $(".best1").show();
    $(".best2, .best3, .best4").hide();
})

$(".best_right ul li:nth-child(2)").click(function () {
    $(".best2").show();
    $(".best1, .best3, .best4").hide();
})

$(".best_right ul li:nth-child(3)").click(function () {
    $(".best3").show();
    $(".best2, .best1, .best4").hide();
})

$(".best_right ul li:nth-child(4)").click(function () {
    $(".best4").show();
    $(".best2, .best3, .best1").hide();
})

$(".depth2, .depth2_bg").hide();
$(".gnb > li").hover(function () {
    $(".depth2, .depth2_bg").stop().fadeToggle();
})


var mv = new Swiper(".mv", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

$(".more").hide();
$(".plus li:nth-child(3)").click(function () {
    $(".more").show();
})
$(".more button").click(function () {
    $(".more").hide();
})


var sns = new Swiper(".sns", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});