import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import fetchPostData from "../../../../utilityFunction/fetchPostData";
import { getAuthUser } from "../../../../utilityFunction/getLocalStorageUser";
function ContactForm() {
	let { user } = getAuthUser();

	const toastOptions = {
		position: "bottom-left",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};
	const initialInputState = {
		name: "",
		email: "",
		message: "",
		subject: "",
		phone: "",
	};
	const [inputValue, setValue] = useState(initialInputState);
	const [resData, setResData] = useState();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (user) {
		  	fetchPostData(
				"http://127.0.0.1:8000/api/contact/message",
				inputValue
			).then((data) => {
				if (data.status === "SUCCESS") {
					toast.success(data.message);
					setValue(initialInputState);
				} else {
					toast.error(data.message);
				}
				setResData(data);
			});
		} else {
			toast.warning("please login first", toastOptions);
		}
	};

	return (
		<div className="form-main">
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<div className="title">
				<h4>Get in touch</h4>
				<h3>
					Write us a message{" "}
					<span style={{ fontSize: "12px" }} className="text-danger">
						[You need to login first]
					</span>
				</h3>
			</div>

			<form
				className="form-contact form contact_form"
				method="post"
				action=""
				id="contactForm"
				noValidate="novalidate"
				onSubmit={handleSubmit}
			>
				<input
					type="hidden"
					name="_token"
					defaultValue="2DnAJfpe6Q5SsrdZbc3W1MYDJ0m4TnTmqG1gDdS9"
				/>{" "}
				<div className="row">
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label>
								Your Name<span>*</span>
							</label>
							<input
								name="name"
								id="name"
								type="text"
								placeholder="Enter your name"
								value={inputValue.name}
								onChange={(e) =>
									setValue({ ...inputValue, name: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label>
								Your Subjects<span>*</span>
							</label>
							<input
								name="subject"
								type="text"
								id="subject"
								placeholder="Enter Subject"
								value={inputValue.subject}
								onChange={(e) =>
									setValue({ ...inputValue, subject: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label>
								Your Email<span>*</span>
							</label>
							<input
								name="email"
								type="email"
								id="email"
								placeholder="Enter email address"
								value={inputValue.email}
								onChange={(e) =>
									setValue({ ...inputValue, email: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label>
								Your Phone<span>*</span>
							</label>
							<input
								id="phone"
								name="phone"
								type="number"
								placeholder="Enter your phone"
								value={inputValue.phone}
								onChange={(e) =>
									setValue({ ...inputValue, phone: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="col-12">
						<div className="form-group message">
							<label>
								your message<span>*</span>
							</label>
							<textarea
								name="message"
								id="message"
								cols={30}
								rows={9}
								placeholder="Enter Message"
								value={inputValue.message}
								onChange={(e) =>
									setValue({ ...inputValue, message: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="col-12">
						<div className="form-group button">
							<button
								type="submit"
								className="btn "
								// data-toggle="modal"
								// data-target="#error"
							>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
