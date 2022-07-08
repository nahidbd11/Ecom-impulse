import React from "react";

function BlogSidebar() {
	return (
		<div className="main-sidebar">
			{/* Single Widget */}
			<div className="single-widget search">
				<form
					className="form"
					method="GET"
					action="http://127.0.0.1:8000/blog/search"
				>
					<input type="text" placeholder="Search Here..." name="search" />
					<button className="button" type="sumbit">
						<i className="fa fa-search" />
					</button>
				</form>
			</div>
			{/*/ End Single Widget */}
			{/* Single Widget */}
			<div className="single-widget category">
				<h3 className="title">Blog Categories</h3>
				<ul className="categor-list">
					<form action="http://127.0.0.1:8000/blog/filter" method="POST">
						<input
							type="hidden"
							name="_token"
							defaultValue="2DnAJfpe6Q5SsrdZbc3W1MYDJ0m4TnTmqG1gDdS9"
						/>
						<li>
							<a href="http://127.0.0.1:8000/blog-cat/post-category">
								Post Category{" "}
							</a>
						</li>
						<li>
							<a href="http://127.0.0.1:8000/blog-cat/enjoy">enjoy </a>
						</li>
						<li>
							<a href="http://127.0.0.1:8000/blog-cat/cloths">Cloths </a>
						</li>
						<li>
							<a href="http://127.0.0.1:8000/blog-cat/richard">Electronics </a>
						</li>
						<li>
							<a href="http://127.0.0.1:8000/blog-cat/contrary">Travel </a>
						</li>
					</form>
				</ul>
			</div>
			{/*/ End Single Widget */}
			{/* Single Widget */}
			<div className="single-widget recent-post">
				<h3 className="title">Recent post</h3>
				{/* Single Post */}
				<div className="single-post">
					<div className="image">
						<img alt="../../../../images/Blog/blog3.jpg" />
					</div>
					<div className="content">
						<h5>
							<a href="#">Lorem Ipsum is simply</a>
						</h5>
						<ul className="comment">
							<li>
								<i className="fa fa-calendar" aria-hidden="true" />
								18 Aug, 20
							</li>
							<li>
								<i className="fa fa-user" aria-hidden="true" />
								Prajwal Rai
							</li>
						</ul>
					</div>
				</div>
				{/* End Single Post */}
				{/* Single Post */}
				<div className="single-post">
					<div className="image">
						<img alt="../../../../images/Blog/blog2.jpg" />
					</div>
					<div className="content">
						<h5>
							<a href="#">The standard Lorem Ipsum passage,</a>
						</h5>
						<ul className="comment">
							<li>
								<i className="fa fa-calendar" aria-hidden="true" />
								15 Aug, 20
							</li>
							<li>
								<i className="fa fa-user" aria-hidden="true" />
								Prajwal Rai
							</li>
						</ul>
					</div>
				</div>
				{/* End Single Post */}
				{/* Single Post */}
				<div className="single-post">
					<div className="image">
						<img alt="../../../../images/Blog/blog3.jpg" />
					</div>
					<div className="content">
						<h5>
							<a href="#">
								The standard Lorem Ipsum passage, used since the 1500s
							</a>
						</h5>
						<ul className="comment">
							<li>
								<i className="fa fa-calendar" aria-hidden="true" />
								14 Aug, 20
							</li>
							<li>
								<i className="fa fa-user" aria-hidden="true" />
								Prajwal Rai
							</li>
						</ul>
					</div>
				</div>
				{/* End Single Post */}
			</div>
			{/*/ End Single Widget */}
			{/* Single Widget */}
			{/*/ End Single Widget */}
			{/* Single Widget */}
			<div className="single-widget side-tags">
				<h3 className="title">Tags</h3>
				<ul className="tag">
					<form action="http://127.0.0.1:8000/blog/filter" method="POST">
						<input
							type="hidden"
							name="_token"
							defaultValue="2DnAJfpe6Q5SsrdZbc3W1MYDJ0m4TnTmqG1gDdS9"
						/>{" "}
						<li></li>
						<li>
							<a href="http://127.0.0.1:8000/blog-tag/Tag">Tag </a>
						</li>
						<li></li>
						<li>
							<a href="http://127.0.0.1:8000/blog-tag/Visit%20nepal%202020">
								Visit nepal 2020{" "}
							</a>
						</li>
						<li></li>
						<li>
							<a href="http://127.0.0.1:8000/blog-tag/2020">2020 </a>
						</li>
						<li></li>
						<li>
							<a href="http://127.0.0.1:8000/blog-tag/Enjoy">Enjoy </a>
						</li>
					</form>
				</ul>
			</div>
			{/*/ End Single Widget */}
			{/* Single Widget */}
			<div className="single-widget newsletter">
				<h3 className="title">Newslatter</h3>
				<div className="letter-inner">
					<h4>
						Subscribe &amp; get news <br /> latest updates.
					</h4>
					<form
						method="POST"
						action="http://127.0.0.1:8000/subscribe"
						className="form-inner"
					>
						<input
							type="hidden"
							name="_token"
							defaultValue="2DnAJfpe6Q5SsrdZbc3W1MYDJ0m4TnTmqG1gDdS9"
						/>{" "}
						<input type="email" name="email" placeholder="Enter your email" />
						<button type="submit" className="btn " style={{ width: "100%" }}>
							Submit
						</button>
					</form>
				</div>
			</div>
			{/*/ End Single Widget */}
		</div>
	);
}

export default BlogSidebar;
