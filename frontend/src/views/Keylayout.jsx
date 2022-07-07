import React from "react";
import { Link } from "react-router-dom";

import Source from '../components/keylayout/';

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