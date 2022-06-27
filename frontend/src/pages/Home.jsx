import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<section className="console">
				<div className="wrapper">
					<ul>
						<li>Первый опыт работы с React.</li>
						<li>Коллекция веб-инструментов.</li>
					</ul>
				</div>
			</section>

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
		</>
	);
}

export default Home;