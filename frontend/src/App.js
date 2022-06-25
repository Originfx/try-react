import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Panel from "./partials/Panel";
import Console from "./partials/Console";
import Footer from "./partials/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Typer from "./pages/Typer";
import Keylayout from "./pages/Keylayout";
import NotFound from "./pages/404";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Panel />
				<Console />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/typer" element={<Typer />} />
					<Route path="/keylayout" element={<Keylayout />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App;