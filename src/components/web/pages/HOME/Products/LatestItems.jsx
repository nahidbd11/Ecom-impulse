import React from "react";
import useFetch from "../../../../../customHooks/useFetch";
import SingleLatestProduct from "./SingleLatestProduct";

function LatestItems() {
	const { result: latestProducts, loading } = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/latest-items/products`
	);
	return (
		<section className="shop-home-list section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-12">
						<div className="row">
							<div className="col-12">
								<div className="shop-section-title">
									<h1>Latest Items</h1>
								</div>
							</div>
						</div>
						<div className="row">
							{!loading &&
								latestProducts.data.map((product) => (
									<SingleLatestProduct {...product} key={product.id} />
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LatestItems;
