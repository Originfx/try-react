import React, { useContext } from "react";

// Импорт контекста
import {AuthContext} from "../../context";

const Footer = () => {
	// Обмен контекстом
	let {isAuth, setIsAuth} = useContext(AuthContext);

	// Выйти из системы
    const logout = (e) => {
		// Отлючить действие по умолчанию
        (e).preventDefault();
		// Пользователь не авторизован
        setIsAuth(false);
		// Удалить из хранилища данные авторизации
        localStorage.removeItem('auth');
    }

	return (
		<>
			<section className="footer">
				<div className="wrapper">
					<p>Getting started with React. Learning by examples. {isAuth ? <span onClick={logout}>Выйти</span> : null}</p>
				</div>
			</section>
		</>
	);
}

export default Footer;