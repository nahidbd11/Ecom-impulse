import React, { useEffect } from "react";
import ShopNewsletter from "../HOME/ShopNewsletter";
import ShopService from "../HOME/ShopService";
import AboutContent from "./AboutContent";

const About = () => {

	return (
		<div>
			{/* TODO: About content with image */}
			<AboutContent />
			{/* TODO: services */}
			<ShopService />
			{/* TODO:newsletter */}
			<ShopNewsletter />
		</div>
	);
};

export default About;
