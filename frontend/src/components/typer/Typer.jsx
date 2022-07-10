import React, { useEffect, useMemo, useState } from "react";

import Icons from "../Icons";

import "./style.css";

function Typer () {
    let [area, setArea] = useState("Я видел такое, во что вы, люди, просто не поверите. Штурмовые корабли в огне на подступах к Ориону. Я смотрел, как Си-лучи мерцают во тьме близ врат Тангейзера. Все эти мгновения исчезнут во времени, как слёзы под дождём. Пора умирать.");
    let [targetWord, setTargetWord] = useState("");
    let [inputWord, setInputWord] = useState("");

    const wordsQueue = useMemo(() => {
        let x = area.replace(/[()«»—–.,~"`';:_-]/g, " ").trim().split(/\s+/);
        return x == '' ? [] : x;
    }, [area])

    const wordsList = () => {
        console.log(wordsQueue);
        getWord();
    }

    const getWord = () => {
        let queue = wordsQueue;
        let i = Math.floor(Math.random() * queue.length);
        setTargetWord(queue[i]);
    }

    const wordsCompare = (e) => {
        setInputWord(e.target.value);
        e.target.value === targetWord
            ? getWord()
            : console.log(false)
        e.target.value.slice(-1) != targetWord[e.target.value.length - 1]
            ? console.log('bad')
            : console.log('good')
    }

	useEffect(() => {
		wordsList();
	}, [area]) // eslint-disable-line

    return (
		<section className="typer">
			<div className="wrapper">
                <div className="typer__word">{targetWord}</div>
                <div className="typer__input">
                    <Icons name="icon-go" />
                    <input
                        value={inputWord}
                        onInput={wordsCompare}
                        type="text"
                        placeholder="Начните вводить" />
                    <Icons name="icon-reload" />
                </div>
                <div className="typer__score">
                    <label>Слов: <span className="typerScore">0</span></label>
                    <label><span className="typerTimer">00:00</span></label>
                    <label>Ошибок: <span className="typerAcc">0</span></label>
                </div>
                <textarea
						value={area}
						onInput={e => setArea(e.target.value)}
						rows="5"
                        maxLength={1000}
						placeholder="Библиотека слов" />
                <div className="typer__limit">{`${area.length} / 1000`}</div>
            </div>
        </section>
	);
}

export default Typer;