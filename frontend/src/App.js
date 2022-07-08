import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {AuthContext} from "./context/index";

import AppRouter from "./routes";

import "./default.css";
import "./style.css";

const App = () => {
	let [isAuth, setIsAuth] = useState(false);
	let [isLoading, setLoading] = useState(true);
	
	useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
		setLoading(false);
    }, [])

	return (
		<AuthContext.Provider value={{
            isAuth,
            setIsAuth,
			isLoading
        }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App;