$(".depth2, .depth2_bg").hide();
$(".gnb > li").hover(function () {
    $(".depth2, .depth2_bg").stop().fadeToggle();
})


$(".more").hide();
$(".plus li:nth-child(3)").click(function () {
    $(".more").show();
})
$(".more button").click(function () {
    $(".more").hide();
})