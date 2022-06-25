import React from "react";
import "./style.css";

function Keylayout () {
    return (
		<section className="keylayout">
			<div className="wrapper">
                <label>Ghbdtn - Привет</label>
                <div className="keylayout__input">
                    <div className="keylayout__input-panel">
                        <i className="icon icon-go"></i>
                        <i className="icon icon-copy keylayCopy" target="inputEng"></i>
                    </div>
                    <textarea className="keylayEng" rows="10" required></textarea>
                </div>
                <label>Руддщ - Hello</label>
                <div className="keylayout__input">
                    <div className="keylayout__input-panel">
                        <i className="icon icon-go"></i>
                        <i className="icon icon-copy keylayCopy" target="inputRus"></i>
                    </div>
                    <textarea className="keylayRus" rows="10" required></textarea>
                </div>
            </div>
        </section>
	);
}

export default Keylayout;