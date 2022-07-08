/* eslint-disable no-undef */
import init_isotope from "./init_isotpe";

const pluginsinit = {
	isotope: init_isotope,
	nice_select: () => {
		$("select").niceSelect();
	},
	range_slider: () => {
		const max_value = parseInt($("#slider-range").data("max")) || 500;
		const min_value = parseInt($("#slider-range").data("min")) || 0;
		$("#slider-range").slider({
			range: true,
			min: min_value,
			max: max_value,
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			},
		});
		$("#amount").val(
			"$" +
				$("#slider-range").slider("values", 0) +
				" - $" +
				$("#slider-range").slider("values", 1)
		);
	},
	popular_slider: () => {
		$(".popular-slider").owlCarousel({
			// items: 3,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 400,
			animateIn: "fadeIn",
			animateOut: "fadeOut",
			autoplayHoverPause: true,
			loop: false,
			rewind: true,
			nav: true,
			merge: true,
			dots: false,
			navText: [
				'<i class="ti-angle-left"></i>',
				'<i class="ti-angle-right"></i>',
			],
			responsive: {
				0: {
					items: 1,
				},
				300: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1170: {
					items: 4,
				},
			},
		});
	},
	quickView_slider: () => {
		$(".quickview-slider-active").owlCarousel({
			items: 1,
			autoplay: true,
			autoplayTimeout: 2000,
			smartSpeed: 400,
			autoplayHoverPause: true,

			nav: true,
			loop: false,
			rewind: true,
			merge: true,
			dots: false,
			navText: [
				'<i class=" ti-arrow-left"></i>',
				'<i class=" ti-arrow-right"></i>',
			],
		});
	},
	flex_slider: () => {
		$(".flexslider-thumbnails").flexslider({
			animation: "slide",
			controlNav: "thumbnails",
		});
	},
};

export default pluginsinit;
