$(window).on("load", function () {
    $(".loader .inner").fadeOut(750, function () {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false,
        }
    });
})

$(document).ready(function () {

    $('#slides').superslides({
        play: 5000,
        animation: 'fade',
        pagination: false,
    });

    setTimeout(typeSlides, 750);
    function typeSlides() {
        var typed = new Typed(".typed", {
            strings: ["NTU Graduate.", "Software Engineer In Progress.", "Divide And Conquer."],
            typeSpeed: 60,
            loop: true,
            startDelay: 1000,
            showCursor: false,
        });
    };


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });


    var skillsTopOffSet = $(".skillsSection").offset().top;
    var statsTopOffSet = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffSet - $(window).height() + 400) {
            $('.chart').easyPieChart({
                easing: "easeInOut",
                barColor: "#333",
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                },
            });
        }

        if (!countUpFinished && window.pageYOffset > statsTopOffSet - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);

                countUpFinished = true;
            })
        }
    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function () {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false,
            }
        });

        return false;
    })

    $("#navigation li a").click(function (e) {
        e.preventDefault();
        var targetElement = $(this).attr("href")
        var targetPostion = $(targetElement).offset().top;
        $("html, body").animate(
            { scrollTop: targetPostion - 50 }, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation)
    function stickyNavigation() {
        const body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0)
            body.removeClass("fixedNav");
        }
    };
});
