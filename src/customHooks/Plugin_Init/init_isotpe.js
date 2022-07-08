/* eslint-disable no-undef */
export default function init_isotope() {
	// eslint-disable-next-line no-undef
	// var $topeContainer = $(".isotope-grid");

	// eslint-disable-next-line no-undef
	var $filter = $(".filter-tope-group");
	//init isotope
	if ($(".isotope-grid").length) {
		var $topeContainer = $(".isotope-grid").isotope({
			itemSelector: ".isotope-item",
			layoutMode: "fitRows",
			percentPosition: true,
			animationEngine: "best-available",
			masonry: {
				columnWidth: ".isotope-item",
			},
		});
		// filter items on button click
		$filter.on("click", "button", function () {
			// eslint-disable-next-line no-undef
			// eslint-disable-next-line no-undef
			var filterValue = $(this).attr("data-filter");
			$topeContainer.isotope({ filter: filterValue });
		});
	}
}
