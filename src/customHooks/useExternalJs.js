import { useEffect } from "react";

function loadError(onError) {
	console.error(`Failed ${onError.target.src} didn't load correctly`);
}

const useExternalJs = (resourceUrl) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = resourceUrl;
		script.async = true;
		script.onerror = loadError;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, [resourceUrl]);
};
export default useExternalJs;
