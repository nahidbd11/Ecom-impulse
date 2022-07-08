import {useEffect, useState} from "react";

export default function useSynchronousFetch(url, method = 'GET', body, headers) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);
    const [finalHeaders, setFinalHeaders] = useState({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });


    useEffect(() => {

        setFinalHeaders({
            ...headers,
        });


        function requestFetch() {

            setLoading(true);
            setError(false);

            const requestPayload = {method: method}

            if (method === 'POST') {
                const requestPayload = {
                    method: method,
                    headers: (finalHeaders),
                    body: body != null ? JSON.stringify(body) : '',
                }

            }

            fetch(url, requestPayload)
                .then(response => response.json())
                .then(data => {
                    setLoading(false);
                    setError(false);
                    setResult(data);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                    setError(true);
                });

        }

        requestFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps


        return <></>;
    }, []);

    return {
        loading,
        error,
        result,
    };
}
