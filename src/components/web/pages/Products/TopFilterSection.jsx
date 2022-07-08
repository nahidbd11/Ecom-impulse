/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePluginInit from "../../../../customHooks/Plugin_Init/usePluginInit";

function TopFilterSection({ handleSearchParam }) {
	usePluginInit("nice_select");
	const navigate = useNavigate();

	const handleSelectedItem = (e, filterKey) => {
		navigate("/products");
		console.log("after navigation");
		handleSearchParam({
			[filterKey]: e.target.value !== "default" ? e.target.value : null,
		});
	};

	useEffect(() => {
		$(".show").on("change", (e) => handleSelectedItem(e, "show"));
		$(".sortBy").on("change", (e) => handleSelectedItem(e, "sortBy"));
		return () => {
			$(".show").off("change");
			$(".sortBy").off("change");
		};
	});
	return (
		<div className="shop-top">
			<div className="shop-shorter">
				<div className="single-shorter">
					<label>Show :</label>
					<select className="show" name="show">
						<option value="default">Default</option>
						<option value={9}>09</option>
						<option value={15}>15</option>
						<option value={21}>21</option>
						<option value={30}>30</option>
					</select>
				</div>
				<div className="single-shorter">
					<label>Sort By :</label>
					<select className="sortBy" name="sortBy">
						<option value="default">Default</option>
						<option value="title">Name</option>
						<option value="price">Price</option>
						<option value="category">Category</option>
						<option value="brand">Brand</option>
					</select>
				</div>
			</div>
			<ul className="view-mode">
				<li className="active">
					<a href="">
						<i className="fa fa-th-large" />
					</a>
				</li>
				{/* <li>
												<a href="http://127.0.0.1:8000/product-lists">
													<i className="fa fa-th-list" />
												</a>
											</li> */}
			</ul>
		</div>
	);
}

export default TopFilterSection;
