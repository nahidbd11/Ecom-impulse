import React from "react";
import useFetch from "../../../../customHooks/useFetch";
import SpinLoader from "../../../UtilsComponents/Spinloader/SpinLoader";
import CarouselItem from "./CarouselItem";

function Carousel() {
	const apiEndPoint = `${process.env.REACT_APP_API_BASE_URL}/banners`;
	const { loading, error, result: CarouselData } = useFetch(apiEndPoint);

	return (
		<section id="Gslider" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				{loading && <SpinLoader ratio={50} />}
				{!loading &&
					CarouselData.data.map(({ id }, i) => {
						return (
							<li
								data-target="#Gslider"
								key={id}
								data-slide-to={i}
								className={`${id === 1 && "active"}`}
							/>
						);
					})}
			</ol>
			<div className="carousel-inner" role="listbox">
				{/* TODO: rendering carosule item */}
				{!loading &&
					CarouselData.data.map((CarouselData, index) => {
						const { title, photo, id, description } = CarouselData;
						return (
							<CarouselItem {...{ title, photo, id, description }} key={id} />
						);
					})}
			</div>
			<a
				className="carousel-control-prev"
				href="#Gslider"
				role="button"
				data-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#Gslider"
				role="button"
				data-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</section>
	);
}

export default Carousel;
