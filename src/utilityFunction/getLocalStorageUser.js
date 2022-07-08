export function getAuthUser() {
	const authUser =
		localStorage.getItem("authUser") !== null &&
		JSON.parse(localStorage.getItem("authUser"));
	return authUser;
}
