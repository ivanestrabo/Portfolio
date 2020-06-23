$(document).ready(() => {
  ///////////////////////
  // Sticky & Animated Navigation //
  ///////////////////////
  $(".section-about").waypoint(
    (direction) => {
      if (direction == "down") {
        $("nav").addClass("sticky moveInTop-2");
      } else {
        $("nav").removeClass("sticky moveInTop-2");
      }
    },
    {
      offset: "50%",
    }
  );

  //////////////////////////////////
  // About Me - Animated //
  //////////////////////////////////
  $(".section-about").waypoint(
    function () {
      $(".section-about__about-profile-img").addClass("animated show");
    },
    {
      offset: "80%",
    }
  );

  $(".section-about").waypoint(
    function () {
      $(".section-about__about-textbox").addClass("animated show-delay-1 ");
    },
    {
      offset: "80%",
    }
  );

  $(".section-about").waypoint(
    function () {
      $(".section-about__about-social-icons").addClass(
        "animated show-delay-2 "
      );
    },
    {
      offset: "80%",
    }
  );

  //////////////////////////////
  // Capabilities - Animated //
  /////////////////////////////
  $(".section-capabilities").waypoint(
    function () {
      $(".section-capabilities__text-header").addClass("animated show");
    },
    {
      offset: "80%",
    }
  );

  $(".section-capabilities").waypoint(
    function () {
      $(".section-capabilities__text-sub-designer").addClass(
        "animated show-slideLeft "
      );
    },
    {
      offset: "50%",
    }
  );

  $(".section-capabilities").waypoint(
    function () {
      $(".section-capabilities__text-sub-coder").addClass(
        "animated show-slideRight "
      );
    },
    {
      offset: "50%",
    }
  );

  $(".section-capabilities").waypoint(
    function () {
      $("figure").addClass("js--pie");
    },
    {
      offset: "50%",
    }
  );

  /////////////////////////////
  // Random Facts - Animated //
  /////////////////////////////
  $(".section-random-facts").waypoint(
    function () {
      $(".section-random-facts__textbox").addClass("animated show");
    },
    {
      offset: "80%",
    }
  );

  $(".section-random-facts").waypoint(
    function () {
      $(".section-random-facts__img").addClass("js--yoda");
    },
    {
      offset: "40%",
    }
  );

  ///////////////////////
  // Skills - Animated //
  ///////////////////////
  $(".section-skill").waypoint(
    function () {
      $(".section-skill__text-header").addClass("animated show");
    },
    {
      offset: "80%",
    }
  );

  $(".section-skill").waypoint(
    function () {
      $(".skillbar").addClass("animated show-delay-1");
    },
    {
      offset: "70%",
    }
  );

  $(".section-skill").waypoint(
    function (direction) {
      jQuery(".skillbar").each(function () {
        jQuery(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            3000
          );
      });
    },
    {
      offset: "70%",
    }
  );

  //////////////////////////
  // Portfolio - Animated //
  //////////////////////////
  $(".section-portfolio").waypoint(
    function () {
      $(".section-portfolio__header").addClass("animated show");
    },
    {
      offset: "80%",
    }
  );

  $(".section-portfolio").waypoint(
    function () {
      $(".section-portfolio__showcase").addClass("section-portfolio__show");
    },
    {
      offset: "50%",
    }
  );

  ////////////////////////
  // Contact - Animated //
  ////////////////////////
  $(".section-contact").waypoint(
    function () {
      $(".section-contact__header").addClass("animated show");
    },
    {
      offset: "80%",
    }
  );

  $(".section-contact").waypoint(
    function () {
      $(".section-contact__text-left").addClass("animated show-delay-1 ");
    },
    {
      offset: "80%",
    }
  );

  $(".section-contact").waypoint(
    function () {
      $(".section-contact__text-right").addClass("animated show-slideRight");
    },
    {
      offset: "80%",
    }
  );

  $(".section-contact").waypoint(
    function () {
      $(".btn-text").addClass("animated show-delay-3 ");
    },
    {
      offset: "80%",
    }
  );

  //////////////////////////
  // On Scroll Navigation //
  //////////////////////////
  $(".js--scroll-to-about").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js-scroll--section-about").offset().top },
      2000
    );
  });

  $(".js--scroll-to-portfolio").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js-scroll--section-portfolio").offset().top },
      2000
    );
  });

  $(".js--scroll-to-contact").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js-scroll--section-contact").offset().top },
      2000
    );
  });
});

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
