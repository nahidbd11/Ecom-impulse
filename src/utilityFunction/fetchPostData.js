function fetchPostData(url, body) {
	return fetch(url, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	}).then((res) => res.json());
}

export default fetchPostData;
