import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import usePluginInit from "../../../../../customHooks/Plugin_Init/usePluginInit";
import useFetch from "../../../../../customHooks/useFetch";
import { apiBaseUrl } from "../../../../../utilityFunction/apiBaseurl";
import { queryString } from "../../../../../utilityFunction/makeQueryString";

import Sidebar from "../Sidebar";
import TopFilterSection from "../TopFilterSection";

function BaseProductLayout(props) {
	usePluginInit("range_slider", "nice_select", "quickView_slider");

	const [searchParams, setSearchParams] = useSearchParams();
	const [searchTerm, setSearchTerm] = useState({
		price: null,
		show: null,
		sortBy: null,
	});
	
	const handleSearchParam = (queryParam) => {
		setSearchTerm({ ...searchTerm, ...queryParam });
	};

	useEffect(() => {
		setSearchParams(queryString(searchTerm));
	}, [searchTerm]);
	return (
		<form
			action="http://127.0.0.1:8000/filter"
			method="POST"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<input
				type="hidden"
				name="_token"
				defaultValue="URulrKB6NS7jOGeA60UfGTRbJUlQnk6wzS39k1jQ"
			/>
			<section className="product-area shop-sidebar shop section">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-4 col-12">
							<Sidebar {...{ handleSearchParam }} />
						</div>
						<div className="col-lg-9 col-md-8 col-12">
							<div className="row">
								<div className="col-12">
									{/* Shop Top */}
									<TopFilterSection {...{ handleSearchParam }} />
									{/*/ End Shop Top */}
								</div>
							</div>
							{/* TODO: by default Allproduct comp will render or catery comp will render */}
							{/* <AllProduct /> */}
							{props.children}

							{/* TODO: modal for each single product  */}
							{/* <ProductModal /> */}
							{/* <div className="row">
								<div className="col-md-12 justify-content-center d-flex">
									<nav
										role="navigation"
										aria-label="Pagination Navigation"
										className="flex items-center justify-between"
									>
										<div className="flex justify-between flex-1 sm:hidden">
											<span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md">
												« Previous
											</span>
											<a
												href="http://127.0.0.1:8000/product-grids?page=2"
												className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
											>
												Next »
											</a>
										</div>
										<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
											<div>
												<p className="text-sm text-gray-700 leading-5">
													Showing
													<span className="font-medium">1</span>
													to
													<span className="font-medium">9</span>
													of
													<span className="font-medium">10</span>
													results
												</p>
											</div>
											<div>
												<span className="relative z-0 inline-flex shadow-sm rounded-md">
													<span
														aria-disabled="true"
														aria-label="&laquo; Previous"
													>
														<span
															className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-l-md leading-5"
															aria-hidden="true"
														>
															<svg
																className="w-5 h-5"
																fill="currentColor"
																viewBox="0 0 20 20"
															>
																<path
																	fillRule="evenodd"
																	d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
																	clipRule="evenodd"
																/>
															</svg>
														</span>
													</span>
													<span aria-current="page">
														<span className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5">
															1
														</span>
													</span>
													<a
														href="http://127.0.0.1:8000/product-grids?page=2"
														className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
														aria-label="Go to page 2"
													>
														2
													</a>
													<a
														href="http://127.0.0.1:8000/product-grids?page=2"
														rel="next"
														className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
														aria-label="Next &raquo;"
													>
														<svg
															className="w-5 h-5"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
																clipRule="evenodd"
															/>
														</svg>
													</a>
												</span>
											</div>
										</div>
									</nav>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</form>
	);
}

export default BaseProductLayout;
