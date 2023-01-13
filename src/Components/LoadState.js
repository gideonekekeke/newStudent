import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
const Loading = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "rgba(0,0,0, 0.5)",
				height: "100vh",
				position: "fixed",
				width: "100%",
				zIndex: "1000",
				backdropFilter: "blur(5px)",
			}}
			class='model'>
			<ScaleLoader color='white' size={50} />
		</div>
	);
};

export default Loading;
