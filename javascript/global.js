$(function() {
    $('#gotop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

function position() {
    var top = $(".section").offset().top();
    $("html,body").animate({ scrollTop: top }, 1000);
};


//burger

let isShowSlide = false;

function burgerClick() {
    isShowSlide = !isShowSlide
    if (isShowSlide) {
        document.getElementById("burger_menu").classList.remove("goBack");
        document.getElementById("burger_menu").classList.add("active");

    } else {
        document.getElementById("burger_menu").classList.add("goBack");
    }
}



$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});


