import React from "react";
import { Link } from "react-router-dom";
import { getDiscountPrice } from "../../../../../utilityFunction/discountPrice";
import { getPhoto } from "../../../../../utilityFunction/getPhoto";

function SingleProductgrid({
	getModalData,
	id,
	photo,
	slug,
	title,
	price,
	discount,
}) {
	return (
		<div className="col-lg-4 col-md-6 col-12">
			<div className="single-product">
				<div className="product-img">
					<Link to={`/product-details/${slug}`}>
						<img
							className="default-img"
							src={getPhoto(photo)}
							alt="/storage/photos/1/Products/405b7-pmtk004t.jpg"
						/>
						<img
							className="hover-img"
							src={getPhoto(photo)}
							alt="/storage/photos/1/Products/405b7-pmtk004t.jpg"
						/>
						<span className="price-dec">{discount} % Off</span>
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
							<a
								title="Wishlist"
								href="http://127.0.0.1:8000/wishlist/melange-casual-black"
								className="wishlist"
								data-id={1}
							>
								<i className=" ti-heart " />
								<span>Add to Wishlist</span>
							</a>
						</div>
						<div className="product-action-2">
							<a
								title="Add to cart"
								href="http://127.0.0.1:8000/add-to-cart/melange-casual-black"
							>
								Add to cart
							</a>
						</div>
					</div>
				</div>
				<div className="product-content">
					<h3>
						<Link to={`/product-details/${slug}`}>{title}</Link>
					</h3>
					<span>${getDiscountPrice(price, discount)}</span>
					<del style={{ paddingLeft: "4%" }}>${price}</del>
				</div>
			</div>
		</div>
	);
}

export default SingleProductgrid;
