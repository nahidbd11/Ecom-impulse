import React from "react";
// import second from "../../../../Storage";
function CarouselItem({ title, photo, id, description }) {
	return (
		<div className={`carousel-item ${id === 1 ? "active" : ""}`}>
			<img
				className="first-slide"
				src={`${process.env.REACT_APP_API_STORAGE_BASE}${photo}`}
				alt="First slide"
			/>
			<div className="carousel-caption d-none d-md-block text-left">
				<h1
					className="wow fadeInDown"
					dangerouslySetInnerHTML={{ __html: title }}
				/>
				<p />
				<h2 dangerouslySetInnerHTML={{ __html: description }} />
				<h2>
					<span style={{ color: "rgb(156, 0, 255)" }} />
				</h2>
				<p />
				<a
					className="btn btn-lg ws-btn wow fadeInUpBig"
					href="http://127.0.0.1:8000/product-grids"
					role="button"
				>
					Shop Now
				</a>
			</div>
		</div>
	);
}

export default CarouselItem;
