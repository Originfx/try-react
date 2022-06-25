import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section>
			<div className="wrapper">
				<Link to="/blog">
					<div className="tools">
						<div className="tools__icon">
							<i className='icon icon-list'></i>
						</div>
						<span>
							<h3>Blog</h3>
							<p>Блог пользователя</p>
						</span>
					</div>
				</Link>

				<Link to="/typer">
					<div className="tools">
						<div className="tools__icon">
							<i className='icon icon-list'></i>
						</div>
						<span>
							<h3>Typing Game</h3>
							<p>Проверка скорости набора текста</p>
						</span>
					</div>
				</Link>

				<Link to="/keylayout">
					<div className="tools">
						<div className="tools__icon">
							<i className='icon icon-list'></i>
						</div>
						<span>
							<h3>Смена раскладки</h3>
							<p>Перевод текста в другую раскладку</p>
						</span>
					</div>
				</Link>
			</div>
		</section>
	);
}

export default Home;