import React from "react";
import LatestItems from "../../../HOME/Products/LatestItems";

function ProductDescription({
	id,
	photo,
	title,
	rate,
	price,
	after_discount,
	summary,
	stock,
	size,
	cat_id,
	child_cat,
	rate_count,
}) {
	return (
		<div className="product-des">
			{/* Description */}
			<div className="short">
				<h4>{title}</h4>
				<div className="rating-main">
					<ul className="rating">
						{[...Array(rate)].map((x, i) => (
							<li>
								<i className="fa fa-star-o" />
							</li>
						))}
					</ul>
					<a href="#" className="total-review">
						({rate_count}) Review
					</a>
				</div>
				<p className="price">
					<span className="discount">${after_discount}</span>
					<s>${price}</s>
				</p>
				<p className="description" />
				<p>
					<span
						style={{
							fontFamily: '"Open Sans", Arial, sans-serif',
							fontSize: "14px",
							textAlign: "justify",
						}}
					>
						<p dangerouslySetInnerHTML={{ __html: summary }} />
					</span>
					<br />
				</p>
				<p />
			</div>
			{/*/ End Description */}
			{/* Color */}
			{/*/ End Color */}
			{/* Size */}
			<div className="size mt-4">
				<h4>Size</h4>
				<ul>
					{size &&
						size.split(",").map((s, i) => (
							<li key={i}>
								<a href="#" className="one">
									{s}
								</a>
							</li>
						))}
				</ul>
			</div>
			{/*/ End Size */}
			{/* Product Buy */}
			<div className="product-buy">
				<form action="http://127.0.0.1:8000/add-to-cart" method="POST">
					<input
						type="hidden"
						name="_token"
						defaultValue="URulrKB6NS7jOGeA60UfGTRbJUlQnk6wzS39k1jQ"
					/>
					<div className="quantity">
						<h6>Quantity :</h6>
						{/* Input Order */}
						<div className="input-group">
							<div className="button minus">
								<button
									type="button"
									className="btn btn-primary btn-number"
									disabled="disabled"
									data-type="minus"
									data-field="quant[1]"
								>
									<i className="ti-minus" />
								</button>
							</div>
							<input
								type="hidden"
								name="slug"
								defaultValue="melange-casual-black"
							/>
							<input
								type="text"
								name="quant[1]"
								className="input-number"
								data-min={1}
								data-max={1000}
								defaultValue={1}
								id="quantity"
							/>
							<div className="button plus">
								<button
									type="button"
									className="btn btn-primary btn-number"
									data-type="plus"
									data-field="quant[1]"
								>
									<i className="ti-plus" />
								</button>
							</div>
						</div>
						{/*/ End Input Order */}
					</div>
					<div className="add-to-cart mt-4">
						<button type="submit" className="btn">
							Add to cart
						</button>
						<a
							href="http://127.0.0.1:8000/wishlist/melange-casual-black"
							className="btn min"
						>
							<i className="ti-heart" />
						</a>
					</div>
				</form>
				<p className="cat">
					Category :
					<a href="http://127.0.0.1:8000/product-cat/mens-fashion">
						{cat_id.map((item) => item.title)}
					</a>
				</p>
				<p className="cat mt-1">
					Sub Category :
					<a href="http://127.0.0.1:8000/product-sub-cat/mens-fashion/t-shirts">
						{child_cat.map((item) => item.title)}
					</a>
				</p>
				<p className="availability">
					Stock : <span className="badge badge-success">{stock}</span>
				</p>
			</div>
			{/*/ End Product Buy */}
		</div>
	);
}

export default ProductDescription;
