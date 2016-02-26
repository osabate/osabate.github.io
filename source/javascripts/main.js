//= require foundation/foundation
//= require foundation/foundation.orbit


$(document).foundation('orbit', {
	animation: 'fade',
	timer_speed: 5000,
	pause_on_hover: true,
	resume_on_mouseout: false,
	animation_speed: 250,
	stack_on_small: false,
	navigation_arrows: true,
	slide_number: true,
	container_class: 'orbit-container',
	stack_on_small_class: 'orbit-stack-on-small',
	next_class: 'orbit-next',
	prev_class: 'orbit-prev',
	timer_container_class: 'orbit-timer',
	timer_paused_class: 'paused',
	timer_progress_class: 'orbit-progress',
	slides_container_class: 'orbit-slides-container',
	bullets_container_class: 'orbit-bullets',
	bullets_active_class: 'active',
	slide_number_class: 'orbit-slide-number',
	caption_class: 'orbit-caption',
	active_slide_class: 'active',
	orbit_transition_class: 'orbit-transitioning',
	bullets: true,
	timer: false,
	next_on_click: false,
	variable_height: false
});


$(function() {


	// Mobile Menu
	$('#menu-icon').click(function() {

		var $mobileMenu = $('#mobile-menu'),
			$icon 		= $(this).find('i');


		if ( $icon.hasClass('fa-bars') ) {

			$icon.removeClass('fa-bars').addClass('fa-times');
			$mobileMenu.removeClass('close').addClass('open');

		} else {

			$icon.removeClass('fa-times').addClass('fa-bars');
			$mobileMenu.removeClass('open').addClass('close');

		}

	});




});