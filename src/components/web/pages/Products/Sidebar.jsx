/* eslint-disable no-undef */
import React, { useEffect, useRef } from "react";
import {
	Link,
	useNavigate,
	useParams,
	useSearchParams,
} from "react-router-dom";
import usePluginInit from "../../../../customHooks/Plugin_Init/usePluginInit";
import useFetch from "../../../../customHooks/useFetch";
import { getPhoto } from "../../../../utilityFunction/getPhoto";

function Sidebar({ handleSearchParam }) {
	//TODO:fetch for brand
	const api = `${process.env.REACT_APP_API_BASE_URL}/product-brands`;
	const {
		loading,
		result: { data: brandData },
	} = useFetch(api);
	//TODO:fetch for max-price range
	const maxRangeApi = `${process.env.REACT_APP_API_BASE_URL}/product-max-price`;
	const { loading: maxRangeLoading, result: max_priceRange } =
		useFetch(maxRangeApi);

	//TODO:fetch for recent post
	const recentPostApi = `${process.env.REACT_APP_API_BASE_URL}/recent-product `;
	const {
		loading: recentProductLoading,
		result: { data: recentProductData },
	} = useFetch(recentPostApi);

	//TODO:fetch for category sub category
	const catApi = `${process.env.REACT_APP_API_BASE_URL}/product-categories `;
	const {
		loading: catLoading,
		result: { data: catData },
	} = useFetch(catApi);

	//TODO:init plugin
	usePluginInit("range_slider");
	const navigate = useNavigate();
	//TODO: handle filter price button on click
	const handlePriceFilter = () => {
		var val = $("#amount").val();
		var regEx = /\$| /gi;
		let newVal = val.replace(regEx, "");
		navigate("/products");
		handleSearchParam({ price: newVal });
	};
	return (
		<div className="shop-sidebar">
			{/* TODO: category names */}
			<div className="single-widget category">
				<h3 className="title">Categories</h3>
				<ul className="categor-list">
					{!catLoading &&
						catData.map(({ title, id, child_cat, slug }) => {
							return (
								<li key={id}>
									<Link to={`/category/${slug}`}>{title}</Link>
									<ul>
										{child_cat &&
											child_cat.map(({ title, id, slug: sub_slug }) => (
												<li key={id}>
													<Link to={`/category/${slug}/${sub_slug}`}>
														{title}
													</Link>
												</li>
											))}
									</ul>
								</li>
							);
						})}
				</ul>
			</div>
			{/*/ End Single Widget */}
			{/* Shop By Price */}
			<div className="single-widget range">
				<h3 className="title">Shop by Price</h3>
				<div className="price-filter">
					<div className="price-filter-inner">
						{!maxRangeLoading && (
							<div id="slider-range" data-min={0} data-max={max_priceRange} />
						)}

						<div className="product_filter">
							<button
								type="submit"
								className="filter_button"
								onClick={handlePriceFilter}
							>
								Filter
							</button>
							<div className="label-input">
								<span>Range:</span>
								{!maxRangeLoading && (
									<input style={{}} type="text" id="amount" readOnly />
								)}

								<input
									type="hidden"
									name="price_range"
									id="price_range"
									defaultValue
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*/ End Shop By Price */}
			{/* Single Widget */}
			<div className="single-widget recent-post">
				<h3 className="title">Recent post</h3>
				{/* Single Post */}
				{!recentProductLoading &&
					recentProductData.map(({ title, org, price, photo, id }) => (
						<div className="single-post first" key={id}>
							<div className="image">
								<img
									src={getPhoto(photo)}
									alt="/storage/photos/1/Products/01f42-pwt004b.jpg"
								/>
							</div>
							<div className="content">
								<h5>
									<a href="http://127.0.0.1:8000/product-detail/lorem-ipsum-is-simply-2008183507-655">
										{title}
									</a>
								</h5>
								<p className="price">
									<del className="text-muted">${price}</del> ${org}
								</p>
							</div>
						</div>
					))}
			</div>
			{/*/ End Single Widget */}
			{/*TODO: Brands */}
			<div className="single-widget category">
				<h3 className="title">Brands</h3>
				<ul className="categor-list">
					{!loading &&
						brandData.map(({ title, id }) => (
							<li key={id}>
								<a href="http://127.0.0.1:8000/product-brand/brand">{title}</a>
							</li>
						))}
				</ul>
			</div>
			{/*/ End Single Widget */}
		</div>
	);
}

export default Sidebar;
