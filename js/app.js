//Smooth Scroll
//Navbar
$(".navbar-nav a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
});

//Footer Nav
$(".footer-nav a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
});

//Interactive Nav
$(".home").click(function () {
  //Active class add and remove
  $(".home").addClass("active");
  $(".about").removeClass("active");
  $(".projects").removeClass("active");
  $(".contact").removeClass("active");

  //Hide Navbar Mobile
  $(".navbar-collapse").removeClass("show");
});
$(".about").click(function () {
  //Active class add and remove
  $(".about").addClass("active");
  $(".home").removeClass("active");
  $(".projects").removeClass("active");
  $(".contact").removeClass("active");

  //Animation
  $("#aboutMe").addClass(
    "animate__animated animate__fadeInUp animate__delay-1s"
  );
  $(".resume__box").addClass(
    "animate__animated animate__fadeInUp animate__delay-2s"
  );
  $(".skills__title").addClass(
    "animate__animated animate__fadeInUp animate__delay-2s"
  );
  $(".skills").addClass(
    "animate__animated animate__fadeInUp animate__delay-2s"
  );

  //Hide Navbar Mobile
  $(".navbar-collapse").removeClass("show");
});
$(".projects").click(function () {
  //Active class add and remove
  $(".projects").addClass("active");
  $(".home").removeClass("active");
  $(".about").removeClass("active");
  $(".contact").removeClass("active");

  //Animation
  $("#projects").addClass(
    "animate__animated animate__fadeInUp animate__delay-1s"
  );
  $(".projects__title").addClass(
    "animate__animated animate__fadeInUp animate__delay-1s"
  );
  $(".btn-project").addClass(
    "animate__animated animate__flipInX animate__delay-2s"
  );

  //Hide Navbar Mobile
  $(".navbar-collapse").removeClass("show");
});
$(".contact").click(function () {
  //Active class add and remove
  $(".contact").addClass("active");
  $(".home").removeClass("active");
  $(".about").removeClass("active");
  $(".projects").removeClass("active");

  //Animation
  $("#contact").addClass(
    "animate__animated animate__fadeInUp animate__delay-2s"
  );
  $(".contact__title").addClass(
    "animate__animated animate__fadeInUp animate__delay-2s"
  );

  //Hide Navbar Mobile
  $(".navbar-collapse").removeClass("show");
});
