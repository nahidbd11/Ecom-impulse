export const queryString = (qObj) => {
	let str = [];
	for (let p in qObj) {
		if (qObj.hasOwnProperty(p) && qObj[p] !== null) {
			let encodedQueryParam =
				encodeURIComponent(p) + "=" + encodeURIComponent(qObj[p]);
			str.push(encodedQueryParam);
		}
	}
	return str.join("&");
};
