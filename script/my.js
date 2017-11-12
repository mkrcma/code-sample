  $(document).ready(function() {
    $('.similar-products-cont').slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 5,
      prevArrow: "<p class='slide-arrow'><img src='./img/left.png' width='23' /></p>",
      nextArrow: "<p class='slide-arrow'><img src='./img/right.png' width='23' /></p>"
    });
    $('.accessories-slide').slick({
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      vertical: true,
      prevArrow: "<img class='slide-arrow' src='./img/up.png' width='23' />",
      nextArrow: "<img class='slide-arrow' src='./img/down.png' width='23' />"
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