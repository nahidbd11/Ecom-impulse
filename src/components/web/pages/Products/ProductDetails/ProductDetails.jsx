import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../../../customHooks/useFetch";
import ProductModal from "../ProductModal";
import RelatedProducts from "./RelatedProducts";
import SingleProduct from "./SingleProduct/SingleProduct";

function ProductDetails() {
	//fetch details of product
	const { slug } = useParams();
	//TODO:fetch for single product details
	const apiEnd = `${process.env.REACT_APP_API_BASE_URL}/product-detail/${slug}`;
	const { loading, result: detailsData } = useFetch(apiEnd);
	const [modalData, setModalData] = useState(null);

	//TODO:fetch for related cat product
	let category = !loading && detailsData && detailsData.data.cat_id[0].slug;
	let api = `${process.env.REACT_APP_API_BASE_URL}/product-cat/${category}`;
	const {
		loading: catLoading,
		result: { data: catProductData },
	} = useFetch(api);
	//TODO: get modal info
	const getModalData = (id) => {
		let [res] = catProductData.filter((product) => product.id === id);
		setModalData(res);
	};

	return (
		<div>
			{!loading && <SingleProduct {...detailsData} />}
			{!catLoading && <RelatedProducts {...{ catProductData, getModalData }} />}
			{modalData && <ProductModal {...{ ...modalData, setModalData }} />}
		</div>
	);
}

export default ProductDetails;
