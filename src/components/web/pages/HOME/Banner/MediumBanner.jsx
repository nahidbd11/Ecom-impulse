import React from "react";
import useFetch from "../../../../../customHooks/useFetch";
import { getPhoto } from "../../../../../utilityFunction/getPhoto";

function MediumBanner() {
	const { result: featuredProduct, loading } = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/products/featured`
	);

	return (
		<section className="midium-banner">
			<div className="container">
				<div className="row">
					{/* Single Banner  */}
					{!loading &&
						featuredProduct.data.map(({ title, discount, photo, id }) => (
							<div className="col-lg-6 col-md-6 col-12" key={id}>
								<div className="single-banner">
									<img src={getPhoto(photo)} alt="" />
									<div className="content">
										<p>Kid's</p>
										<h3>
											{title} <br />
											Up to<span> {discount}%</span>
										</h3>
										<a href="http://localhost:8000/product-detail/ladies-cotton-kurti-sha">
											Shop Now
										</a>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}

export default MediumBanner;
