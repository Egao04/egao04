$(function () {
    $(window).scroll(function () {
        const wScroll = $(window).scrollTop();
            $("header").each(function () {
            if (wScroll > 50) {
                $(this).addClass("fadeIn");
            }
        });
    });
});