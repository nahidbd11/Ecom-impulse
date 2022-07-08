import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../ContextApi/Context";
import usePluginInit from "../../../../../customHooks/Plugin_Init/usePluginInit";
import useFetch from "../../../../../customHooks/useFetch";
import SpinLoader from "../../../../UtilsComponents/Spinloader/SpinLoader";
import ProductModal from "../../Products/ProductModal";
import SingleProduct from "./SingleProduct";
function ProductItems() {
	const { result: productList, loading } = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/products`
	);

	usePluginInit("isotope", "nice_select");
	const [modalData, setModalData] = useState(null);

	const getModalData = (id) => {
		let [res] = productList.data.filter((product) => product.id === id);
		setModalData(res);
	};

	return (
		<div>
			{loading && <SpinLoader ratio={50} />}

			{!loading && (
				<div className="tab-content isotope-grid" id="myTabContent">
					{productList.data.map((product, imgIndex) => {
						const imgLength = productList.data.length;
						return (
							<SingleProduct
								key={product.id}
								{...{ ...product, imgIndex, imgLength, getModalData }}
							/>
						);
					})}
				</div>
			)}
			{modalData && <ProductModal {...{ ...modalData, setModalData }} />}
		</div>
	);
}

export default ProductItems;
