import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../ContextApi/AuthContext";

function UserRegistration() {
	const { signup, currentUser } = useAuth();

	const initialInput = {
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	};
	const [signupInput, setSignUpInput] = useState(initialInput);

	const navigate = useNavigate();
	//TODO:redirect to homepage after registration successfull
	useEffect(() => {
		if (currentUser?.user) navigate("/", { state: currentUser.message });
	}, [currentUser, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(
			signupInput.name,
			signupInput.email,
			signupInput.password,
			signupInput.password_confirmation
		);
	};
	return (
		<section className="shop login section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 col-12">
						<div className="login-form">
							<h2>Register</h2>
							<p>Please register in order to checkout more quickly</p>
							{/* Form */}
							<form
								className="form"
								method="post"
								action="http://localhost:8000/user/register"
								onSubmit={handleSubmit}
							>
								<input
									type="hidden"
									name="_token"
									defaultValue="Ypx99ENfcl0wZrq50USbCuCU21Q6ZzyAFkBH9UoC"
								/>{" "}
								<div className="row">
									<div className="col-12">
										<div className="form-group">
											<label>
												Your Name<span>*</span>
											</label>
											<input
												type="text"
												name="name"
												placeholder
												required="required"
												value={signupInput.name}
												onChange={(e) =>
													setSignUpInput({
														...signupInput,
														name: e.target.value,
													})
												}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label>
												Your Email<span>*</span>
											</label>
											<input
												type="text"
												name="email"
												placeholder
												required="required"
												value={signupInput.email}
												onChange={(e) =>
													setSignUpInput({
														...signupInput,
														email: e.target.value,
													})
												}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label>
												Your Password<span>*</span>
											</label>
											<input
												type="password"
												name="password"
												placeholder
												required="required"
												value={signupInput.password}
												onChange={(e) =>
													setSignUpInput({
														...signupInput,
														password: e.target.value,
													})
												}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label>
												Confirm Password<span>*</span>
											</label>
											<input
												type="password"
												name="password_confirmation"
												placeholder
												required="required"
												value={signupInput.password_confirmation}
												onChange={(e) =>
													setSignUpInput({
														...signupInput,
														password_confirmation: e.target.value,
													})
												}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group login-btn">
											<button className="btn" type="submit">
												Register
											</button>
											<a
												href="http://localhost:8000/user/login"
												className="btn"
											>
												Login
											</a>
											OR
											<a
												href="http://localhost:8000/login/facebook"
												className="btn btn-facebook"
											>
												<i className="ti-facebook" />
											</a>
											<a
												href="http://localhost:8000/login/github"
												className="btn btn-github"
											>
												<i className="ti-github" />
											</a>
											<a
												href="http://localhost:8000/login/google"
												className="btn btn-google"
											>
												<i className="ti-google" />
											</a>
										</div>
									</div>
								</div>
							</form>
							{/*/ End Form */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default UserRegistration;
