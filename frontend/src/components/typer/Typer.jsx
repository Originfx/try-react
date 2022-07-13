import React, { useEffect, useMemo, useState } from "react";

// Импорт компонента - Иконки
import Icons from "../Icons";

// Импорт стилей компонента
import "./style.css";

function Typer () {
    // Библиотека слов
    let [area, setArea] = useState("Я видел такое, во что вы, люди, просто не поверите. Штурмовые корабли в огне на подступах к Ориону. Я смотрел, как Си-лучи мерцают во тьме близ врат Тангейзера. Все эти мгновения исчезнут во времени, как слёзы под дождём. Пора умирать.");
    // Поле ввода слова
    let [inputWord, setInputWord] = useState({value: "", disabled: false, placeholder: "Начните вводить"});
    // Подсветка ошибки
    let [wrongInput, setWrongInput] = useState(false);
    // Целевое слово
    let [word, setWord] = useState({target: ""});
    // Счёт
    let [score, setScore] = useState({ good: 0, bad: 0});
    // Статус Тайпера
    let [status, setStatus] = useState({active: false});
    // Счётчик таймера
    let [timerCount, setTimerCount] = useState(0);

    // Хук памяти - Массив очередности слов
    const wordsQueue = useMemo(() => {
        // Получение отдельных слов
        let x = area.replace(/[()«»—–.,~"`';:_-]/g, " ").trim().split(/\s+/);
        // Если нет слова вернуть пустой массив иначе перемешать массив очередности слов
        return x == '' ? [] : x.sort(() => Math.random() - 0.5);
    }, [area, inputWord.disabled])

    // Получение слова
    const getWord = () => {
        // Очистить поле ввода слова
        setInputWord({...inputWord, value: ""});
        // Если есть слова в очереди
        if (score.good < wordsQueue.length) {
            // Указать целевое слово
            setWord({...word, target: wordsQueue[score.good]})
        }
        // Иначе
        else {
            // Показать сообщение
            setWord({...word, target: "Вы ввели все слова :)"});
            // Статус тайпера - остановлен
            setStatus({active: false});
            // Отключить поле ввода формы
            setInputWord({value: "", placeholder: "Перезапустить", disabled: true})
        }
    }

    // Сравнение слов
    const wordsCompare = (e) => {
        // Отобразить вводимое слово
        setInputWord({...inputWord, value: e.target.value})
        // Статус тайпера - активен
        setStatus({active: true});
        // Если вводимое слово === целевое слово
        if (e.target.value === word.target) {
            // Правильный ответ
            setScore({...score, good: score.good + 1})
        }
        // Если целевое слово содержит фрагмент вводимого слова
        if (word.target.includes(e.target.value, 0)) {
            // Снять подсветку ошибки
            setWrongInput(false);
        }
        // Иначе
        else {
            // Подсветить ошибку единожды
            if (!wrongInput) {
                // Подсветка ошибки
                setWrongInput(true);
                // Ответ неверный
                setScore({...score, bad: score.bad + 1})
            }
        }
    }

    // Рестарт
    const restartTyper = () => {
        // Сбросить счёт
        setScore({good: 0, bad: 0});
        // Снять подсветку ошибки
        setWrongInput(false);
        // Статус тайпера - остановлен
        setStatus({active: false});
        // Включить поле ввода формы
        setInputWord({value: "", disabled: false, placeholder: "Начните вводить"})
        // Обнулить счётчик таймера
        setTimerCount(0);
    }

    // Хук эффекта - Таймер
    useEffect(() => {
        // Переменная интервала
        let counter;
        // Если статус тайпера - активен
        if (status.active) {
            // Задать интервал
            counter = setInterval(() => {
                // Увеличить значение счётчика
                setTimerCount(timerCount + 1);
            }, 1000);
        }
        // Иначе если статус тайпера - остановлен и счётчик таймера != 0
        else if (!status.active && timerCount !== 0) {
            // Остановить интервал
            clearInterval(counter);
        }
        // Остановить интервал
        return () => clearInterval(counter);
    }, [status.active, timerCount]);

    // Хук эффекта - Изменение библиотеки слов, Правильный ответ
	useEffect(() => {
        // Получение нового целевого слова
        getWord();
	}, [area, score.good]) // eslint-disable-line
    
    // Хук эффекта - Изменение библиотеки слов
	useEffect(() => {
        // Перезапустить приложение
        restartTyper();
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
                    <Icons name="icon-reload" onClick={restartTyper} />
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