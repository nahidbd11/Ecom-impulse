import React, { useEffect, useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import MediumBanner from "./Banner/MediumBanner";
import SmallBanner from "./Banner/SmallBanner";
import Carousel from "./Carousel";
import LatestItems from "./Products/LatestItems";
import MostPopular from "./Products/MostPopular";
import Product from "./Products/Product";
import ShopBlog from "./ShopBlog";
import ShopNewsletter from "./ShopNewsletter";
import ShopService from "./ShopService";
import usePluginInit from "../../../../customHooks/Plugin_Init/usePluginInit";
import SpinLoader from "../../../UtilsComponents/Spinloader/SpinLoader";
import ProductModal from "../Products/ProductModal";
import { useAuth } from "../../../../ContextApi/AuthContext";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Home() {
	//TODO:inialize plugin with customhook
	usePluginInit("isotope", "nice_select", "popular_slider");
	const location = useLocation();

	const toastOptions = {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};
	useEffect(() => {
		if (location.state) toast.success(location.state);
	}, [location.state]);
	return (
		<div>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			{/*TODO: carousel section */}
			<Carousel />
			{/* TODO:small Banner section */}
			<SmallBanner />
			{/* TODO:product area */}
			<Product />
			{/* TODO:Medium Banner section */}
			<MediumBanner />
			{/* TODO:most popular product */}
			<MostPopular />
			{/* TODO:Latest items  */}
			<LatestItems />
			{/* TODO:shop Blog section */}
			{/* <ShopBlog /> */}
			{/* TODO: shop service section */}
			<ShopService />
			{/* TODO: news letter section */}
			<ShopNewsletter />
		</div>
	);
}

export default Home;
