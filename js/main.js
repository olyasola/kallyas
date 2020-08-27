$(function () {
    new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        }
    ).init();

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700, 'linear');
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    })

});