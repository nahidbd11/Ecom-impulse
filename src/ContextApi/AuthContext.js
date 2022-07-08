import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setCurrentUser();

		return <></>;
	}, []);

	// signup function
	async function signup(name, email, password, password_confirmation) {
		setLoading(true);
		const apiEndPoint = "http://127.0.0.1:8000/api/auth/register";
		const body = {
			name: name,
			email: email,
			password: password,
			password_confirmation: password_confirmation,
		};

		const { data, statusCode } = await requestFetch(
			apiEndPoint,
			"POST",
			body,
			null
		);

		if (statusCode === 201) {
			// const user = await data.user;
			// setCurrentUser({
			// 	...user,
			// });

			const { user, status, message } = data;
			localStorage.setItem("authUser", JSON.stringify(data));
			setCurrentUser({
				user,
				status,
				message,
				statusCode,
			});
			setLoading(false);
		} else {
			console.log(data);
			//TODO:redirect user to register page if registration is unsuccessful
			navigate("/user/register", { state: data.message });
		}

		return {
			data,
			statusCode,
		};
	}

	// login function
	async function login(email, password) {
		setLoading(true);
		const apiEndPoint = "http://127.0.0.1:8000/api/auth/login";

		const body = {
			email: email,
			password: password,
		};

		const { data, statusCode } = await requestFetch(
			apiEndPoint,
			"POST",
			body,
			null
		);
		// console.log(data, statusCode);
		if (statusCode === 200) {
			const { user, access_token, status, statusCode } = data;
			localStorage.setItem("authUser", JSON.stringify(data));
			setCurrentUser({
				user,
				access_token,
				status,
				statusCode,
			});
			setLoading(false);
		}

		return {
			data,
			statusCode,
		};
	}

	// logout function
	function logout() {
		localStorage.removeItem("authUser");
		setCurrentUser();
		navigate("/", { replace: true });
	}

	async function requestFetch(url, method, body, headers) {
		try {
			setError(false);
			const response = await fetch(url, {
				method: method || "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});
			const data = await response.json();
			const statusCode = await response.status;
			return {
				data,
				statusCode,
			};
		} catch (err) {
			setError(err);
		}
	}

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
