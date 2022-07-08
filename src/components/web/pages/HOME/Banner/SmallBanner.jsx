import React from "react";
import useFetch from "../../../../../customHooks/useFetch";

function Banner() {
	const { result: catlist, loading } = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/categories/list`
	);
	return (
		<section className="small-banner section">
			<div className="container-fluid">
				<div className="row">
					{/* Single Banner  */}
					{!loading &&
						catlist.data.map(({ id, title, photo }, i) => {
							return (
								<div className="col-lg-4 col-md-6 col-12" key={id}>
									<div className="single-banner">
										<img
											alt=""
											src={`${
												process.env.REACT_APP_API_STORAGE_BASE +
												catlist.data[i].photo
											}`}
										/>
										<div className="content">
											<h3>{title}</h3>
											<a href="http://127.0.0.1:8000/product-cat/mens-fashion">
												Discover Now
											</a>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
}

export default Banner;
