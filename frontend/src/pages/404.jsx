import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section>
			<div className="wrapper">
				<Link to="/">
					<div className="tools">
        				<div className="tools__icon">
        				    <i className="icon icon-go"></i>
        				</div>
        				<span>
        				    <h3>Уходим отсюда</h3>
        				    <p>Вернуться на главную</p>
        				</span>
					</div>
				</Link>
			</div>
		</section>
	);
}

export default NotFound;