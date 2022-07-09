import React, { useState } from "react";

import Icons from "../Icons";

import "./style.css";

function Typer () {
    let [words, setWords] = useState([]);
    let [all, setAll] = useState(false);

    const showWords = (e) => {
        let x = e.target.value.replace(/[()«»—–.,~"`';:_-]/g, " ").trim().split(/\s+/);
        setWords(e.target.value)
        setAll([x])
        console.log(all)
    }

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
                <textarea
						value={words}
						onChange={e => showWords(e)}
						rows="5"
						placeholder="Библиотека слов" />
                <div className="typer__limit typerLimit">0/1000</div>
            </div>
        </section>
	);
}

export default Typer;