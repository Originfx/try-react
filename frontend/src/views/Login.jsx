import React, { useContext } from "react";
import {AuthContext} from "../context";

const Login = () => {
	let {setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        (e).preventDefault();
        setIsAuth(true);
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
					<form onSubmit={login}>
						<input
							type="text"
							placeholder="Название" />

						<input
							type="password"
							placeholder="Пароль" />
						<button>Войти</button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Login;