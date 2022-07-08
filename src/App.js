import Footer from "./components/web/commonComp/Footer/Footer";
import Header from "./components/web/commonComp/Header/Header";
import Home from "./components/web/pages/HOME/Home";
import Breadcrumb from "./components/web/commonComp/Breadcrumb/Breadcrumb";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/web/pages/Blog/Blog";
import Contact from "./components/web/pages/Contact/Contact";
import About from "./components/web/pages/ABOUT/About";

import Dashboard from "./components/web/UserDashboard/Dashboard";
import ProductDetails from "./components/web/pages/Products/ProductDetails/ProductDetails";
import UserLogin from "./components/web/UserDashboard/UserLogin";
import usePluginInit from "./customHooks/Plugin_Init/usePluginInit";

import BaseCategoryLayout from "./components/web/pages/Category/BaseCategoryLayout";
import BaseProductLayout from "./components/web/pages/Products/ProductList/BaseProductLayout";
import WishList from "./components/web/UserDashboard/WishList";
import { useContext } from "react";
import { AppContext } from "./ContextApi/Context";
import UserRegistration from "./components/web/UserDashboard/UserRegistration";
import { AuthProvider, useAuth } from "./ContextApi/AuthContext";
import AuthNeededRoutes from "./components/AuthComponent/AuthNeededRoutes";
import AllProduct from "./components/web/pages/Products/ProductList/AllProduct";
import Category from "./components/web/pages/Category/Category";

function App() {
	usePluginInit("isotope", "nice_select");

	return (
		<div className="App">
			<Header />
			<Breadcrumb />
			{/* TODO:Routing for each component */}
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="blog" element={<Blog />} /> */}
				{/* <Route element={<AuthNeededRoutes />}>
					<Route path="contact" element={<Contact />} />
				</Route> */}
				<Route path="contact" element={<Contact />} />
				<Route
					path="products"
					element={
						<BaseProductLayout>
							<AllProduct />
						</BaseProductLayout>
					}
				/>
				<Route
					path="category/:cat"
					element={
						<BaseProductLayout>
							<Category />
						</BaseProductLayout>
					}
				/>
				<Route
					path="category/:cat/:sub_cat"
					element={
						<BaseProductLayout>
							<Category />
						</BaseProductLayout>
					}
				/>
				<Route path="product-details/:slug" element={<ProductDetails />} />
				<Route path="user" element={<Dashboard />} />
				<Route path="about" element={<About />} />
				<Route path="wishlist" element={<WishList />} />
				<Route path="user/login" element={<UserLogin />} />
				<Route path="user/register" element={<UserRegistration />} />
				<Route path="*" element={<div>not found</div>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
