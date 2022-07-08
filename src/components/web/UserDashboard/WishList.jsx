import React from "react";
import ShopNewsletter from "../pages/HOME/ShopNewsletter";
import ShopService from "../pages/HOME/ShopService";

function WishList() {
	return (
		<div>
			<div className="shopping-cart section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* Shopping Summery */}
							<table className="table shopping-summery">
								<thead>
									<tr className="main-hading">
										<th>PRODUCT</th>
										<th>NAME</th>
										<th className="text-center">TOTAL</th>
										<th className="text-center">ADD TO CART</th>
										<th className="text-center">
											<i className="ti-trash remove-icon" />
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="image" data-title="No">
											<img
												src="/storage/photos/1/Products/405b7-pmtk004t.jpg"
												alt="/storage/photos/1/Products/405b7-pmtk004t.jpg"
											/>
										</td>
										<td className="product-des" data-title="Description">
											<p className="product-name">
												<a href="http://127.0.0.1:8000/product-detail/melange-casual-black">
													Melange Casual Black
												</a>
											</p>
											<p className="product-des" />
										</td>
										<td className="total-amount" data-title="Total">
											<span>$540</span>
										</td>
										<td>
											<a
												href="http://127.0.0.1:8000/add-to-cart/melange-casual-black"
												className="btn text-white"
											>
												Add To Cart
											</a>
										</td>
										<td className="action" data-title="Remove">
											<a href="http://127.0.0.1:8000/wishlist-delete/3">
												<i className="ti-trash remove-icon" />
											</a>
										</td>
									</tr>
									<tr>
										<td className="image" data-title="No">
											<img
												src="/storage/photos/1/Products/0455e-c1.jpg"
												alt="/storage/photos/1/Products/0455e-c1.jpg"
											/>
										</td>
										<td className="product-des" data-title="Description">
											<p className="product-name">
												<a href="http://127.0.0.1:8000/product-detail/lorem-ipsum-is-simply">
													Lorem Ipsum is simply
												</a>
											</p>
											<p className="product-des" />
										</td>
										<td className="total-amount" data-title="Total">
											<span>$190</span>
										</td>
										<td>
											<a
												href="http://127.0.0.1:8000/add-to-cart/lorem-ipsum-is-simply"
												className="btn text-white"
											>
												Add To Cart
											</a>
										</td>
										<td className="action" data-title="Remove">
											<a href="http://127.0.0.1:8000/wishlist-delete/4">
												<i className="ti-trash remove-icon" />
											</a>
										</td>
									</tr>
								</tbody>
							</table>
							{/*/ End Shopping Summery */}
						</div>
					</div>
				</div>
			</div>

			<ShopService />
			<ShopNewsletter />
		</div>
	);
}

export default WishList;
