const parseDom = (domString) => {
	return new DOMParser().parseFromString(domString, "text/html").body.innerHTML;
};

export { parseDom };
