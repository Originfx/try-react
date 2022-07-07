import React, { useContext } from "react";
import {AuthContext} from "../../context";

const Footer = () => {
	let {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = (e) => {
        (e).preventDefault();
        setIsAuth(false);
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