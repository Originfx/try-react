import React from "react";

// Импорт частей приложения
import Panel from "./partials/Panel";
import Footer from "./partials/Footer";

// Вывод отдельной страницы
import { Outlet } from "react-router-dom";

const TemplateDefault = () => {

	return (
		<div className="app">
			<Panel />
			<Outlet />
			<Footer />
		</div>
	)
}

export default TemplateDefault;