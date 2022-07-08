import React from "react";
import { getPhoto } from "../../../../utilityFunction/getPhoto";

function SingleBlog({ title, photo, created_at }) {
	const date = new Date(created_at);
	return (
		<div className="col-lg-4 col-md-6 col-12">
			{/* Start Single Blog  */}
			<div className="shop-single-blog">
				<img src={getPhoto(photo)} alt="/storage/photos/1/Blog/blog3.jpg" />
				<div className="content">
					<p className="date">{date.toDateString()}</p>
					<a
						href="http://127.0.0.1:8000/blog-detail/lorem-ipsum-is-simply"
						className="title"
					>
						{title}
					</a>
					<a
						href="http://127.0.0.1:8000/blog-detail/lorem-ipsum-is-simply"
						className="more-btn"
					>
						Continue Reading
					</a>
				</div>
			</div>
			{/* End Single Blog  */}
		</div>
	);
}

export default SingleBlog;
