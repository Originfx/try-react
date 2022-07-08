import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {AuthContext} from "../context";

import TemplateDeafult from "../templates/Default";

import Login from "../views/Login";
import Homepage from "../views/Homepage";
import Blog from "../views/Blog";
import BlogSingle from "../views/BlogSingle"
import Typer from "../views/Typer";
import Keylayout from "../views/Keylayout";
import NotFound from "../views/404";

const AppRouter = () => {
	let {isAuth, isLoading} = useContext(AuthContext);

	if (isLoading) {
		return "Страница загружается...";
	}

	return (
		isAuth
			?
			<Routes>
				<Route path="/" element={<TemplateDeafult />}>
					<Route index element={<Homepage />} />
					<Route path="blog" element={<Blog />} />
					<Route path="blog/:id" element={<BlogSingle />} />
					<Route path="typer" element={<Typer />} />
					<Route path="keylayout" element={<Keylayout />} />

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			:
			<Routes>
				<Route path="/" element={<TemplateDeafult />}>
					<Route index element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
	)
}

export default AppRouter;