import React from "react";
import DescriptionReview from "./DescriptionReview";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";

function SingleProduct({ data }) {
	return (
		<section className="shop single section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="row">
							<div className="col-lg-6 col-12">
								{/* Product Slider */}
								<ProductGallery photo={data.photo} />
								{/* End Product slider */}
							</div>
							<div className="col-lg-6 col-12">
								<ProductDescription {...data} />
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<DescriptionReview {...data} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SingleProduct;
