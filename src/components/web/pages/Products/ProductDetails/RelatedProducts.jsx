import React from "react";
import { Link } from "react-router-dom";
import usePluginInit from "../../../../../customHooks/Plugin_Init/usePluginInit";

import { getPhoto } from "../../../../../utilityFunction/getPhoto";

function RelatedProducts({ catProductData, getModalData}) {
	usePluginInit("popular_slider");
	return (
		<div className="product-area most-popular related-product section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<h2>Related Products</h2>
						
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{catProductData && (
							<div className="owl-carousel popular-slider">
								{/* Start Single Product */}
								{catProductData.map(
									({
										photo,
										id,
										title,
										price,
										after_discount,
										slug,
										discount,
									}) => (
										<div className="single-product" key={id}>
											<div className="product-img">
												<Link to={`/product-details/${slug}`}>
													<img
														className="default-img"
														src={getPhoto(photo)}
														alt="/storage/photos/1/Products/01f42-pwt004b.jpg"
													/>
													<img
														className="hover-img"
														src={getPhoto(photo)}
														alt="/storage/photos/1/Products/01f42-pwt004b.jpg"
													/>
													<span className="price-dec">{discount}% Off</span>
												</Link>
												<div className="button-head">
													<div className="product-action">
														<a
															data-toggle="modal"
															data-target={`#${id}`}
															title="Quick View"
															href="#d"
															onClick={() => getModalData(id)}
														>
															<i className=" ti-eye" />
															<span>Quick Shop</span>
														</a>
														<a title="Wishlist" href="#">
															<i className=" ti-heart " />
															<span>Add to Wishlist</span>
														</a>
														<a title="Compare" href="#">
															<i className="ti-bar-chart-alt" />
															<span>Add to Compare</span>
														</a>
													</div>
													<div className="product-action-2">
														<a title="Add to cart" href="#">
															Add to cart
														</a>
													</div>
												</div>
											</div>
											<div className="product-content">
												<h3>
													<Link to={`/product-details/${slug}`}>{title}</Link>
												</h3>
												<div className="product-price">
													<span className="old">${price}</span>
													<span>${after_discount}</span>
												</div>
											</div>
										</div>
									)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default RelatedProducts;
