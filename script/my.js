  $(document).ready(function() {
    $('.similar-products-cont').slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 5,
      prevArrow: "<p class='slide-arrow left-arrow'>&nbsp;</p>",
      nextArrow: "<p class='slide-arrow right-arrow'>&nbsp;</p>"
    });
    $('.accessories-slide').slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      vertical: true,
      prevArrow: "<p class='slide-arrow up-arrow'>&nbsp;</p>",
      nextArrow: "<p class='slide-arrow down-arrow'>&nbsp;</p>"
    });
    $(".show-menu").click(function() {
      $(".navigation").slideToggle("slow", "linear");
      $("a", this).toggleClass("arrow-down arrow-right");
    });
    $(".nav-header").click(function() {
      $(".toggle-content").slideToggle("slow", "linear");
      $("a", this).toggleClass("arrow-down arrow-right");
    });
  });