$(function () {
    $(".rate-star").rateYo({
        rating: 4.5,
        normalFill: "#fff",
        ratedFill: "#ffc000",
        starWidth: "13px",
        spacing: "5px",
        readOnly: true
    });

    $('.weekly-products__slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        appendArrows:'.weekly-products__head-btn',
        prevArrow: '<span class="lnr-chevron-left"></span>',
        nextArrow: '<span class="lnr-chevron-right"></span>'
      });

    var mixer = mixitup('.products__inner-box');
});