import React from "react";
import { Link } from "react-router-dom";
import { getPhoto } from "../../../../../utilityFunction/getPhoto";

function SinglePopularProduct({
	id,
	photo,
	title,
	discount,
	price,
	slug,
	getModalData,
}) {
	return (
		<div className="single-product">
			<div className="product-img">
				<Link to={`/product-details/${slug}`}>
					<img
						className="default-img"
						src={getPhoto(photo)}
						alt="../../../../../images/Products/01f42-pwt004b.jpg"
					/>
					<img
						className="hover-img"
						src={getPhoto(photo)}
						alt="../../../../../images/Products/01f42-pwt004b.jpg"
					/>
				</Link>
				<div className="button-head">
					<div className="product-action">
						<a
							data-toggle="modal"
							data-target={`#${id}`}
							title="Quick View"
							href="#a"
							onClick={() => {
								getModalData(id);
							}}
						>
							<i className=" ti-eye" />
							<span>Quick Shop</span>
						</a>
						<a
							title="Wishlist"
							href="http://localhost:8000/wishlist/lorem-ipsum-is-simply-2008183507-655"
						>
							<i className=" ti-heart " />
							<span>Add to Wishlist</span>
						</a>
					</div>
					<div className="product-action-2">
						<a href="http://localhost:8000/add-to-cart/lorem-ipsum-is-simply-2008183507-655">
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
					<span>${(price - price / discount).toFixed(2)}</span>
				</div>
			</div>
		</div>
	);
}

export default SinglePopularProduct;
