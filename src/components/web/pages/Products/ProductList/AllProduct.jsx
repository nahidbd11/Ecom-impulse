import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import usePluginInit from "../../../../../customHooks/Plugin_Init/usePluginInit";
import useFetch from "../../../../../customHooks/useFetch";
import { getPhoto } from "../../../../../utilityFunction/getPhoto";
import ProductModal from "../ProductModal";
import SingleProductgrid from "./SingleProductgrid";

function AllProduct() {
	//fetch products
	const [searchParams, setSearchParams] = useSearchParams();
	const queryString = searchParams.toString();
	//TODO:check if query string exist then filter query product else show all products
	const api = queryString
		? `${process.env.REACT_APP_API_BASE_URL}/product-grids/?${queryString}`
		: `${process.env.REACT_APP_API_BASE_URL}/product-grids`;

	const {
		loading,
		result: { data: productData },
	} = useFetch(api);
	//set modal data
	const [modalData, setModalData] = useState(null);
	const getModalData = (id) => {
		let [res] = productData.filter((product) => product.id === id);
		setModalData(res);
	};
	//init plugin
	usePluginInit("nice_select", "quickView_slider");
	return (
		<div>
			<div className="row">
				{!loading &&
					productData.map((product) => (
						<SingleProductgrid
							key={product.id}
							{...{ ...product, getModalData }}
						/>
					))}
			</div>
			{modalData && <ProductModal {...{ ...modalData, setModalData }} />}
		</div>
	);
}

export default AllProduct;
