import React, { useState } from "react";

const EnlargeableImage = ({
	src,
	initialWidth,
	initialHeight,
	enlargedWidth,
	enlargedHeight,
}) => {
	const [enlarged, setEnlarged] = useState(false);

	const toggleEnlarged = () => {
		setEnlarged(!enlarged);
	};

	// const imageStyle = enlarged
	// 	? { width: enlargedWidth, height: enlargedHeight }
	// 	: { width: initialWidth, height: initialHeight };

	// const containerStyle = enlarged ? { overflow: "auto" } : {};

	const imageStyle = {
		width: enlarged ? enlargedWidth : initialWidth,
		height: enlarged ? enlargedHeight : initialHeight,
		transition: "width 0.3s ease-in-out, height 0.3s ease-in-out", // Add transition
	};

	// const containerStyle = enlarged ? { overflow: "auto" } : {};

	// const containerStyle = enlarged
	// 	? {
	// 			width: enlargedWidth,
	// 			height: enlargedHeight,
	// 			overflow: "auto",
	// 			cursor: "zoom-out",
	// 	  }
	// 	: { width: initialWidth, height: initialHeight, cursor: "zoom-in" };

	const containerStyle = enlarged
		? {
				width: "300px",
				height: "300px",
				overflow: "auto",
				cursor: "zoom-out",
				transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
		  }
		: { width: "200px", height: "230px", cursor: "zoom-in" };

	return (
		<div style={containerStyle} onClick={toggleEnlarged}>
			<img style={imageStyle} src={src} alt="Enlargable Image" />
		</div>
	);
};

export default EnlargeableImage;
