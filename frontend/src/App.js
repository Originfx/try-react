import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {AuthContext} from "./context/index";

import AppRouter from "./routes";

const App = () => {
	let [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

	return (
		<AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App;