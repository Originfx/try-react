import React from "react";
import "../keylayout/Keylayout.css";

function Keylayout () {

    return (
        <div className="keylayout">
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
	);
}

export default Keylayout;
