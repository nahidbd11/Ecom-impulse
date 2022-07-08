import React from "react";
import useFetch from "../../../../customHooks/useFetch";

function ContactSidebar() {
	const api = `${process.env.REACT_APP_API_BASE_URL}/about-us`;
	const {
		loading,
		result: { data: contactData },
	} = useFetch(api);

	const { phone, email, address } = contactData[0];

	return (
		<div className="single-head">
			<div className="single-info">
				<i className="fa fa-phone" />
				<h4 className="title">Call us Now:</h4>
				<ul>
					<li> {!loading && phone} </li>
				</ul>
			</div>
			<div className="single-info">
				<i className="fa fa-envelope-open" />
				<h4 className="title">Email:</h4>
				<ul>
					<li>
						<a href="mailto:info@yourwebsite.com"> {!loading && email} </a>
					</li>
				</ul>
			</div>
			<div className="single-info">
				<i className="fa fa-location-arrow" />
				<h4 className="title">Our Address:</h4>
				<ul>
					<li> {!loading && address} </li>
				</ul>
			</div>
		</div>
	);
}

export default ContactSidebar;
