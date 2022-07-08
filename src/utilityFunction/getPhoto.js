const getPhoto = (photo) => {
	const p = photo.includes(",") ? photo.split(",")[0] : photo;
	return `${process.env.REACT_APP_API_STORAGE_BASE + p}`;
};
export { getPhoto };
