import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../ContextApi/AuthContext";
import Blogitems from "./Blogitems";
import BlogSidebar from "./BlogSidebar";

function Blog() {
	const { currentUser } = useAuth();

	return (
		<section className="blog-single shop-blog grid section">
			<div className="container">
				<div className="row">
					{/* TODO: show blog items with content */}
					<div className="col-lg-8 col-12">
						<Blogitems />
					</div>
					{/* TODO:Blog sidebar */}
					<div className="col-lg-4 col-12">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;
