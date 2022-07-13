import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

// Импорт контекста
import {AuthContext} from "./context/index";

// Импорт путей маршрутизации приложения
import AppRouter from "./routes";

// Импорт общих стилей
import "./default.css";
import "./style.css";

const App = () => {
	// Авторизация пользователя
	let [isAuth, setIsAuth] = useState(false);
	// Подгрузка приложения
	let [appLoading, setAppLoading] = useState(true);
	
	// Хук эффекта - Один раз
	useEffect(() => {
		// Если в хранилище есть данные авторизации
        if (localStorage.getItem('auth')) {
			// Пользователь авторизован
            setIsAuth(true)
        }
		// Приложение загружено
		setAppLoading(false);
    }, [])

	return (
		<AuthContext.Provider value={{
            isAuth,
            setIsAuth,
			appLoading
        }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App;