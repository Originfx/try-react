import React from "react";

import Panel from "./partials/Panel";
import Footer from "./partials/Footer";
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