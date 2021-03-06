document.addEventListener("DOMContentLoaded", function () {
  lazyLoadingImage();
  document.getElementsByClassName("app_link").onclick = function (e) {
    e.preventDefault();
    let hero = document.getElementById("hero");
    hero.scrollIntoView();
  };

  //wow.js on scroll animations initialization
  wow = new WOW({
    animateClass: "animated",
    mobile: false,
    offset: 150,
  });
  wow.init();

  //parallax effect initialization
  $(".hero").parallax("50%", 0.3);

  //Nice scroll initialization
  $("html").niceScroll({
    scrollspeed: 50,
    autohidemode: false,
    cursorwidth: 8,
    cursorborderradius: 8,
    cursorborder: "0",
    background: "rgba(48, 48, 48, .4)",
    cursorcolor: "#1f1f1f",
    zindex: 999,
  });

  //Testimonials slider initialization
  $("#tslider").owlCarousel({
    items: 1,
    navigation: true,
    pagination: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    responsive: true,
    autoPlay: true,
    transitionStyle: "fade",
  });

  //Mailchimp subscription form initialization
  $("#submit_form").submit(function () {
    $("#mc_submit").attr("disabled", "disabled");
    processing("icon", "loading");
  });

  if ($("#submit_form").length) {
    //Mailchim Subscription form
    $("#submit_form").ajaxChimp({
      callback: chimpResponce,
    });
  }

  //Mail chimp callback function
  function chimpResponce(resp) {
    if (resp.result === "success") {
      processing("loading", "icon");
      $("#mc_submit").removeAttr("disabled", "disabled");
      $("#submit_form #mc-email").val("");
      $("#error_msg").hide();
      $("#success_msg").show();
    } else {
      processing("loading", "icon");
      $("#success_msg").hide();
      $("#error_msg").show();
      $("#mc_submit").removeAttr("disabled", "disabled");
    }
  }

  function processing(hide, show) {
    $("#mc_submit i").removeClass(hide).addClass(show);
  }

  //Popup video
  $("#play_video").click(function (e) {
    e.preventDefault();

    var video_link = $(this).data("video");
    video_link =
      '<iframe src="' +
      video_link +
      '" width="800" height="408" style="position: absolute; top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

    $(".about_video").append(video_link).fadeIn(200);
  });

  $(".close_video").click(function (e) {
    e.preventDefault();

    $(".about_video").fadeOut(200, function () {
      $("iframe", this).remove();
    });
  });
});

function lazyLoadingImage() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
}
