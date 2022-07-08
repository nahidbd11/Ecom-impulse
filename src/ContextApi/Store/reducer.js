/* eslint-disable import/no-anonymous-default-export */
export default function reducer(state, { type, payload }) {
	switch (type) {
		case "logger":
			console.log("working");
			return { ...state, ...payload };
		default:
			return state;
	}
}
