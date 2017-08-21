//Page Preloader
$(window).load(function() {
	$("#intro-loader").delay(500).fadeOut();
	$(".mask").delay(1000).fadeOut("slow");

	// HOME PAGE VIDEO MODAL
    $('#video-modal').on('click', function(e){
    	e.preventDefault();
    	$( '#' + $(this).data('modal-id') ).modal();
	});
    $('body').on('hidden.bs.modal', '.modal', function () {
		$('video').trigger('pause');
	});

    
});

$(document).ready(function() {

	//IE fix for jumpy background images when scrolling
	if(navigator.userAgent.match(/Trident\/7\./)) {
		$('body').on("mousewheel", function () {
			event.preventDefault();

			var wheelDelta = event.wheelDelta;

			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});

		$('body').keydown(function (e) {
        	e.preventDefault(); // prevent the default action (scroll / move caret)
        	var currentScrollPosition = window.pageYOffset;

        	switch (e.which) {

            	case 38: // up
            	window.scrollTo(0, currentScrollPosition - 120);
            	break;

            	case 40: // down
            	window.scrollTo(0, currentScrollPosition + 120);
            	break;

            	default: return; // exit this handler for other keys
        	} 
    	});
	}//END IE FIX
	
	//Window Scrolled - Add site-header-solid
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 300) {
			$("#nav-menu").addClass("dark-menu");
		} else {
			$("#nav-menu").removeClass("dark-menu");
		}
	});
	
	// MAIN MENU TOGGLE
    $("#menu-toggle, #close-btn").click(function(e) {
        e.preventDefault();
        $("#menu-wrapper").toggleClass("toggled");
    });

    
	//Elements Appear from top
	$('.item_top').each(function() {
		$(this).appear(function() {
			$(this).delay(150).animate({
				opacity : 1,
				top : "0px"
			}, 1000);
		});
	});

	//Elements Appear from bottom
	$('.item_bottom').each(function() {
		$(this).appear(function() {
			$(this).delay(150).animate({
				opacity : 1,
				bottom : "0px"
			}, 1000);
		});
	});

	//Elements Appear from left
	$('.item_left').each(function() {
		$(this).appear(function() {
			$(this).delay(150).animate({
				opacity : 1,
				left : "0px"
			}, 1000);
		});
	});
	
	//Elements Appear from right
	$('.item_right').each(function() {
		$(this).appear(function() {
			$(this).delay(150).animate({
				opacity : 1,
				right : "0px"
			}, 1000);
		});
	});
	
	//Elements Appear in fadeIn effect
	$('.item_fade_in').each(function() {
		$(this).appear(function() {
			$(this).delay(150).animate({
				opacity : 1,
				right : "0px"
			}, 1000);
		});
	});

	$('a.external').click(function() {
		var url = $(this).attr('href');
		$('.mask').fadeIn(250, function() {
			document.location.href = url;
		});
		$("#intro-loader").fadeIn("slow");
		return false;
	});
	
	
});
	
//Navigation Scrolling
$(function() {
	$('#brand, .nav li a, .start-button, .scroll-down').bind('click', function(event) {
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop : $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');

		event.preventDefault();
	});
});

var onMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	onMobile = true;
}

//Back To Top
$(window).scroll(function() {
	if ($(window).scrollTop() > 400) {
		$("#back-top").fadeIn(200);
	} 
	else {
		$("#back-top").fadeOut(200);
	}
});

$('#back-top').click(function() {
	$('html, body').stop().animate({
		scrollTop : 0
	}, 1500, 'easeInOutExpo');
});

if ((onMobile === false ) && ($('.parallax-slider').length )) {
	skrollr.init({
		edgeStrategy : 'set',
		smoothScrolling : false,
		forceHeight : false
	});
}


//play Video
$('.overlay, .image-control-circle').click(function(){
   	document.getElementById('demo-video').play();
   	$('video').bind('play', function (e) {
    	// Hide Middle Play button
    	$('.image-control-circle').hide();
    	$('.overlay').hide();
	});
	$('video').bind('pause', function (e) {
    	// Show Middle Play button
    	$('.image-control-circle').show();
    	$('.overlay').show();
	});
});

//Parallax
$(window).bind('load', function() {
	parallaxInit();
});

function parallaxInit() {
	$('#one-parallax').parallax("30%", 0.1);
	$('#two-parallax').parallax("30%", 0.1);
	$('#three-parallax').parallax("30%", 0.1);
	$('#four-parallax').parallax("30%", 0.1);
	$('#five-parallax').parallax("30%", 0.1);
	$('#six-parallax').parallax("30%", 0.1);
	$('#seven-parallax').parallax("30%", 0.1);
	$('#home').parallax("30%", 0.1);
	$('#industries').parallax("30%", 0.1);
	$('#mobile').parallax("30%", 0.1);
	$('#clients').parallax("30%", 0.1);
	$('#social-parallax').parallax("30%", 0.1);
	$('#crm-parallax').parallax("30%", 0.1);
	$('#crm-separator').parallax("30%", 0.1);
	$('#crm-agents').parallax("30%", 0.1);
	$('#am-parallax1').parallax("30%", 0.1);
	$('#signage-parallax1').parallax("30%", 0.1);
	$('#signage-parallax2').parallax("30%", 0.1);

	/*add as necessary*/
}

