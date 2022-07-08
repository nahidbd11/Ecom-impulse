import React from "react";
import Midbar from "./Midbar/Midbar";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

function Header() {
	return (
		<header className="header shop">
			{/* Topbar */}
			<Topbar />
			{/* End Topbar */}
			<Midbar />
			{/* Header Inner */}
			<div className="header-inner">
				<div className="container">
					<div className="cat-nav-head">
						<div className="row">
							<div className="col-lg-12 col-12">
								<div className="menu-area">
									{/* Main Menu */}
									<Navbar />
									{/*/ End Main Menu */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*/ End Header Inner */}
		</header>
	);
}

export default Header;
