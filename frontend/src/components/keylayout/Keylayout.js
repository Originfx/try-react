// KEYLAYOUT //////////////////////////////////
// Форма TextArea на аглийском
const inputEng = new Object({
    source: document.querySelector('.keylayEng'),
    reg: /[а-яё]/gi,
    // Прослушка изменения формы
    listener: function() {
        this.source.addEventListener('input',()=>{
            // Запрет на ввод некоторых символов
            this.source.value = this.source.value.replace(this.reg, '');
            // Печатать конвертированный текст в указанной форме
            inputRus.source.value = convert(this.source.value, 'eng', 'rus');
        })
    }
})

// Форма TextArea на русском
const inputRus = new Object({
    source: document.querySelector('.keylayRus'),
    reg: /[a-z]/gi,
    // Прослушка изменения формы
    listener: function() {
        this.source.addEventListener('input',()=>{
            // Запрет на ввод некоторых символов
            this.source.value = this.source.value.replace(this.reg, '');
            // Печатать текст в указанной форме
            inputEng.source.value = convert(this.source.value, 'rus', 'eng');
        })
    }
})

// Конвертер
Object.prototype.convert = function(str, from, to) {
    // Превращаем строку в массив
    let text = new String(str);
    let output = '';
    // Цикл перебора массива с текстом
    for (var i = 0; i < text.length; i++) {
        // Если символ из перебора содержится в библиотеке
        if ( layouts[from].indexOf(text[i]) != -1 ) {
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

// Библиотека
const layouts = new Object({
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
})

/////////////////////////////////////////////////

// COPY STRING //////////////////////////////////
const copyText = new Object({
    source: document.querySelectorAll('.keylayCopy'),
    // Прослушка изменения формы
    listener: function() {
        this.source.forEach((el,i) => {
            let target = el.getAttribute('target');
            el.addEventListener('click', () => {
                // Диапазон выделения
                let select = new Function(`${target}.source.select();${target}.source.setSelectionRange(0, ${target}.source.value.length);`);
                select();
                // Копирование в буфер
                document.execCommand("copy");
                // Снимаем выделение
                window.getSelection().removeAllRanges()
            })
        })
    }
})
/////////////////////////////////////////////////


// Включить прослушку
inputEng.listener();
inputRus.listener();
copyText.listener();