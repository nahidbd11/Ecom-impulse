import "./SpinLoader.css";

export default function SpinLoader({ ratio }) {
	const spinnerCss = {
		border: `${parseInt(ratio) / 7.5}px solid #f3f3f3`,
		borderRadius: "50%",
		borderTop: "5px solid yellow",
		borderRight: "5px solid yellow",
		borderBottom: "5px solid red",
		borderLeft: "5px solid red",
		width: ratio + "px",
		height: ratio + "px",
		margin: "3rem auto",
		WebkitAnimation: "spin 2s linear infinite",
		animation: "spin 2s linear infinite",
	};

	return <div style={spinnerCss}></div>;
}
