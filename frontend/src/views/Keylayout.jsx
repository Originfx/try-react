import React from "react";
import { Link } from "react-router-dom";

// Импорт ключевого компонента страницы
import Source from '../components/Keylayout/';

const Keylayout = () => {
	return (
		<>
			<section className="console">
				<div className="wrapper">
					<ul>
            			<li>Смена раскладки</li>
            			<li>Перевод текста в другую раскладку</li>
						<li><Link to="/">Выход</Link></li>
					</ul>
				</div>
			</section>
			<Source />
		</>
	);
}

export default Keylayout;