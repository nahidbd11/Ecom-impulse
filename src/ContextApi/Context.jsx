import React, { createContext, useReducer, useState } from "react";
import useFetch from "../customHooks/useFetch";
import reducer from "./Store/reducer";
export const AppContext = createContext(undefined);
function ContextWrapper({ children }) {
	const initialState = {};
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AppContext.Provider
			value={{
				dispatch,
				state,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default ContextWrapper;
