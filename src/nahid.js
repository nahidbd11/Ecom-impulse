
	//!for nice select
	// eslint-disable-next-line no-undef
	$("select").niceSelect();

	console.log("isotope working");
	// eslint-disable-next-line no-undef
	var $topeContainer = $(".isotope-grid");
	// eslint-disable-next-line no-undef
	var $filter = $(".filter-tope-group");
	//init isotope
	$topeContainer.isotope({
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
		console.log("working button");
		// eslint-disable-next-line no-undef
		var filterValue = $(this).attr("data-filter");
		$topeContainer.isotope({ filter: filterValue });
	});
