import React, { useContext } from "react";

// Импорт контекста
import {AuthContext} from "../context";

// Импорт компонента - Иконки
import Icons from "../components/Icons";

const Login = () => {
	// Обмен контекстом
	let {setIsAuth} = useContext(AuthContext);

	// Авторизация
    const login = () => {
		// Пользователь авторизован
        setIsAuth(true);
		// Сохранить в хранилище данные авторизации
        localStorage.setItem('auth', 'true');
    }

	return (
		<>
			<section className="console">
				<div className="wrapper">
					<ul>
						<li>Авторизация.</li>
						<li>Вход в систему.</li>
					</ul>
				</div>
			</section>
			<section className="login">
				<div className="wrapper">
					<div className="tools" onClick={login}>
						<div className="tools__icon">
							<Icons name="icon-go" />
						</div>
						<span>
							<h3>Войти</h3>
							<p>Получить доступ</p>
						</span>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;