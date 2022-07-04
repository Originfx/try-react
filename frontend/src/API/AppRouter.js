import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Panel from "../partials/Panel";
import Footer from "../partials/Footer";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogSingle from "../pages/BlogSingle"
import Typer from "../pages/Typer";
import Keylayout from "../pages/Keylayout";
import NotFound from "../pages/404";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Panel />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route exact path="/blog" element={<Blog />} />
					<Route exact path="/blog/:id" element={<BlogSingle />} />
					<Route path="/typer" element={<Typer />} />
					<Route path="/keylayout" element={<Keylayout />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default AppRouter;