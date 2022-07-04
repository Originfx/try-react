import React, { useContext } from "react";
import {AuthContext} from "../context";
import {Routes, Route, Navigate} from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogSingle from "../pages/BlogSingle"
import Typer from "../pages/Typer";
import Keylayout from "../pages/Keylayout";
import NotFound from "../pages/404";

const AppRouter = () => {
	let {isAuth, isLoading} = useContext(AuthContext);

	return (
		isAuth
			?
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/blog" element={<Blog />} />
				<Route exact path="/blog/:id" element={<BlogSingle />} />
				<Route path="/typer" element={<Typer />} />
				<Route path="/keylayout" element={<Keylayout />} />

				<Route path="/login" element={<Navigate to="/" replace />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
			:
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Routes>
	)
}

export default AppRouter;