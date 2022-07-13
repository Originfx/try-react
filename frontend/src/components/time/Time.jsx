import React, { useEffect, useState } from "react";

// Импорт стилей компонента
import classes from "./Time.module.css"

const Time = () => {
    // Время
    let [time, setTime] = useState(0);

    // Добавить 0 в начало
    const addZero = (a) => {
        // Если меньше 10 секунд/минут
        return (a < 10 ? '0' : '') + a;
    }

    // Получить значения даты
    const dateValues = () => {
        // Получить текущую дату
        let currentTime = new Date();
        // Получить часы из текущей даты
        let hours = currentTime.getUTCHours() + 3;
        // Перевод часов в 12-ти часовой формат
        hours = hours % 12;
        hours = hours ? hours : 12;
        // Получить минуты из текущей даты
        let minutes = addZero( currentTime.getUTCMinutes() );
        // Получить секунды из текущей даты
        let seconds = addZero( currentTime.getUTCSeconds() );
        // Определить приписку 12 часового формата времени
        let ampm = hours > 12 ? 'AM' : 'PM';
        // Собрать и вернуть время
        return addZero(hours) + ":" + minutes + ":" + seconds + " " + ampm;
    }

    // Хук эффекта - Один раз
    useEffect(() => {
        // Получить время
        setTime(dateValues());
    }, [])

    // Запустить интервал
    setInterval(() => {
        // Получить время
        setTime(dateValues());
    }, 1000)

	return (
		<span className={classes.time}>{time}</span>
	);
}

export default Time;