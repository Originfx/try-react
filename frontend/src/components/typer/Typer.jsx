import React, { useEffect, useMemo, useState } from "react";

import Icons from "../Icons";

import "./style.css";

function Typer () {
    let [area, setArea] = useState("Я видел такое, во что вы, люди, просто не поверите. Штурмовые корабли в огне на подступах к Ориону. Я смотрел, как Си-лучи мерцают во тьме близ врат Тангейзера. Все эти мгновения исчезнут во времени, как слёзы под дождём. Пора умирать.");
    let [inputWord, setInputWord] = useState({value: "", disabled: false, placeholder: "Начните вводить"});
    let [wrongInput, setWrongInput] = useState(false);
    let [word, setWord] = useState({target: ""});
    let [score, setScore] = useState({ good: 0, bad: 0});
    let [status, setStatus] = useState({active: false});
    let [timerCount, setTimerCount] = useState(0);

    const wordsQueue = useMemo(() => {
        let x = area.replace(/[()«»—–.,~"`';:_-]/g, " ").trim().split(/\s+/);
        return x == '' ? [] : x.sort(() => Math.random() - 0.5);
    }, [area, inputWord.disabled])

    const getWord = () => {
        setInputWord({...inputWord, value: ""});
        if (score.good < wordsQueue.length) {
            setWord({...word, target: wordsQueue[score.good]})
        } else {
            setWord({...word, target: "Вы ввели все слова :)"})
            setStatus({active: false});
            setInputWord({value: "", placeholder: "Перезапустить", disabled: true})
        }
    }

    const wordsCompare = (e) => {
        setInputWord({...inputWord, value: e.target.value})
        setStatus({active: true});
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
        setScore({good: 0, bad: 0});
        setWrongInput(false);
        setStatus({active: false});
        setInputWord({value: "", disabled: false, placeholder: "Начните вводить"})
        setTimerCount(0);
    }

    useEffect(() => {
        let counter;
        if (status.active) {
            counter = setInterval(() => {
                setTimerCount(timerCount + 1);
            }, 1000);
        } else if (!status.active && timerCount !== 0) {
            clearInterval(counter);
        }
        return () => clearInterval(counter);
    }, [status.active, timerCount]);

	useEffect(() => {
        getWord();
	}, [area, score.good]) // eslint-disable-line
    
	useEffect(() => {
        resetTyper();
	}, [area]) // eslint-disable-line

    return (
		<section className="typer">
			<div className="wrapper">
                <div className={`typer__word ${wrongInput ? "typer__word-red" : null}`}>{word.target}</div>
                <div className="typer__input">
                    <Icons name="icon-go" />
                    <input
                        value={inputWord.value}
                        onInput={wordsCompare}
                        type="text"
                        placeholder={inputWord.placeholder}
                        disabled={inputWord.disabled} />
                    <Icons name="icon-reload" onClick={resetTyper} />
                </div>
                <div className="typer__score">
                    <label>Слов: {score.good}</label>
                    <label>{timerCount}</label>
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