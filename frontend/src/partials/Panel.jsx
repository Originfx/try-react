import React from "react";
import { Link } from "react-router-dom";

import Time from '../components/time/';

const Panel = () => {
	return (
		<section className="logo">
		    <div className="wrapper">
				<ul>
					<li><Link to="/">ORIONE TOOLS</Link></li>
					<li><Time /></li>
				</ul>
		    </div>
		</section>
	);
}

export default Panel;