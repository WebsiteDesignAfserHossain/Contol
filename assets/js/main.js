(function ($) {
	"use strict";

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	// MOBILE MENU CLICKABLE 
	$('.mobile_right a').on('click', function () {
		$('.mobile_info_open').toggleClass('show');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.close_info,.offcanvas-overlay,.mobile_one_page li.menu-item a.nav-link').on('click', function () {
		$('.mobile_info_open').removeClass('show');
		$('.offcanvas-overlay').removeClass('overlay-open');
	});

	$('.lan').niceSelect();

	/*================== Sidebar Menu Js Start =============== */
	// Sidebar Dropdown Menu Start
	$(".has-dropdown > a").click(function () {
		$(".sidebar-submenu").slideUp(200);
		if (
			$(this)
				.parent()
				.hasClass("active")
		) {
			$(".has-dropdown").removeClass("active");
			$(this)
				.parent()
				.removeClass("active");
		} else {
			$(".has-dropdown").removeClass("active");
			$(this)
				.next(".sidebar-submenu")
				.slideDown(200);
			$(this)
				.parent()
				.addClass("active");
		}
	});

	/* 
	-----------------------------
	MAGNIFI POPUP IFRAME
	-----------------------------
	*/
	$('.video-popup').magnificPopup({ type: 'iframe' });

	/* 
	-----------------------------
	PROJECT ACTIVATION BLOG HOMEPAGE ONE
	-----------------------------
	*/
	const project = new Swiper('.project', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 20,
		centeredSlides: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			// when window width is >= 320px
			1200: {
				slidesPerView: 3,
				spaceBetween: 40,
				// centeredSlides: true,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 40
			},
			840: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 20,
		// centeredSlides: false,

			},
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
		}
	});
	/* 
	-----------------------------
	BRAND ACTIVATION BLOG HOMEPAGE ONE
	-----------------------------
	*/

	const brand = new Swiper('.brand-active', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 10,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			940: {
				slidesPerView: 3,
				spaceBetween: 10
			},
		}
	});

	/* 
	-----------------------------
	INDEX BLOG ACTIVATION BLOG HOMEPAGE ONE
	-----------------------------
	*/
	const indexblog = new Swiper('.index-blog-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 320px
			900: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			700: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},

		}
	});
	// INDEX 1 HOME PAGE TEAM 

	const swiper = new Swiper('.swiper-container', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			940: {
				slidesPerView: 4,
				spaceBetween: 10
			},
		}
	});
	/* 
	-----------------------------
	INDEX -2 SERVICE ACTIVATION
	-----------------------------
	*/
	const serviceslider = new Swiper('.contoll__service-activition', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 10,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 640px
			576: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			990: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 10
			},
		}
	});

	/* 

	-----------------------------
	INDEX -2 SERVICE ACTIVATION
	-----------------------------
	*/
	const features = new Swiper('.features-activition', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 10,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 640px
			768: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			800: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 10
			}
		}
	});

	/* 
	-----------------------------
	INDEX -2 TEAM ACTIVATION
	-----------------------------
	*/
	const indextwoTeam = new Swiper('.contoll__baner-temactivition', {
		slidesPerView: 3,
		spaceBetween: 10,
		loop: true,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			
		}
	});

	//  faq testimonial item active 

	$('.testimonail-active').slick({

		slidesToShow: 1,

		slidesToScroll: 1,

		arrows: false,

		fade: true,

		asNavFor: '.testimonial-img-active',

	});

	$('.testimonial-img-active').slick({

		slidesToShow: 3,

		slidesToScroll: 1,

		asNavFor: '.testimonail-active',

		dots: false,

		centerMode: true,

		focusOnSelect: true,

		centerPadding: '0px',

		arrows: false,

		responsive: [{

			breakpoint: 1024,

			settings: {

				slidesToShow: 3,

				slidesToScroll: 1,

				infinite: true,

				dots: false,

			}

		},

		{

			breakpoint: 992,

			settings: {

				slidesToShow: 3,

				slidesToScroll: 2

			}

		},

		{

			breakpoint: 767,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1

			}

		},

		{

			breakpoint: 480,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1

			}

		}

		]

	});

	/* 
	-----------------------------
	INDEX -2 TEAM ACTIVATION
	-----------------------------
	*/
	const contollltestimonial = new Swiper('.contolll__testimonial-activition', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 10,
		// If we need pagination
		navigation: {
			nextEl: ".swiper-button-left",
			prevEl: ".swiper-button-right",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 10
			},
		}
	});

	/* 
		-----------------------------
		INDEX -2 TEAM ACTIVATION
		-----------------------------
	*/
	const contolllProject = new Swiper('.contolll__projects-activition', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 10,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 10
			},
		}
	});
	/* 
		-----------------------------
		INDEX -3 TESTIMONIAL ACTIVATION
		-----------------------------
	*/
	const contolllTestimonial = new Swiper('.contolll__testimoniall-activition', {
		loop: true,
		slidesPerView: 3,
		centeredSlides: true,
		grabCursor: true,
		spaceBetween: 10,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				loop: true,
				slidesPerView: 1,
				centeredSlides: true,
				grabCursor: true,
				spaceBetween: 30
			},
			// when window width is >= 480px
			480: {
				loop: true,
				slidesPerView: 1,
				centeredSlides: true,
				grabCursor: true,
				spaceBetween: 10
			},
			// when window width is >= 640px
			640: {
				loop: true,
				slidesPerView: 2,
				centeredSlides: true,
				grabCursor: true,
				spaceBetween: 10
			},
			992: {
				loop: true,
				slidesPerView: 2,
				centeredSlides: true,
				grabCursor: true,
				spaceBetween: 10
			},
			1024: {
				loop: true,
				slidesPerView: 2,
				centeredSlides: true,
				grabCursor: true,
				spaceBetween: 10
			},

			1200: {
				loop: true,
				slidesPerView: 3,
				centeredSlides: true,
				grabCursor: true,
				spaceBetween: 10
			},
		}
	});

	/* 
		-----------------------------
		INDEX -3 TESTIMONIAL ACTIVATION
		-----------------------------
	*/
	const featuresfiveactivition = new Swiper('.features-five-activition', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 10,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10
			},

			1200: {
				slidesPerView: 4,
				spaceBetween: 10
			},
		}
	});
	// home index 05
	//  const indexFiveItems = new Swiper('.Swiper', {
	// 	loop: true,
	// 	slidesPerView: 4,
	// 	spaceBetween: 10,
	// 	// If we need pagination
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 	 },
	// 			  // Responsive breakpoints
	// 			  breakpoints: {
	// 				// when window width is >= 320px
	// 				320: {
	// 				  slidesPerView: 1,
	// 				  spaceBetween: 10
	// 				},
	// 				// when window width is >= 480px
	// 				480: {
	// 				  slidesPerView: 1,
	// 				  spaceBetween: 10
	// 				},
	// 				// when window width is >= 640px
	// 				640: {
	// 				  slidesPerView: 2,
	// 				  spaceBetween: 10
	// 				},
	// 				992: {
	// 					slidesPerView: 3,
	// 					spaceBetween: 10
	// 				  },

	// 				1200: {
	// 				  slidesPerView: 4,
	// 				  spaceBetween: 10
	// 				},
	// 			 }
	//  });
})(jQuery);;