import React, { useEffect, useMemo, useState } from "react";

import Icons from "../Icons";

import "./style.css";

function Typer () {
    let [area, setArea] = useState("Я видел такое, во что вы, люди, просто не поверите. Штурмовые корабли в огне на подступах к Ориону. Я смотрел, как Си-лучи мерцают во тьме близ врат Тангейзера. Все эти мгновения исчезнут во времени, как слёзы под дождём. Пора умирать.");
    let [targetWord, setTargetWord] = useState("");
    let [inputWord, setInputWord] = useState("");
    let [wrongInput, setWrongInput] = useState(false);
    let [good, setGood] = useState(0);
    let [bad, setBad] = useState(0);

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
        if (e.target.value === targetWord) {
            getWord();
            setInputWord("");
            setGood(good + 1)
        }
        if (targetWord.includes(e.target.value, 0)) {
            setWrongInput(false)
        } else {
            if (!wrongInput) {
                setWrongInput(true);
                setBad(bad + 1)
            }
        }
    }

	useEffect(() => {
		wordsList();
	}, [area]) // eslint-disable-line

    return (
		<section className="typer">
			<div className="wrapper">
                <div className="typer__word">{wrongInput ? <p className="typer__word-red">{targetWord}</p> : <p>{targetWord}</p>}</div>
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
                    <label>Слов: {good}</label>
                    <label><span className="typerTimer">00:00</span></label>
                    <label>Ошибок: {bad}</label>
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