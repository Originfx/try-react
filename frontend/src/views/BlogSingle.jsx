import React from "react";
import { Link } from "react-router-dom";

// Импорт ключевого компонента страницы
import Source from '../components/Blog/BlogSingle';

const BlogSingle = () => {
	return (
		<>
			<section className="console">
				<div className="wrapper">
					<ul>
						<li>Блог.</li>
						<li>Запись в блоге.</li>
						<li><Link to="/blog">Выход</Link></li>
					</ul>
				</div>
			</section>
			<Source />
		</>
	);
}

export default BlogSingle;