
$("p1").fadeIn(2000);
$("p2").fadeIn(2000);
$(window).scroll(function () {
    let scrollDistance = $(window).scrollTop();
    console.log(scrollDistance);
    if (scrollDistance > 500) {
        $("p3").fadeIn(2000);

    }
    if (scrollDistance > 950) {
        $("p4").fadeIn(2000);

    }
    if (scrollDistance > 1450) {

        $("p5").fadeIn(2000);
        $("p6").fadeIn(2000);
    }
    if (scrollDistance > 1750) {
        $("p7").fadeIn(2000);

    }
    if (scrollDistance > 2400) {

        $("p8").fadeIn(2000);
        $("p9").fadeIn(2000);
    }
    if (scrollDistance > 3050) {
        $("p10").fadeIn(2000);

    }
    if (scrollDistance > 3650) {
        $("p11").fadeIn(2000);

    }
    if (scrollDistance > 4480) {

        $("p12").fadeIn(2000);
        $("p13").fadeIn(2000);
    }
    if (scrollDistance > 4980) {
        $("p14").fadeIn(2000);

    }
    if (scrollDistance > 5480) {
        $("p15").fadeIn(2000);

    }
    if (scrollDistance > 5880) {
        $("p16").fadeIn(2000);

    }
    if (scrollDistance > 6480) {
        $("p17").fadeIn(2000);

    }
     if (scrollDistance > 7120) {

        $("p19").fadeIn(2000);
        $("p18").fadeIn(2000);
    }
     if (scrollDistance > 7710) {

        $("p20").fadeIn(2000);
        $("p21").fadeIn(2000);
    }
});

