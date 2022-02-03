$(document).ready(function () {
    // carousel functionality
    $(".carousel").carousel({
        interval: 2000,
    });

    // scrolling animation functionality
    $("footer nav .nav-link").on("click", function (e) {
        e.preventDefault();
        let element = $(this).attr("href");
        let offsetTop = $(element).offset().top;
        offsetTop = Math.round(offsetTop);

        $("html, body").animate(
            {
                scrollTop: offsetTop - 50,
            },
            500
        );
    });

    // Session storage functionality
    $("#modal-opener")
        .on("click", clickCounter)
        .on("click", function () {
            $('#exampleModalCenter').modal('toggle')
        })

    function clickCounter() {
        if (window.sessionStorage.clickcount) {
            window.sessionStorage.clickcount = Number(window.sessionStorage.clickcount) + 1;
        } else {
            window.sessionStorage.clickcount = 1;
        }

        $("#count").text(window.sessionStorage.clickcount);
        $("#product-count").text(window.sessionStorage.clickcount)
    }
});
