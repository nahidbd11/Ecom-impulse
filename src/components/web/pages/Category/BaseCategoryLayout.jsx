import React from "react";
import usePluginInit from "../../../../customHooks/Plugin_Init/usePluginInit";
import Sidebar from "../Products/Sidebar";
import Category from "./Category";

import TopFilterSection from "../Products/TopFilterSection";

function BaseProductLayout() {
	usePluginInit("range_slider");
	return (
		<form action="http://127.0.0.1:8000/filter" method="POST">
			<input
				type="hidden"
				name="_token"
				defaultValue="URulrKB6NS7jOGeA60UfGTRbJUlQnk6wzS39k1jQ"
			/>
			<section className="product-area shop-sidebar shop section">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-4 col-12">
							<Sidebar />
						</div>
						<div className="col-lg-9 col-md-8 col-12">
							<div className="row">
								<div className="col-12">
									{/* Shop Top */}
									<TopFilterSection />
									{/*/ End Shop Top */}
								</div>
							</div>
							{/* TODO: by default Allproduct comp will render or catery comp will render */}
							<Category />
						
						</div>
					</div>
				</div>
			</section>
		</form>
	);
}

export default BaseProductLayout;
