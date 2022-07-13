import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

// Импорт контекста
import {AuthContext} from "../context";

// Импорт стандартного шаблона
import TemplateDeafult from "../templates/Default";

// Импорт отдельных страниц
import Login from "../views/Login";
import Homepage from "../views/Homepage";
import Blog from "../views/Blog";
import BlogSingle from "../views/BlogSingle"
import Typer from "../views/Typer";
import Keylayout from "../views/Keylayout";
import NotFound from "../views/404";

const AppRouter = () => {
	// Обмен контекстом
	let {isAuth, appLoading} = useContext(AuthContext);

	// Если приложение загружается
	if (appLoading) {
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