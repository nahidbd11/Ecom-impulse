import React from "react";

function DescriptionReview({ description }) {
	return (
		<div className="product-info">
			<div className="nav-main">
				{/* Tab Nav */}
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active"
							data-toggle="tab"
							href="#description"
							role="tab"
						>
							Description
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							data-toggle="tab"
							href="#reviews"
							role="tab"
						>
							Reviews
						</a>
					</li>
				</ul>
				{/*/ End Tab Nav */}
			</div>
			<div className="tab-content" id="myTabContent">
				{/* Description Tab */}
				<div
					className="tab-pane fade show active"
					id="description"
					role="tabpanel"
				>
					<div className="tab-single">
						<div className="row">
							<div className="col-12">
								<div className="single-des">
									<p dangerouslySetInnerHTML={{ __html: description }} />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*/ End Description Tab */}
				{/* Reviews Tab */}
				<div className="tab-pane fade" id="reviews" role="tabpanel">
					<div className="tab-single review-panel">
						<div className="row">
							<div className="col-12">
								{/* Review */}
								<div className="comment-review">
									<div className="add-review">
										<h5>Add A Review</h5>
										<p>
											Your email address will not be published. Required fields
											are marked
										</p>
									</div>
									<h4>
										Your Rating <span className="text-danger">*</span>
									</h4>
									<div className="review-inner">
										{/* Form */}
										<form
											className="form"
											method="post"
											action="http://127.0.0.1:8000/product/melange-casual-black/review"
										>
											<input
												type="hidden"
												name="_token"
												defaultValue="URulrKB6NS7jOGeA60UfGTRbJUlQnk6wzS39k1jQ"
											/>{" "}
											<div className="row">
												<div className="col-lg-12 col-12">
													<div className="rating_box">
														<div className="star-rating">
															<div className="star-rating__wrap">
																<input
																	className="star-rating__input"
																	id="star-rating-5"
																	type="radio"
																	name="rate"
																	defaultValue={5}
																/>
																<label
																	className="star-rating__ico fa fa-star-o"
																	htmlFor="star-rating-5"
																	title="5 out of 5 stars"
																/>
																<input
																	className="star-rating__input"
																	id="star-rating-4"
																	type="radio"
																	name="rate"
																	defaultValue={4}
																/>
																<label
																	className="star-rating__ico fa fa-star-o"
																	htmlFor="star-rating-4"
																	title="4 out of 5 stars"
																/>
																<input
																	className="star-rating__input"
																	id="star-rating-3"
																	type="radio"
																	name="rate"
																	defaultValue={3}
																/>
																<label
																	className="star-rating__ico fa fa-star-o"
																	htmlFor="star-rating-3"
																	title="3 out of 5 stars"
																/>
																<input
																	className="star-rating__input"
																	id="star-rating-2"
																	type="radio"
																	name="rate"
																	defaultValue={2}
																/>
																<label
																	className="star-rating__ico fa fa-star-o"
																	htmlFor="star-rating-2"
																	title="2 out of 5 stars"
																/>
																<input
																	className="star-rating__input"
																	id="star-rating-1"
																	type="radio"
																	name="rate"
																	defaultValue={1}
																/>
																<label
																	className="star-rating__ico fa fa-star-o"
																	htmlFor="star-rating-1"
																	title="1 out of 5 stars"
																/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-12 col-12">
													<div className="form-group">
														<label>Write a review</label>
														<textarea
															name="review"
															rows={6}
															placeholder
															defaultValue={""}
														/>
													</div>
												</div>
												<div className="col-lg-12 col-12">
													<div className="form-group button5">
														<button type="submit" className="btn">
															Submit
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className="ratting-main">
									<div className="avg-ratting">
										<h4>
											0 <span>(Overall)</span>
										</h4>
										<span>Based on 0 Comments</span>
									</div>
								</div>
								{/*/ End Review */}
							</div>
						</div>
					</div>
				</div>
				{/*/ End Reviews Tab */}
			</div>
		</div>
	);
}

export default DescriptionReview;
