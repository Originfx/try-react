import React from "react";

import Icons from "../Icons";

import "./style.css";

function Typer () {
    return (
		<section className="typer">
			<div className="wrapper">
                <div className="typer__word typerWord"></div>
                <div className="typer__input">
                    <Icons name="icon-go" />
                    <input type="text" className="typerInput" placeholder="Начните вводить" />
                    <Icons name="icon-reload" />
                </div>
                <div className="typer__score">
                    <label>Слов: <span className="typerScore">0</span></label>
                    <label><span className="typerTimer">00:00</span></label>
                    <label>Ошибок: <span className="typerAcc">0</span></label>
                </div>
                <textarea className="typerLibrary" rows="5" placeholder="Библиотека слов" maxLength="1000" required>Я видел такое, во что вы, люди, просто не поверите. Штурмовые корабли в огне на подступах к Ориону. Я смотрел, как Си-лучи мерцают во тьме близ врат Тангейзера. Все эти мгновения исчезнут во времени, как слёзы под дождём. Пора умирать.</textarea>
                <div className="typer__limit typerLimit">0/1000</div>
            </div>
        </section>
	);
}

export default Typer;