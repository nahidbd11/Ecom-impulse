import React, { useEffect } from "react";
import pluginsinit from "./plugin_init";

function usePluginInit(...packagenames) {
	useEffect(() => {
		packagenames.forEach((packageItem) => {
			pluginsinit[packageItem]();
		});
	});
}

export default usePluginInit;
