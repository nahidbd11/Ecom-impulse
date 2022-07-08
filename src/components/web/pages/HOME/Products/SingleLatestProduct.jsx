import React from "react";
import { Link } from "react-router-dom";
import { getPhoto } from "../../../../../utilityFunction/getPhoto";

function SingleLatestProduct({ title, photo, price, slug }) {
	return (
		<div className="col-md-4">
			{/* Start Single List  */}
			<div className="single-list">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<div className="list-image overlay">
							<img src={getPhoto(photo)} alt="" />
							<a
								href="http://localhost:8000/add-to-cart/lorem-ipsum-is-simply-2008183507-655"
								className="buy"
							>
								<i className="fa fa-shopping-bag" />
							</a>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-12 no-padding">
						<div className="content">
							<h4 className="title">
								<Link to={`/product-details/${slug}`}>{title}</Link>
							</h4>
							<p className="price with-discount">${price}</p>
						</div>
					</div>
				</div>
			</div>
			{/* End Single List  */}
		</div>
	);
}

export default SingleLatestProduct;
