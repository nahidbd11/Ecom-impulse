import React from "react";
import usePluginInit from "../../../../../../customHooks/Plugin_Init/usePluginInit";
import { getPhoto } from "../../../../../../utilityFunction/getPhoto";

function ProductGallery({ photo }) {
	usePluginInit("flex_slider");
	return (
		<div className="product-gallery">
			{/* Images slider */}
			{photo && (
				<div className="flexslider-thumbnails">
					<ul className="slides">
						{photo.split(",").map((pic) => (
							<li
								data-thumb={getPhoto(pic)}
								rel="adjustX:10, adjustY:"
								key={pic}
							>
								<img
									src={getPhoto(pic)}
									alt="/storage/photos/1/Products/405b7-pmtk004t.jpg"
								/>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* End Images slider */}
		</div>
	);
}

export default ProductGallery;
