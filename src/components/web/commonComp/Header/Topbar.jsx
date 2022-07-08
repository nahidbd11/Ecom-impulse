import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../ContextApi/AuthContext";

import useFetch from "../../../../customHooks/useFetch";

function Topbar() {
	let { user } =
		localStorage.getItem("authUser") !== null &&
		JSON.parse(localStorage.getItem("authUser"));
	const { logout } = useAuth();
	const {
		result: { data: setting },
		loading,
	} = useFetch(`${process.env.REACT_APP_API_BASE_URL}/settings`);

	return (
		<div className="topbar">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-12">
						{/* Top Left */}
						<div className="top-left">
							<ul className="list-main">
								<li>
									<i className="ti-headphone-alt" />
									{setting[0].phone}
								</li>
								<li>
									<i className="ti-email" />
									{setting[0].email}
								</li>
							</ul>
						</div>
						{/*/ End Top Left */}
					</div>
					<div className="col-lg-6 col-md-12 col-12">
						{/* Top Right */}
						<div className="right-content">
							<ul className="list-main">
								<li>
									<i className="ti-location-pin" />{" "}
									<a href="http://127.0.0.1:8000/product/track">Track Order</a>
								</li>
								{!user && (
									<li>
										<i className="ti-power-off" />
										<Link to="/user/login">Login /</Link>{" "}
										<Link to="/user/register">Register</Link>
									</li>
								)}

								{user && (
									<li>
										<i className="ti-user"></i>
										<a href="http://localhost:8000/user" target="_blank">
											Dashboard
										</a>
									</li>
								)}

								{user && (
									<li>
										<i className="ti-power-off"></i>{" "}
										<a style={{ cursor: "pointer" }} onClick={() => logout()}>
											Logout
										</a>
									</li>
								)}
							</ul>
						</div>
						{/* End Top Right */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
