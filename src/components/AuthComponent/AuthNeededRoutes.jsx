import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../ContextApi/AuthContext";
import { getAuthUser } from "../../utilityFunction/getLocalStorageUser";

function AuthNeededRoutes() {
	const location = useLocation();
	let { user } = getAuthUser();
	console.log(user);
	return user ? (
		<Outlet />
	) : (
		<Navigate to="/user/login" state={{ from: location }} replace />
	);
}

export default AuthNeededRoutes;
