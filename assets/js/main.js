(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.load(function() {
		$(".preloader").fadeOut(600);
    });
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	/* Our Client slider */
	var swiper = new Swiper('.testimonial-slider', {
		grabCursor: true,
		speed: 1500,
		autoplay: true,
		slidesPerView: 2,
		spaceBetween: 30,
		breakpoints: {
			480: {
				slidesPerView: 1
			},
			
			768: {
				slidesPerView: 2
			}
		},
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true
		},
	});

	/* Product slider */
	window.addEventListener('load', ()=> {
		var swiper = new Swiper('.product-slider', {
			grabCursor: true,
			speed: 1500,
			autoplay: true,
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				480: {
					slidesPerView: 1
				},
				
				768: {
					slidesPerView: 2
					
				},
				
				991: {
					slidesPerView: 3
					
				}
			},
			pagination: {
				el: '.products_pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
		});
	}, false)
	
	
	/* Category slider */
	var swiper = new Swiper('.category_slider', {
		grabCursor: true,
		speed: 1500,
		autoplay: true,
		slidesPerView: 4,
		spaceBetween: 30,
		breakpoints: {
			480: {
				slidesPerView: 1
			},
			
			768: {
				slidesPerView: 2
				
			},
			
			991: {
				slidesPerView: 3
				
			}
		},
		pagination: {
			el: '.categories_pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
	});
	
	
	/* Offers slider */
	var swiper = new Swiper('.latest_products', {
		effect: 'flip',
		speed: 1500,
		autoplay: true,
		grabCursor: true,
		cubeEffect: {
			shadow: false
		},
		pagination: {
			el: '.latest_products_pagination',
			clickable: true
		},
	});
	
	/* Header slider */
	var swiper = new Swiper('.header-slider', {
		allowSwipeToPrev: false,
		grabCursor: true,
		autoplay: true,
		speed: 1500,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	});
	
	/* Contact form validation */
	var $contactform=$("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Initiate Variables With Form Content*/
		var name = $("#name").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		var message = $("#message").val();

		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!");
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-success";
		} else {
			var msgClasses = "h3 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
	/* Parallaxie Js */
	if ($(window).width() > 768) {
		$('.parallaxie').parallaxie({
			speed: 0.55,
			 offset: 0,
		});
	}
})(jQuery);

