import React, { useState } from "react";
import {AuthContext} from "./context";
import {BrowserRouter} from "react-router-dom";

import Panel from "./partials/Panel";
import Footer from "./partials/Footer";

import AppRouter from "./routes";

const App = () => {
	let [isAuth, setIsAuth] = useState(false);

	return (
		<AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
			<BrowserRouter>
				<div className="app">
					<Panel />
					<AppRouter />
					<Footer />
				</div>
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App;