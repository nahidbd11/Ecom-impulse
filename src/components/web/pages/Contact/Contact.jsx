import React from "react";
import { useParams } from "react-router-dom";
import ShopNewsletter from "../HOME/ShopNewsletter";
import ContactForm from "./ContactForm";
import ContactSidebar from "./ContactSidebar";
import ErrorModal from "./ErrorModal";
import GMap from "./GMap";
import SuccessModal from "./SuccessModal";

function Contact() {
	return (
		<div>
			{/* TODO:  user contact form and company contact sidebar */}
			<section id="contact-us" className="contact-us section">
				<div className="container">
					<div className="contact-head">
						<div className="row">
							{/* TODO:contact form */}
							<div className="col-lg-8 col-12">
								<ContactForm />
							</div>
							{/* TODO: contact details of the company */}
							<div className="col-lg-4 col-12">
								<ContactSidebar />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* TODO:google map section */}
			<GMap />
			{/* TODO: Newsletter */}
			<ShopNewsletter />

			{/* TODO: success and warning modal after submitting user form data */}
			<SuccessModal />
			<ErrorModal />
		</div>
	);
}

export default Contact;
