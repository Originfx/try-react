import React from "react";

import Icons from "../Icons";

import "./style.css";

function Keylayout () {
    return (
		<section className="keylayout">
			<div className="wrapper">
                <label>Ghbdtn - Привет</label>
                <div className="keylayout__input">
                    <div className="keylayout__input-panel">
                        <Icons name="icon-go" />
                        <Icons name="icon-copy" target="inputEng" />
                    </div>
                    <textarea className="keylayEng" rows="10" required></textarea>
                </div>
                <label>Руддщ - Hello</label>
                <div className="keylayout__input">
                    <div className="keylayout__input-panel">
                        <Icons name="icon-go" />
                        <Icons name="icon-copy" target="inputRus" />
                    </div>
                    <textarea className="keylayRus" rows="10" required></textarea>
                </div>
            </div>
        </section>
	);
}

export default Keylayout;