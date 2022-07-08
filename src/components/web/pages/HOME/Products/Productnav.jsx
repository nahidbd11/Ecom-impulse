/* eslint-disable no-undef */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../../ContextApi/Context";
import usePluginInit from "../../../../../customHooks/Plugin_Init/usePluginInit";
import useFetch from "../../../../../customHooks/useFetch";

function Productnav() {
	const { result: navlist, loading } = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/trendy-items/categories`
	);

	// useEffect(() => {
	// 	if (!loading) {
	// 		setTimeout(() => {

	// 			document.getElementById("allproduct").click();
	// 		},10000)
	// 	}
	// }, [loading]);
	const { setTabClick } = useContext(AppContext);
	usePluginInit("isotope", "nice_select");
	return (
		<div className="nav-main">
			{/* Tab Nav */}
			<ul className="nav nav-tabs filter-tope-group" id="myTab" role="tablist">
				<button className="btn" data-filter="*" id="allproduct">
					All Products
				</button>

				{!loading &&
					navlist.data.map(({ title, id }) => (
						<button
							key={id}
							className="btn border"
							style={{ background: "none", color: "black" }}
							data-filter={`.${id}`}
							onClick={() => setTabClick(true)}
						>
							{title}
						</button>
					))}
			</ul>
			{/*/ End Tab Nav */}
		</div>
	);
}

export default Productnav;
