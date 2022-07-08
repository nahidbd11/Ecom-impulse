import React, { useEffect } from "react";
import Cart from "./Cart";
import Searchbar from "./Searchbar";
import SmallscreenSearch from "./SmallscreenSearch";

function Midbar() {
	return (
		<div className="middle-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-12">
						{/* Logo */}
						<div className="logo">
							<a href="http://127.0.0.1:8000">
								<img
									src={require("../../../../../assets/logo.png")}
									alt="logo"
								/>
							</a>
						</div>
						{/*/ End Logo */}
						{/* Search Form  on mobile device*/}
						<SmallscreenSearch />
						{/*/ End Search Form */}
						{/* TODO:trigger main navigation menu as slicknav for mobile device */}
						<div className="mobile-nav"></div>
					</div>
					<div className="col-lg-8 col-md-7 col-12">
						{/* TODO:Search form with category select on medium device  */}
						<Searchbar />
					</div>
					<div className="col-lg-2 col-md-3 col-12">
						{/* TODO:display Cart info section */}
						<Cart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Midbar;
