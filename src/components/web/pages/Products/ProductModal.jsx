/* eslint-disable no-undef */
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../../ContextApi/Context";
import usePluginInit from "../../../../customHooks/Plugin_Init/usePluginInit";
import { parseDom } from "../../../../utilityFunction/domparser";
import { getPhoto } from "../../../../utilityFunction/getPhoto";

function ProductModal({
	photo,
	id,
	title,
	size,
	price,
	discount,
	summary,
	stock,
	setModalData,
	rate,
	rate_count,
}) {
	usePluginInit("nice_select", "quickView_slider");
	useEffect(() => {
		$(".myModal").on("hide.bs.modal", function (e) {
			setModalData(null);
		});
	}, []);
	return (
		<div className="modal fade myModal" id={id} tabIndex={-1} role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={() => setModalData(null)}
						>
							<span className="ti-close" aria-hidden="true" />
						</button>
					</div>
					<div className="modal-body">
						<div className="row no-gutters">
							<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
								{/* Product Slider */}

								<div className="product-gallery">
									<div className="quickview-slider-active">
										{photo &&
											photo.split(",").map((img) => (
												<div className="single-slider" key={img}>
													<img
														src={getPhoto(img)}
														alt="/storage/photos/1/Products/02090-pms003a.jpg"
													/>
												</div>
											))}
									</div>
								</div>

								{/* End Product slider */}
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
								<div className="quickview-content">
									<h2>{title}</h2>
									<div className="quickview-ratting-review">
										<div className="quickview-ratting-wrap">
											<div className="quickview-ratting">
												{[...Array(rate)].map((x, i) => (
													<i className="fa fa-star-o" key={i} />
												))}
											</div>
											<a href="#"> ({rate_count || 0} customer review)</a>
										</div>

										<div className="quickview-stock">
											<span>
												<i className="fa fa-check-circle-o" /> {stock || 0} in
												stock
											</span>
										</div>
									</div>
									<h3>
										<small>
											<del className="text-muted">${price}</del>
										</small>
										${price - (price * discount) / 100}
									</h3>
									<div className="quickview-peragraph">
										<p />
										<div>
											<span
												style={{
													fontFamily: "open sans, arial, sans-serif",
													fontSize: "14px",
													textAlign: "justify",
												}}
											>
												{/* {parseDom(summary)} */}

												<p dangerouslySetInnerHTML={{ __html: summary }} />
											</span>
											<br />
										</div>
										<p />
									</div>

									<div className="size">
										<div className="row">
											<div className="col-lg-6 col-12">
												<h5 className="title">Size</h5>
												<select>
													{size &&
														size
															.split(",")
															.map((sizeType, i) => (
																<option key={i}>{sizeType}</option>
															))}
												</select>
											</div>
										</div>
									</div>
									<form
										action="http://127.0.0.1:8000/add-to-cart"
										method="POST"
									>
										<input
											type="hidden"
											name="_token"
											defaultValue="URulrKB6NS7jOGeA60UfGTRbJUlQnk6wzS39k1jQ"
										/>
										<div className="quantity">
											{/* Input Order */}
											<div className="input-group">
												<div className="button minus">
													<button
														type="button"
														className="btn btn-primary btn-number"
														disabled="disabled"
														data-type="minus"
														data-field="quant[1]"
													>
														<i className="ti-minus" />
													</button>
												</div>
												<input
													type="hidden"
													name="slug"
													defaultValue="summer-round-neck-t"
												/>
												<input
													type="text"
													name="quant[1]"
													className="input-number"
													data-min={1}
													data-max={1000}
													defaultValue={1}
												/>
												<div className="button plus">
													<button
														type="button"
														className="btn btn-primary btn-number"
														data-type="plus"
														data-field="quant[1]"
													>
														<i className="ti-plus" />
													</button>
												</div>
											</div>
											{/*/ End Input Order */}
										</div>
										<div className="add-to-cart">
											<button type="submit" className="btn">
												Add to cart
											</button>
											<a
												href="http://127.0.0.1:8000/wishlist/summer-round-neck-t"
												className="btn min"
											>
												<i className="ti-heart" />
											</a>
										</div>
									</form>
									<div className="default-social">
										{/* ShareThis BEGIN */}
										<div className="sharethis-inline-share-buttons" />
										{/* ShareThis END */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductModal;
