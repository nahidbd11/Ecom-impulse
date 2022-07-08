import React from "react";
import useFetch from "../../../../customHooks/useFetch";
import SingleBlog from "./SingleBlog";

function ShopBlog() {
	const { result: blogs, loading } = useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/posts`
	);
	return (
		<section className="shop-blog section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<h2>From Our Blog</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{!loading &&
						blogs.data.map((blog) => <SingleBlog {...blog} key={blog.id} />)}
				</div>
			</div>
		</section>
	);
}

export default ShopBlog;
