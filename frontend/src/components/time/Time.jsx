import React from "react";
import "../time/Time.css";

const Time = () => {
    let [time, setTime] = React.useState(0);
    
    // Добавить 0 в начало, если меньше 10 секунд/минут
    const addZero = (a) => {
        return (a < 10 ? '0' : '') + a;
    }

    // Отобразить время
    const timer = () => {
        let currentTime = new Date();
        let hours = currentTime.getUTCHours() + 3;
        let minutes = addZero( currentTime.getUTCMinutes() );
        let seconds = addZero( currentTime.getUTCSeconds() );

        let ampm = "AM";

        if (hours > 12) {
            hours -= 12;
            ampm = "PM";
        }

        // Обновить время
        setTime(addZero(hours) + ":" + minutes + ":" + seconds + " " + ampm);
    }

    React.useEffect(() => {
        timer();
    }, [])

    setInterval(() => {
        timer();
    }, 1000)

	return (
		<span>{time}</span>
	);
}

export default Time;