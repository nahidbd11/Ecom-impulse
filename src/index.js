import React from "react";
import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./css/index.css";

import App from "./App";

import reportWebVitals from "./reportWebVitals";
import ContextWrapper from "./ContextApi/Context";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./ContextApi/AuthContext";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ContextWrapper>
					<App />
				</ContextWrapper>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
