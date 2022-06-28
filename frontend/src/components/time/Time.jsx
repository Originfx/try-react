import React, { useEffect, useState } from "react";
import classes from "./Time.module.css"

// Добавить 0 в начало, если меньше 10 секунд/минут
const addZero = (a) => {
    return (a < 10 ? '0' : '') + a;
}

// Отобразить время
const timer = () => {
    let currentTime = new Date();
    let hours = currentTime.getUTCHours() + 3;
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = addZero( currentTime.getUTCMinutes() );
    let seconds = addZero( currentTime.getUTCSeconds() );

    let ampm = hours > 12 ? 'AM' : 'PM';

    // Обновить время
    return addZero(hours) + ":" + minutes + ":" + seconds + " " + ampm;
}

const Time = () => {
    let [time, setTime] = useState(0);

    useEffect(() => {
        setTime(timer());
    }, [time])

    setInterval(() => {
        setTime(timer());
    }, 1000)

	return (
		<span className={classes.time}>{time}</span>
	);
}

export default Time;