import React from "react";
import "../time/Time.css";

const Time = () => {
    
    let [time, setTime] = React.useState(0);
    
    // Добавить 0 в начало, если меньше 10 секунд/минут
    const addZero = (a) => {
        return (a < 10 ? '0' : '') + a;
    }

    // Отобразить и стилизировать время
    const timer = () => {
        let currentTime = new Date();
        let hours = currentTime.getUTCHours() + 3;
        let minutes = addZero( currentTime.getUTCMinutes() );

        let ampm = "AM";

        if (hours > 12) {
            hours -= 12;
            ampm = "PM";
        }

        // Отобразить время на сайте
        setTime(addZero(hours) + ":" + minutes + " " + ampm);
    }

	return (
		<span>{time}</span>
	);
}

export default Time;