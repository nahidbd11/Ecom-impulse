import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../../ContextApi/Context";
import { getDiscountPrice } from "../../../../../utilityFunction/discountPrice";
import { getPhoto } from "../../../../../utilityFunction/getPhoto";

function SingleProduct({
  id,
  cat_id,
  photo,
  title,
  discount,
  price,
  condition,
  imgIndex,
  imgLength,
  slug,
  getModalData,
}) {
	return (
		<div className={"col-sm-6 col-md-4 col-lg-3 isotope-item " + cat_id}>
			<div className="single-product">
				<div className="product-img">
					<Link to={`/product-details/${slug}`}>
						<img
							className="default-img"
							onLoad={() => {
								if (imgIndex === imgLength - 1) {
									document.getElementById("allproduct").click();
								}
							}}
							src={getPhoto(photo)}
							alt="/storage/photos/1/Products/calvin-klein.jpg"
						/>
						<img
							className="hover-img"
							src={getPhoto(photo)}
							alt="/storage/photos/1/Products/calvin-klein.jpg"
						/>
						<span className="new">{condition}</span>
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
								href="http://localhost:8000/wishlist/baby-girls-2-piece-yell"
							>
								<i className=" ti-heart " />
								<span>Add to Wishlist</span>
							</a>
						</div>
						<div className="product-action-2">
							<a
								title="Add to cart"
								href="http://localhost:8000/add-to-cart/baby-girls-2-piece-yell"
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
					<div className="product-price">
						<span>${getDiscountPrice(price, discount)}</span>
						<del style={{ paddingLeft: "4%" }}>${price}</del>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleProduct;
