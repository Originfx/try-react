import React, { useEffect, useMemo, useState } from "react";

import Icons from "../Icons";

import "./style.css";

function Typer () {
    let [area, setArea] = useState("Я видел такое, во что вы, люди, просто не поверите. Штурмовые корабли в огне на подступах к Ориону. Я смотрел, как Си-лучи мерцают во тьме близ врат Тангейзера. Все эти мгновения исчезнут во времени, как слёзы под дождём. Пора умирать.");
    let [targetWord, setTargetWord] = useState("");
    let [inputWord, setInputWord] = useState("");
    let [wrongInput, setWrongInput] = useState(false);
    let [scoreGood, setScoreGood] = useState(0);
    let [scoreBad, setScoreBad] = useState(0);

    const wordsQueue = useMemo(() => {
        let x = area.replace(/[()«»—–.,~"`';:_-]/g, " ").trim().split(/\s+/);
        return x == '' ? [] : x;
    }, [area])

    const startTyper = () => {
        getWord();
    }

    const getWord = () => {
        let i = Math.floor(Math.random() * wordsQueue.length);
        setTargetWord(wordsQueue[i]);
        wordsQueue.splice(i, 1);
        console.log(wordsQueue)
    }

    const wordsCompare = (e) => {
        setInputWord(e.target.value);
        if (e.target.value === targetWord) {
            setInputWord("");
            setScoreGood(scoreGood + 1);
            getWord();
        }
        if (targetWord.includes(e.target.value, 0)) {
            setWrongInput(false);
        } else {
            if (!wrongInput) {
                setWrongInput(true);
                setScoreBad(scoreBad + 1);
            }
        }
    }
    
    const resetTyper = () => {
        console.log('reset');
        setScoreGood(0);
        setScoreBad(0);
    }

	useEffect(() => {
		getWord();
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
                    <Icons name="icon-reload" onClick={resetTyper} />
                </div>
                <div className="typer__score">
                    <label>Слов: {scoreGood}</label>
                    <label><span className="typerTimer">00:00</span></label>
                    <label>Ошибок: {scoreBad}</label>
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