export const logger = (message) => ({
	type: "logger",
	payload: {
		message,
	},
});
