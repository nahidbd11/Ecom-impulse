import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../ContextApi/AuthContext";

function UserLogin() {
	const { login } = useAuth();
	const [email, setEmail] = useState();
	const [pwd, setPwd] = useState();
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, pwd);
		navigate(from, { replace: true });
	};
	return (
		<section className="shop login section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 col-12">
						<div className="login-form">
							<h2>Login</h2>
							<p>Please register in order to checkout more quickly</p>
							{/* Form */}
							<form
								className="form"
								method="post"
								action="http://127.0.0.1:8000/user/login"
								onSubmit={handleSubmit}
							>
								<input
									type="hidden"
									name="_token"
									defaultValue="2lD7CHy8HPLDO9zFyyikHGek0n1ywpdsKuajDID3"
								/>{" "}
								<div className="row">
									<div className="col-12">
										<div className="form-group">
											<label>
												Your Email<span>*</span>
											</label>
											<input
												type="email"
												name="email"
												placeholder
												required="required"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
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
												value={pwd}
												onChange={(e) => setPwd(e.target.value)}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group login-btn">
											<button className="btn" type="submit">
												Login
											</button>
											<a
												href="http://127.0.0.1:8000/user/register"
												className="btn"
											>
												Register
											</a>
											OR
											<a
												href="http://127.0.0.1:8000/login/facebook"
												className="btn btn-facebook"
											>
												<i className="ti-facebook" />
											</a>
											<a
												href="http://127.0.0.1:8000/login/github"
												className="btn btn-github"
											>
												<i className="ti-github" />
											</a>
											<a
												href="http://127.0.0.1:8000/login/google"
												className="btn btn-google"
											>
												<i className="ti-google" />
											</a>
										</div>
										<div className="checkbox">
											<label className="checkbox-inline" htmlFor={2}>
												<input name="news" id={2} type="checkbox" />
												Remember me
											</label>
										</div>
										<a
											className="lost-pass"
											href="http://127.0.0.1:8000/password-reset"
										>
											Lost your password?
										</a>
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

export default UserLogin;
