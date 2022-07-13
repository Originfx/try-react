import React from "react";

// Импорт стилей компонента
import  "./style.css";

const Icons = ({name, onClick}) => {
	return (
		<i className={`icon ${name}`} onClick={onClick}></i>
	);
}

export default Icons;