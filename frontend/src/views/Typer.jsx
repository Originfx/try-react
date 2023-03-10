import React from "react";
import { Link } from "react-router-dom";

// Импорт ключевого компонента страницы
import Source from '../components/Typer';

const Blog = () => {
	return (
		<>
			<section className="console">
				<div className="wrapper">
					<ul>
						<li>Typing Game</li>
            			<li>Проверка скорости набора текста.</li>
            			<li><Link to="/">Выход</Link></li>
					</ul>
				</div>
			</section>
			<Source />
		</>
	);
}

export default Blog;