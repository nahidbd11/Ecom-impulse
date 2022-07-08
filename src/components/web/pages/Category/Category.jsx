import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePluginInit from "../../../../customHooks/Plugin_Init/usePluginInit";
import useFetch from "../../../../customHooks/useFetch";
import ProductModal from "../Products/ProductModal";
import SingleCatProduct from "./SingleCatProduct";

function Category() {
	//TODO:fetch for category

	let params = useParams();

	const api = params.sub_cat
		? `${process.env.REACT_APP_API_BASE_URL}/product-sub-cat/${params.cat}/${params.sub_cat}`
		: `${process.env.REACT_APP_API_BASE_URL}/product-cat/${params.cat}`;

	const {
		loading,
		result: { data: catProductData },
	} = useFetch(api);
	//set modal data
	const [modalData, setModalData] = useState(null);
	const getModalData = (id) => {
		// console.log(slug);
		// fetch(`http://127.0.0.1:8000/api/product-detail/${slug}`)
		// 	.then((res) => res.json())
		// 	.then((data) => setModalData(data));
		let [res] = catProductData.filter((product) => product.id === id);
		setModalData(res);

		console.log(modalData);
	};
	usePluginInit("nice_select", "quickView_slider");
	return (
		<div className="row">
			{!loading &&
				catProductData.map((product) => (
					<SingleCatProduct
						key={ProductModal.id}
						{...{ ...product, getModalData }}
					/>
				))}
			{modalData && <ProductModal {...{ ...modalData, setModalData }} />}
		</div>
	);
}

export default Category;
