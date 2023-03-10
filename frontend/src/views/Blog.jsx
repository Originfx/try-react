import React from "react";
import { Link } from "react-router-dom";

// Импорт ключевого компонента страницы
import Source from '../components/Blog';

const Blog = () => {
	return (
		<>
			<section className="console">
				<div className="wrapper">
					<ul>
						<li>Блог.</li>
						<li>Персональный блог.</li>
						<li><Link to="/">Выход</Link></li>
					</ul>
				</div>
			</section>
			<Source />
		</>
	);
}

export default Blog;