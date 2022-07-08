import React from "react";

function Dashboard() {
    return (
			<div id="wrapper">
				{/* Sidebar */}
				<ul
					className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
					id="accordionSidebar"
				>
					{/* Sidebar - Brand */}
					<a
						className="sidebar-brand d-flex align-items-center justify-content-center"
						href="http://127.0.0.1:8000/user"
					>
						<div className="sidebar-brand-icon rotate-n-15">
							<i className="fas fa-laugh-wink" />
						</div>
						<div className="sidebar-brand-text mx-3">User</div>
					</a>
					{/* Divider */}
					<hr className="sidebar-divider my-0" />
					{/* Nav Item - Dashboard */}
					<li className="nav-item active">
						<a className="nav-link" href="http://127.0.0.1:8000/user">
							<i className="fas fa-fw fa-tachometer-alt" />
							<span>Dashboard</span>
						</a>
					</li>
					{/* Divider */}
					<hr className="sidebar-divider" />
					{/* Heading */}
					<div className="sidebar-heading">Shop</div>
					{/*Orders */}
					<li className="nav-item">
						<a className="nav-link" href="http://127.0.0.1:8000/user/order">
							<i className="fas fa-hammer fa-chart-area" />
							<span>Orders</span>
						</a>
					</li>
					{/* Reviews */}
					<li className="nav-item">
						<a
							className="nav-link"
							href="http://127.0.0.1:8000/user/user-review"
						>
							<i className="fas fa-comments" />
							<span>Reviews</span>
						</a>
					</li>
					{/* Divider */}
					<hr className="sidebar-divider" />
					{/* Heading */}
					<div className="sidebar-heading">Posts</div>
					{/* Comments */}
					<li className="nav-item">
						<a
							className="nav-link"
							href="http://127.0.0.1:8000/user/user-post/comment"
						>
							<i className="fas fa-comments fa-chart-area" />
							<span>Comments</span>
						</a>
					</li>
					{/* Sidebar Toggler (Sidebar) */}
					<div className="text-center d-none d-md-inline">
						<button className="rounded-circle border-0" id="sidebarToggle" />
					</div>
				</ul>{" "}
				{/* End of Sidebar */}
				{/* Content Wrapper */}
				<div id="content-wrapper" className="d-flex flex-column">
					{/* Main Content */}
					<div id="content">
						{/* Topbar */}
						<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
							{/* Sidebar Toggle (Topbar) */}
							<button
								id="sidebarToggleTop"
								className="btn btn-link  rounded-circle mr-3"
							>
								<i className="fa fa-bars" />
							</button>
							{/* Topbar Search */}
							<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
								<div className="input-group">
									<input
										type="text"
										className="form-control bg-light border-0 small"
										placeholder="Search for..."
										aria-label="Search"
										aria-describedby="basic-addon2"
									/>
									<div className="input-group-append">
										<button className="btn btn-primary" type="button">
											<i className="fas fa-search fa-sm" />
										</button>
									</div>
								</div>
							</form>
							{/* Topbar Navbar */}
							<ul className="navbar-nav ml-auto">
								{/* Nav Item - Search Dropdown (Visible Only XS) */}
								<li className="nav-item dropdown no-arrow d-sm-none">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="searchDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<i className="fas fa-search fa-fw" />
									</a>
									{/* Dropdown - Messages */}
									<div
										className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
										aria-labelledby="searchDropdown"
									>
										<form className="form-inline mr-auto w-100 navbar-search">
											<div className="input-group">
												<input
													type="text"
													className="form-control bg-light border-0 small"
													placeholder="Search for..."
													aria-label="Search"
													aria-describedby="basic-addon2"
												/>
												<div className="input-group-append">
													<button className="btn btn-primary" type="button">
														<i className="fas fa-search fa-sm" />
													</button>
												</div>
											</div>
										</form>
									</div>
								</li>
								<li className="nav-item dropdown no-arrow mx-1">
									<a
										className="nav-link dropdown-toggle"
										href="http://127.0.0.1:8000"
										target="_blank"
										data-toggle="tooltip"
										data-placement="bottom"
										title="home"
										role="button"
									>
										<i className="fas fa-home fa-fw" />
									</a>
								</li>
								<div className="topbar-divider d-none d-sm-block" />
								{/* Nav Item - User Information */}
								<li className="nav-item dropdown no-arrow">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="userDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<span className="mr-2 d-none d-lg-inline text-gray-600 small">
											User
										</span>
										<img
											className="img-profile rounded-circle"
											src="/storage/photos/1/users/user2.jpg"
										/>
									</a>
									{/* Dropdown - User Information */}
									<div
										className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
										aria-labelledby="userDropdown"
									>
										<a
											className="dropdown-item"
											href="http://127.0.0.1:8000/user/profile"
										>
											<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
											Profile
										</a>
										<a
											className="dropdown-item"
											href="http://127.0.0.1:8000/user/change-password"
										>
											<i className="fas fa-key fa-sm fa-fw mr-2 text-gray-400" />
											Change Password
										</a>
										<div className="dropdown-divider" />
										<a
											className="dropdown-item"
											href="http://127.0.0.1:8000/logout"
											onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();"
										>
											<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />{" "}
											Logout
										</a>
										<form
											id="logout-form"
											action="http://127.0.0.1:8000/logout"
											method="POST"
											style={{ display: "none" }}
										>
											<input
												type="hidden"
												name="_token"
												defaultValue="URulrKB6NS7jOGeA60UfGTRbJUlQnk6wzS39k1jQ"
											/>{" "}
										</form>
									</div>
								</li>
							</ul>
						</nav>{" "}
						{/* End of Topbar */}
						{/* Begin Page Content */}
						<div className="container-fluid">
							{/* Page Heading */}
							<div className="d-sm-flex align-items-center justify-content-between mb-4">
								<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
							</div>
							{/* Content Row */}
							{/* Content Row */}
							<div className="row">
								{/* Order */}
								<div className="col-xl-12 col-lg-12">
									<table
										className="table table-bordered"
										id="order-dataTable"
										width="100%"
										cellSpacing={0}
									>
										<thead>
											<tr>
												<th>S.N.</th>
												<th>Order No.</th>
												<th>Name</th>
												<th>Email</th>
												<th>Quantity</th>
												<th>Total Amount</th>
												<th>Status</th>
												<th>Action</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>S.N.</th>
												<th>Order No.</th>
												<th>Name</th>
												<th>Email</th>
												<th>Quantity</th>
												<th>Total Amount</th>
												<th>Status</th>
												<th>Action</th>
											</tr>
										</tfoot>
										<tbody>
											<tr>
												<td>2</td>
												<td>ORD-YFF8BF0YBK</td>
												<td>Sandhya Rai</td>
												<td>user@gmail.com</td>
												<td>1</td>
												<td>$2,039.03</td>
												<td>
													<span className="badge badge-success">delivered</span>
												</td>
												<td>
													<a
														href="http://127.0.0.1:8000/user/order/show/2"
														className="btn btn-warning btn-sm float-left mr-1"
														style={{
															height: "30px",
															width: "30px",
															borderRadius: "50%",
														}}
														data-toggle="tooltip"
														title="view"
														data-placement="bottom"
													>
														<i className="fas fa-eye" />
													</a>
													<form
														method="POST"
														action="http://127.0.0.1:8000/user/order/delete/2"
													>
														<input
															type="hidden"
															name="_token"
															defaultValue="URulrKB6NS7jOGeA60UfGTRbJUlQnk6wzS39k1jQ"
														/>
														<input
															type="hidden"
															name="_method"
															defaultValue="delete"
														/>{" "}
														<button
															className="btn btn-danger btn-sm dltBtn"
															data-id={2}
															style={{
																height: "30px",
																width: "30px",
																borderRadius: "50%",
															}}
															data-toggle="tooltip"
															data-placement="bottom"
															title="Delete"
														>
															<i className="fas fa-trash-alt" />
														</button>
													</form>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						{/* /.container-fluid */}
					</div>
					{/* End of Main Content */}
					{/* Footer */}
					<footer className="sticky-footer bg-white">
						<div className="container my-auto">
							<div className="copyright text-center my-auto">
								<span>
									Copyright ©{" "}
									<a href="https://github.com/Prajwal100" target="_blank">
										PrajwalRai
									</a>{" "}
									2020
								</span>
							</div>
						</div>
					</footer>
					{/* End of Footer */}
				</div>
				{/* End of Content Wrapper */}
			</div>
		);
    
}

export default Dashboard;
