import React from "react";
import { Link } from "react-router-dom";

// Импорт компонента - Иконки
import Icons from "../components/Icons";

const NotFound = () => {
	return (
		<>
			<section className="console">
				<div className="wrapper">
					<ul>
            			<li>Что-то пошло не так!</li>
            			<li>Ошибка 404</li>
            			<li>Страница не найдена.</li>
					</ul>
				</div>
			</section>
			<section className="error">
				<div className="wrapper">
					<Link to="/">
						<div className="tools">
							<div className="tools__icon">
								<Icons name="icon-go" />
							</div>
							<span>
								<h3>Уходим отсюда</h3>
								<p>Вернуться на главную</p>
							</span>
						</div>
					</Link>
				</div>
			</section>
		</>
	);
}

export default NotFound;