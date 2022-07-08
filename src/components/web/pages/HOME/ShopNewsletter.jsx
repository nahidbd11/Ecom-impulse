import React from "react";

function ShopNewsletter() {
	return (
		<section className="shop-newsletter section">
			<div className="container">
				<div className="inner-top">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 col-12">
							{/* Start Newsletter Inner */}
							<div className="inner">
								<h4>Newsletter</h4>
								<p>
									Subscribe to our newsletter and get <span>10%</span> off your
									first purchase
								</p>
								<form
									action="http://127.0.0.1:8000/subscribe"
									method="post"
									className="newsletter-inner"
								>
									<input
										type="hidden"
										name="_token"
										defaultValue="2DnAJfpe6Q5SsrdZbc3W1MYDJ0m4TnTmqG1gDdS9"
									/>{" "}
									<input
										name="email"
										placeholder="Your email address"
										required
										type="email"
									/>
									<button className="btn" type="submit">
										Subscribe
									</button>
								</form>
							</div>
							{/* End Newsletter Inner */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShopNewsletter;
