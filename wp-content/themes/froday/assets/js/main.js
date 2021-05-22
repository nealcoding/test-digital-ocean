
/*
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  FRODAY - Coupons, Deals, Discounts and Promo Codes Template
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    - File           : main.js
    - Desc           : Template - JavaScript
    - Version        : 1.1
    - Date           : 10-03-2018
    - Author         : KlbTheme
    - Author URI     : https://themeforest.net/user/klbtheme

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/



jQuery.noConflict();

(function($) {

    "use strict";

    $.fn.hasAttr = function(attr) {  
       if (typeof attr !== typeof undefined && attr !== false && attr !== undefined) {
            return true;
       }
       return false;
    };

    /*-------------------------------------
     Background Image Function
    -------------------------------------*/
    var background_image = function() {
        $("[data-bg-img]").each(function() {
            var attr = $(this).attr('data-bg-img');
            if (typeof attr !== typeof undefined && attr !== false && attr !== "") {
                $(this).css('background-image', 'url('+attr+')');
            }
        });  
    };

    /*-------------------------------------
     Background Color Function
    -------------------------------------*/
    var background_color = function() {
        $("[data-bg-color]").each(function() {
            var attr = $(this).attr('data-bg-color');
            if (typeof attr !== typeof undefined && attr !== false && attr !== "") {
                $(this).css('background-color', attr);
            }
        });  
    };

    var link_void = function() {
        $("a[data-prevent='default']").each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
            });
        });
    };

    /*-------------------------------------
     Preloader
    -------------------------------------*/
    var preloader = function() {
        if($('#preloader').length) {
            $('#preloader > *').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(150).removeClass('preloader-active');
        }
    };

    /*-------------------------------------
     HTML attr direction
    -------------------------------------*/
    var html_direction = function() {
        var html_tag = $("html"),
            dir = html_tag.attr("dir"),
            directions = ['ltr', 'rtl'];
        if (html_tag.hasAttr('dir') && jQuery.inArray(dir, directions)) {
            html_tag.addClass(dir);
        } else {
            html_tag.attr("dir", directions[0]).addClass(directions[0]);
        }
    };
    

    /*-------------------------------------
     CSS fix for IE Mobile
    -------------------------------------*/
    var bugfix = function() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
          var msViewportStyle = document.createElement('style');
          msViewportStyle.appendChild(
            document.createTextNode(
              '@-ms-viewport{width:auto!important}'
            )
          );
          document.querySelector('head').appendChild(msViewportStyle);
        }
    };

    /*-------------------------------------
     Toggle Class function
    -------------------------------------*/
    var toogle_class = function() {
        $('[data-toggle-class]').each(function(){
            var current = $(this),
                toggle_event = current.data('toggle-event'),
                toggle_class = current.data('toggle-class');

            if (toggle_event == "hover") {
                current.on("mouseenter", function() {
                    if (current.hasClass(toggle_class) === false) {
                        $(this).addClass(toggle_class);
                    }
                });
                current.on("mouseleave", function() {
                    if (current.hasClass(toggle_class) === true) {
                        $(this).removeClass(toggle_class);
                    }
                });
            }
            current.on(toggle_event, function() {
                $(this).toggleClass(toggle_class);
            });
        });
    };


    /*-------------------------------------
     Back Top functions
    -------------------------------------*/
    var back_to_top = function() {
        var backTop = $('#backTop');
        if (backTop.length) {
            var scrollTrigger = 200,
                scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                backTop.addClass('show');
            } else {
                backTop.removeClass('show');
            }
        }
    };
    var click_back = function() {
        var backTop = $('#backTop');
        backTop.on('click', function(e) {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
            e.preventDefault();
        });
    };

    /*-------------------------------------
     Navbar Functions
    -------------------------------------*/
    var navbar_js = function() {
        $('.dropdown-mega-menu > a, .nav-menu > li:has( > ul) > a').append("<span class=\"indicator\"><i class=\"fa fa-angle-down\"></i></span>");
        $('.nav-menu > li ul > li:has( > ul) > a').append("<span class=\"indicator\"><i class=\"fa fa-angle-right\"></i></span>");
        $(".dropdown-mega-menu, .nav-menu li:has( > ul)").on('mouseenter', function () {
            if ($(window).width() > 943) {
                $(this).children("ul, .mega-menu").fadeIn(100);
            }
        });
        $(".dropdown-mega-menu, .nav-menu li:has( > ul)").on('mouseleave', function () {
            if ($(window).width() > 943) {
                $(this).children("ul, .mega-menu").fadeOut(100);
            }
        });
        $(".dropdown-mega-menu > a, .nav-menu li:has( > ul) > a").on('click', function (e) {
            if ($(window).width() <= 943) {
                $(this).parent().addClass("active-mobile").children("ul, .mega-menu").slideToggle(150, function() {
                    
                });
                $(this).parent().siblings().removeClass("active-mobile").children("ul, .mega-menu").slideUp(150);
            }
            e.preventDefault();
        });
        $(".nav-toggle").on('click', function (e) {
            var toggleId = $(this).data("toggle");
            $(toggleId).slideToggle(150);
            e.preventDefault();
        });
    };
    var navbar_resize_load = function() {
        if ($(".nav-header").css("display") == "block") {
            $(".nav-bar").addClass('nav-mobile');
            $('.nav-menu').find("li.active").addClass("active-mobile");
        }
        else {
            $(".nav-bar").removeClass('nav-mobile');
        }

        if ($(window).width() >= 943) {
            $(".dropdown-mega-menu a, .nav-menu li:has( > ul) a").each(function () {
                $(this).parent().children("ul, .mega-menu").slideUp(0);
            });
            $($(".nav-toggle").data("toggle")).show();
            $('.nav-menu').find("li").removeClass("active-mobile");
        }
    };

    /*-------------------------------------
     Social Icons Share
    -------------------------------------*/
    var share_social = function() {
        var share_action = $('.deal-actions .share-btn');
        share_action.on('click',function(){
            var share_icons = $(this).children('.share-tooltip');
            share_icons.toggleClass('in');
        });
    };

    /*-------------------------------------
     Add Deal to Favorite
    -------------------------------------*/
    var add_favorite = function() {
        var like_btn = $('.actions .like-deal');
        like_btn.on('click',function(){
            $(this).toggleClass('favorite');
        });
    };

    /*-------------------------------------
     Carousel slider initiation
    -------------------------------------*/
    var owl_carousel = function() {
        $('.owl-slider').each(function () {
            var carousel = $(this),
                autoplay_hover_pause = carousel.data('autoplay-hover-pause'),
                loop = carousel.data('loop'),
                items_general = carousel.data('items'),
                margin = carousel.data('margin'),
                autoplay = carousel.data('autoplay'),
                autoplayTimeout = carousel.data('autoplay-timeout'),
                smartSpeed = carousel.data('smart-speed'),
                nav_general = carousel.data('nav'),
                navSpeed = carousel.data('nav-speed'),
                xxs_items = carousel.data('xxs-items'),
                xxs_nav = carousel.data('xxs-nav'),
                xs_items = carousel.data('xs-items'),
                xs_nav = carousel.data('xs-nav'),
                sm_items = carousel.data('sm-items'),
                sm_nav = carousel.data('sm-nav'),
                md_items = carousel.data('md-items'),
                md_nav = carousel.data('md-nav'),
                lg_items = carousel.data('lg-items'),
                lg_nav = carousel.data('lg-nav'),
                center = carousel.data('center'),
                dots_global = carousel.data('dots'),
                xxs_dots = carousel.data('xxs-dots'),
                xs_dots = carousel.data('xs-dots'),
                sm_dots = carousel.data('sm-dots'),
                md_dots = carousel.data('md-dots'),
                lg_dots = carousel.data('lg-dots');

            carousel.owlCarousel({
                autoplayHoverPause: autoplay_hover_pause,
                loop: (loop ? loop : false),
                items: (items_general ? items_general : 1),
                lazyLoad: true,
                margin: (margin ? margin : 0),
                autoplay: (autoplay ? autoplay : false),
                autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
                smartSpeed: (smartSpeed ? smartSpeed : 250),
                dots: (dots_global ? dots_global : false),
                nav: (nav_general ? nav_general : false),
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                navSpeed: (navSpeed ? navSpeed : false),
                center: (center ? center : false),
                responsiveClass: true,
                responsive: {
                    0: {
                        items: ( xxs_items ? xxs_items : (items_general ? items_general : 1)),
                        nav: ( xxs_nav ? xxs_nav : (nav_general ? nav_general : false)),
                        dots: ( xxs_dots ? xxs_dots : (dots_global ? dots_global : false))
                    },
                    480: {
                        items: ( xs_items ? xs_items : (items_general ? items_general : 1)),
                        nav: ( xs_nav ? xs_nav : (nav_general ? nav_general : false)),
                        dots: ( xs_dots ? xs_dots : (dots_global ? dots_global : false))
                    },
                    768: {
                        items: ( sm_items ? sm_items : (items_general ? items_general : 1)),
                        nav: ( sm_nav ? sm_nav : (nav_general ? nav_general : false)),
                        dots: ( sm_dots ? sm_dots : (dots_global ? dots_global : false))
                    },
                    992: {
                        items: ( md_items ? md_items : (items_general ? items_general : 1)),
                        nav: ( md_nav ? md_nav : (nav_general ? nav_general : false)),
                        dots: ( md_dots ? md_dots : (dots_global ? dots_global : false))
                    },
                    1199: {
                        items: ( lg_items ? lg_items : (items_general ? items_general : 1)),
                        nav: ( lg_nav ? lg_nav : (nav_general ? nav_general : false)),
                        dots: ( lg_dots ? lg_dots : (dots_global ? dots_global : false))
                    }
                }
            });

        });
    };

    /*-------------------------------------
     Flexslider
    -------------------------------------*/
    var flexslider = function() {

		$( ".flex-control-nav" ).wrap( "<div id='product_slider_nav' class='flexslider flexslider-nav'></div>" );
		
        $('#product_slider_nav').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 150,
            selector: ".flex-control-nav > li"
        });


        $('#header-deals-slider').flexslider({
            controlNav: false
        });
    };


	
    /*-------------------------------------
     List Grid View
    -------------------------------------*/
	
    var list_grid_view = function(){
		
		$('#list_view').on('click', function(e) {
			e.preventDefault();

			$('.klb-product-item').addClass('col-xs-12');
			$('.klb-product-item').removeClass('col-sm-6 col-lg-4');
			$( ".klb-product-item .deal-single.panel > figure.deal-thumbnail" ).addClass( "col-absolute-cell" );
			$( ".deal-single.panel > figure.deal-thumbnail" ).wrap( "<div class='col-sm-5'></div>" );
			$( ".klb-product-item .deal-single.panel > .bg-white" ).wrap( "<div class='col-sm-7'></div>" );
			$(".deal-single.panel > .col-sm-5").each(function(index) {
				$(this).next(".deal-single.panel > .col-sm-7").andSelf().wrapAll("<div class='row row-rl-0 row-sm-cell'></div>")
			});
		});

		$('#grid_view').on('click', function(e) {
			e.preventDefault();
			$('.klb-product-item').addClass('col-sm-6 col-lg-4 ');
			$('.klb-product-item').removeClass('col-xs-12');
			$( ".klb-product-item .deal-single.panel figure.deal-thumbnail" ).removeClass( "col-absolute-cell" );
			$('.deal-single.panel .row .col-sm-5').closest('div').unwrap();
			$( ".col-sm-5 figure.deal-thumbnail" ).unwrap( "<div class='col-sm-5'></div>" );
			$( ".klb-product-item .col-sm-7 .bg-white" ).unwrap( "<div class='col-sm-7'></div>" );
		});
		
		


		$('#coupon_list_view').on('click', function(e) {
			e.preventDefault();
			if (!$('#coupon_list_view').hasClass("current")) {
				if($('.klb-coupon-item').hasClass("col-md-6")){
					$('.klb-coupon-item').addClass('two-column');
					$('.klb-coupon-item').removeClass('col-sm-6 col-md-6');
				} else {
					$('.klb-coupon-item').removeClass('col-sm-6 col-md-3');
				}
				$( ".klb-coupon-item .coupon-single.panel" ).addClass( "t-sm-left" );
				$( ".klb-coupon-item .coupon-single.panel .row" ).addClass( "row-sm-cell row-tb-0 row-rl-0" );
				$( ".klb-coupon-item .coupon-single.panel .store-logo" ).closest('div.col-xs-12').addClass( "col-sm-5" );
				$( ".klb-coupon-item .coupon-single.panel .store-logo" ).closest('div.col-sm-5').removeClass( "col-xs-12" );
				$( ".klb-coupon-item .coupon-single.panel .store-logo" ).wrap('<figure class="p-15"> </figure>' );
				$( ".klb-coupon-item .coupon-single.panel .store-logo" ).closest('div.text-center').removeClass('text-center p-20');
				
				$( ".klb-coupon-item .coupon-single.panel .panel-body" ).closest('div.col-xs-12').addClass( "col-sm-7" );
				$( ".klb-coupon-item .coupon-single.panel .panel-body" ).closest('div.col-sm-7').removeClass( "col-xs-12" );
				$( ".section.coupons-area" ).addClass( "coupons-area-list" );
				$( ".section.coupons-area" ).removeClass( "coupons-area-grid" );
				$( ".klb-coupon-item" ).wrapAll('<div class="col-xs-12"></div>' );
			}
		});

		$('#coupon_grid_view').on('click', function(e) {
			e.preventDefault();
			if (!$('#coupon_grid_view').hasClass("current")) {
				if($('.klb-coupon-item').hasClass("two-column")){
				$('.klb-coupon-item').addClass('col-sm-6 col-md-6');
				} else {
				$('.klb-coupon-item').addClass('col-sm-6 col-md-3');
				}
				$( ".klb-coupon-item .coupon-single.panel" ).removeClass( "t-sm-left" );
				$( ".klb-coupon-item .coupon-single.panel .row" ).removeClass( "row-sm-cell row-tb-0 row-rl-0" );
				$( ".klb-coupon-item .coupon-single.panel .store-logo" ).closest('div.col-sm-5').addClass( "col-xs-12" );
				$( ".klb-coupon-item .coupon-single.panel .store-logo" ).closest('div.col-xs-12').removeClass( "col-sm-5" );
				$( ".klb-coupon-item .coupon-single.panel .store-logo" ).unwrap('<figure class="p-15"> </figure>' );
				$( ".klb-coupon-item .coupon-single.panel .store-logo" ).closest('div').addClass('text-center p-20');
				
				$( ".klb-coupon-item .coupon-single.panel .panel-body" ).closest('div.col-sm-7').addClass( "col-xs-12" );
				$( ".klb-coupon-item .coupon-single.panel .panel-body" ).closest('div.col-xs-12').removeClass( "col-sm-7" );
				$( ".section.coupons-area" ).removeClass( "coupons-area-list" );
				$( ".section.coupons-area" ).addClass( "coupons-area-grid" );
				$( ".klb-coupon-item" ).unwrap('<div class="col-xs-12"></div>' );
			}
		});
		
		$('.list-control-view li a').on('click', function(){
			$('.list-control-view li a.current').removeClass('current');
			$(this).addClass('current');
		});

		$('.show-code').on('click', function(){
		    $( ".get-coupon-area" ).closest('div.wpb_animate_when_almost_visible').addClass( "klb-no-animate" );
		});
    };
	

    /*-------------------------------------
     Mailchimp Classes
    -------------------------------------*/	
	
    var froday_mailchimp_form_ = function(){
		$(".mc4wp-form input[type='submit'], .modal .mc4wp-form input[type='submit']").addClass( "btn" );
		
		$(".mc4wp-form-fields input[type=email]").addClass( "form-control bg-white" );
		
		$("input:not([type='submit']),textarea,select" ).addClass( "form-control" );    
		$("#respond input[type='submit']" ).addClass( "btn submit" );
		$(".wpcf7-submit" ).addClass( "btn" );
		$(".page img.alignleft[width='160']").closest("p").addClass( "klbclear" );

Socialite.load();


	};
	
    /* ================================
       When document is ready, do
    ================================= */
       
        $(document).on('ready', function() {
            preloader();
            $('[data-toggle="tooltip"]').tooltip();
            html_direction();
            background_color();
            background_image();
            link_void();
            click_back();
            bugfix();
            navbar_js();
            share_social();
            add_favorite();
            owl_carousel();
            toogle_class();
            list_grid_view();
            froday_mailchimp_form_();
        });

    /* ================================
       Sticky Menu
    ================================= */

		if ($(".header-menu.bg-blue").hasClass("sticky")) {
			var stickyOffset = $('.header-menu.bg-blue').offset().top;
			
			$(window).scroll(function(){
			  var sticky = $('.header-menu.bg-blue'),
			      scroll = $(window).scrollTop();
			
			  if (scroll >= stickyOffset) sticky.addClass('fixed');
			  else sticky.removeClass('fixed');
			});
		}
        
    /* ================================
       When document is loading, do
    ================================= */
        
        $(window).on('load', function() {
            preloader();
            navbar_resize_load();
            flexslider();
        }); 

    /* ================================
       When Window is resizing, do
    ================================= */
        
        $(window).on('resize', function() {
            navbar_resize_load();
        });

		$(window).resize(function() {
			$('.error404 .main-content').innerHeight($(window).height() - $('.main-header').innerHeight() - $('footer').innerHeight()); 
		}).resize();
    /* ================================
       When document is Scrollig, do
    ================================= */
        
        $(window).on('scroll', function() {
            back_to_top();
        });

    
})(jQuery);