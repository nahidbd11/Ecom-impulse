import { useEffect, useState } from "react";

export default function useFetch(url, method = "GET", body, headers) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [result, setResult] = useState({ data: [{}] });
	const [finalHeaders, setFinalHeaders] = useState({
		Accept: "application/json",
		"Content-Type": "application/json",
	});

	useEffect(() => {
		setFinalHeaders({
			...headers,
		});
		const ac = new AbortController();
		function requestFetch() {
			let requestPayload = { method: method, signal: ac.signal };

			if (method === "POST") {
				requestPayload = {
					method: method,
					headers: finalHeaders,
					body: body != null ? JSON.stringify(body) : "",
					signal: ac.signal,
				};
			}

			fetch(url, requestPayload)
				.then((response) => response.json())
				.then((data) => {
					setResult(data);
					setLoading(false);
					setError(false);
				})
				.catch((error) => {
					console.log(error);
					setLoading(true);
					setError(true);
				});
		}
		requestFetch();
		return () => {
			ac.abort();
			setLoading(true);
			setResult({ data: [{}] });
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return {
		loading,
		error,
		result,
	};
}
