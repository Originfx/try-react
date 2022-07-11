import React, { useEffect, useMemo, useState } from "react";

import Icons from "../Icons";

import "./style.css";

function Typer () {
    let [area, setArea] = useState("Я видел такое, во что вы, люди, просто не поверите. Штурмовые корабли в огне на подступах к Ориону. Я смотрел, как Си-лучи мерцают во тьме близ врат Тангейзера. Все эти мгновения исчезнут во времени, как слёзы под дождём. Пора умирать.");
    let [inputWord, setInputWord] = useState("");
    let [wrongInput, setWrongInput] = useState(false);
    let [word, setWord] = useState({target: ""});
    let [score, setScore] = useState({ good: 0, bad: 0});
    let [stop, setStop] = useState(false);

    const wordsQueue = useMemo(() => {
        let x = area.replace(/[()«»—–.,~"`';:_-]/g, " ").trim().split(/\s+/);
        return x == '' ? [] : x.sort(() => Math.random() - 0.5);
    }, [area])

    const getWord = () => {
        setInputWord("");
        if (score.good < wordsQueue.length) {
            setWord({...word, target: wordsQueue[score.good]})
            setStop(false);
        } else {
            setWord({...word, target: "Вы ввели все слова :)"})
            setStop(true);
        }
    }

    const wordsCompare = (e) => {
        setInputWord(e.target.value);
        if (e.target.value === word.target) {
            setScore({...score, good: score.good + 1})
        }
        if (word.target.includes(e.target.value, 0)) {
            setWrongInput(false);
        } else {
            if (!wrongInput) {
                setWrongInput(true);
                setScore({...score, bad: score.bad + 1})
            }
        }
    }
    
    const resetTyper = () => {
        setScore({ good: 0, bad: 0});
        setWrongInput(false);
        getWord();
    }

	useEffect(() => {
        getWord();
	}, [score.good]) // eslint-disable-line
    
	useEffect(() => {
        resetTyper();
	}, [area]) // eslint-disable-line

    return (
		<section className="typer">
			<div className="wrapper">
                <div className="typer__word">{wrongInput ? <p className="typer__word-red">{word.target}</p> : <p>{word.target}</p>}</div>
                <div className="typer__input">
                    <Icons name="icon-go" />
                    <input
                        value={inputWord}
                        onInput={wordsCompare}
                        type="text"
                        placeholder="Начните вводить"
                        disabled={stop} />
                    <Icons name="icon-reload" onClick={resetTyper} />
                </div>
                <div className="typer__score">
                    <label>Слов: {score.good}</label>
                    <label>Ошибок: {score.bad}</label>
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