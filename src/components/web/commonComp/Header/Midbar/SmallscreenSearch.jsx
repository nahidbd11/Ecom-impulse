import React from "react";

function SmallscreenSerach() {
	return (
		<div className="search-top">
			<div className="top-search">
				<a href="#0">
					<i className="ti-search" />
				</a>
			</div>

			<div className="search-top">
				<form className="search-form">
					<input type="text" placeholder="Search here..." name="search" />
					<button value="search" type="submit">
						<i className="ti-search" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default SmallscreenSerach;
