import React, { useState } from "react";

// Импорт компонента - Иконки
import Icons from "../Icons";

// Импорт стилей компонента
import "./style.css";

function Keylayout () {
    // Поле ввода текста на английской раскладке
    let [inputEng, setInputEng] = useState({value: "", restrict: /[а-яё]/gi});
    // Поле ввода текста на русской раскладке
    let [inputRus, setInputRus] = useState({value: "", restrict: /[a-z]/gi});

    // Библиотека
    let layouts = {
        eng: ['!','@','#','$','%','^','&','*','(',')','`',
        'q','w','e','r','t','y','u','i','o','p','[',']',
        'a','s','d','f','g','h','j','k','l',';','\'',
        'z','x','c','v','b','n','m',',','.','/',
        '~','Q','W','E','R','T','Y','U','I','O','P','{','}',
        'A','S','D','F','G','H','J','K','L',':','"',
        'Z','X','C','V','B','N','M','<','>','?'],
        rus: ['!','"','№',';','%',':','?','*','(',')','ё',
        'й','ц','у','к','е','н','г','ш','щ','з','х','ъ',
        'ф','ы','в','а','п','р','о','л','д','ж','э',
        'я','ч','с','м','и','т','ь','б','ю','.','Ё',
        'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ',
        'Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э',
        'Я','Ч','С','М','И','Т','Ь','Б','Ю',','],
    }

    // Конвертер
    const convert = (str, from, to) => {
        // Превращаем строку в массив
        let text = str;
        let output = '';
        // Цикл перебора массива с текстом
        for (var i = 0; i < text.length; i++) {
            // Если символ из перебора содержится в библиотеке
            if ( layouts[from].indexOf(text[i]) !== -1 ) {
                // Заменяем его паралельным символом из библеотеке
                output += layouts[to][layouts[from].indexOf(text[i])]
            }
            // Иначе оставляем символ без изменения
            else {
                output += text[i]
            }
        }
        // Возвращаем результат
        return output  
    }

    // Конвертировать на аглийский язык
    const toEng = (e) => {
        // Запрет на ввод некоторых символов
        let str = e.target.value.replace(inputEng.restrict, "");
        // Поле ввода
        setInputEng({...inputEng, value: str});
        // Печатать конвертированный текст в указанной форме
        setInputRus({...inputRus, value: convert(str, "eng", "rus")});
    }

    // Конвертировать на русский язык
    const toRus = (e) => {
        // Запрет на ввод некоторых символов
        let str = e.target.value.replace(inputRus.restrict, "");
        // Поле ввода
        setInputRus({...inputRus, value: str});
        // Печатать конвертированный текст в указанной форме
        setInputEng({...inputEng, value: convert(str, "rus", "eng")});
    }

    return (
		<section className="keylayout">
			<div className="wrapper">
                <label>Ghbdtn - Привет</label>
                <div className="keylayout__input">
                    <div className="keylayout__input-panel">
                        <Icons name="icon-copy" onClick={() => navigator.clipboard.writeText(inputEng.value)} />
                    </div>
                    <textarea
                        value={inputEng.value}
                        onInput={e => toEng(e)}
                        rows="10"
                        required />
                </div>
                <label>Руддщ - Hello</label>
                <div className="keylayout__input">
                    <div className="keylayout__input-panel">
                        <Icons name="icon-copy" onClick={() => navigator.clipboard.writeText(inputRus.value)} />
                    </div>
                    <textarea
                        value={inputRus.value}
                        onInput={e => toRus(e)}
                        rows="10"
                        required />
                </div>
            </div>
        </section>
	);
}

export default Keylayout;