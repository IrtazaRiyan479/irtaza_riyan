/*
  [JS Index]
*/


/*
  1. preloader
  2. fadeIn.element
  3. slick slider
    3.1. slick services slider
  4. owl carousel
    4.1. owl works carousel
    4.2. owl news carousel
  5. magnificPopup
  6. navigation
    6.1. close navigation
    6.2. navigation active state
  7. fullPage
  8.
  9. toggle news content
  10. contact modal
    10.1. contact modal additional CLOSER
  11. section position reset
    11.1. news position reset
	11.2. contact position reset
  12. swiper slider
    12.1. swiper parallax slider
  13. contact form
*/


$(function() {
	"use strict";
	
	
	$(window).on("load", function() {
		// 1. preloader
		$("#preloader").fadeOut(600);
		$(".preloader-bg").delay(400).fadeOut(600);
		
		// 2. fadeIn.element
		setTimeout(function() {
			$(".fadeIn-element").delay(600).css({
				display: "none"
			}).fadeIn(800);
		}, 0);
	});
	
	// 3. slick slider
	// 3.1. slick services slider
	$(".slick-services").slick({
		arrows: true,
		initialSlide: 0,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
		nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
		fade: false,
		autoplay: false,
		autoplaySpeed: 4000,
		cssEase: "ease",
		speed: 500
	});
	
	// 4. owl carousel
	// 4.1. owl works carousel
	$("#works-page-img-carousel").owlCarousel({
		loop: false,
		center: false,
		margin: 0,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: true,
		navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			880: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
	// 4.2. owl news carousel
	$("#news-page-img-carousel").owlCarousel({
		loop: true,
		center: true,
		margin: 0,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: true,
		navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
	
	// 5. magnificPopup
	$(".popup-photo").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
			tPrev: "",
			tNext: "",
			tCounter: "%curr% / %total%"
		},
		removalDelay: 300,
		mainClass: "mfp-fade"
	});
	
	// 6. navigation
	// 6.1. close navigation
	$(".menu-state").on("click", function() {
		$("#menu-mobile").removeClass("activated");
		$("#menu-mobile-caller").removeClass("lines-close");
	});
	// 6.2. navigation active state
	$("a.menu-state").on("click", function() {
		$("a.menu-state").removeClass("active");
		$(this).addClass("active");
	});
	
	// 7. fullPage
	$("#fullpage").fullpage({
		anchors: ["home", "about", "services", "works", "news", "contact"],
		navigation: true,
		navigationPosition: "right",
		navigationTooltips: ["Home", "About", "Services", "Works", "News", "Contact"],
		responsiveWidth: 900,
		autoScrolling: true,
		scrollBar: false,
		afterResponsive: function(isResponsive) {}
	});
	
	// 8. toggle panels
	$(".c-btn-news").on("click", function() {
		$(".logo, #menu-mobile-btn").addClass("off").removeClass("on");
	});
	$(".news-modal-close-wrapper").on("click", function() {
		$(".logo, #menu-mobile-btn").removeClass("off").addClass("on");
	});
	$(".contact-modal-closer").on("click", function() {
		$(".logo").removeClass("off").addClass("on");
	});
	$(".contact-modal-launcher").on("click", function() {
		if ($(".logo").hasClass("on")) {
			$(".logo").removeClass("on").addClass("off");
		} else {
			$(".logo").removeClass("off").addClass("on");
		}
	});
	$(".link-wrap, .c-btn-news, .contact-modal-launcher").on("click", function() {
		$("#menu-mobile").removeClass("activated").addClass("off");
		$("#menu-mobile-caller").removeClass("lines-close");
	});
	
	// 9. toggle news content
	$(".c-btn-news").on("click", function() {
		var divClass = $(this).attr("data-id");
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$("." + divClass).addClass("open");
		} else {
			$(this).addClass("open");
			$("." + divClass).addClass("open");
		}
	});
	$(".inverse-dark").on("click", function() {
		$(".panel-left, .panel-right").removeClass("open");
	});
	
	// 10. contact modal
	$(".contact-modal-launcher, .contact-modal-closer").on("click", function() {
		if ($(".contact-modal").hasClass("open")) {
			$(".contact-modal").removeClass("open").addClass("close");
		} else {
			$(".contact-modal").removeClass("close").addClass("open");
		}
	});
	// 10.1. contact modal additional CLOSER
	$(".navigation-icon, .logo").on("click", function() {
		$(".contact-modal").removeClass("open").addClass("close");
		$(".logo").removeClass("off").addClass("on");
	});
	
	// 11. section position reset
	// 11.1. news position reset
	$(".c-btn-news").on("click", function(e) {
		e = $(".news-page-img-wrapper");
		$("html, body").animate({
			scrollTop: e.offset().top
		}, 500);
	});
	// 11.2. contact position reset
	$(".contact-modal-launcher").on("click", function(e) {
		e = $(".contact-reset");
		$("html, body").animate({
			scrollTop: e.offset().top
		}, 500);
	});
	
	// 12. swiper slider
    // 12.1. swiper parallax slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: false,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        }
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.pause();
        });
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.play();
        });
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	
	// 13. contact form
	$("form#form").on("submit", function() {
		$("form#form .error").remove();
		var s = !1;
		if ($(".requiredField").each(function() {
				if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass("inputError"), s = !0;
				else if ($(this).hasClass("email")) {
					var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass("inputError"), s = !0);
				}
			}), !s) {
			$("form#form input.submit").fadeOut("normal", function() {
				$(this).parent().append("");
			});
			var r = $(this).serialize();
			$.post($(this).attr("action"), r, function() {
				$("form#form").slideUp("fast", function() {
					$(this).before('<div class="success">Your email was sent successfully.</div>');
				});
			});
		}
		return !1;
	});
	
	
});