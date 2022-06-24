// TYPING GAME //////////////////////////////////
// Форма TextArea
const library = new Object({
    source: document.querySelector('.typerLibrary'),
    counter: document.querySelector('.typerLimit'),
    // Прослушка изменения формы
    listener: function() {
        this.source.addEventListener('input',()=>{
            // Разобрать текст
            prepare();
        })        
    },
    // Разобрать текст из формы в массив
    get: function() {
        // Текст из формы
        let raw = library.source.value;
        // Обрезка лишних символов и передать в очередь в виде массива
        words.queue = raw.replace(/[()«»—–.,~"`';:_-]/g, " ").trim().split(/\s+/);
        // Счетчик введенных символов
        this.counter.innerHTML = this.source.value.length + '/1000';
    }
})

// Массив-библиотека слов для ввода
const words = new Object({
    queue: [],
    current: '',
    // Получить слово
    getWord: function() {
        // Проверка на наличие слов в очереди
        if (this.queue.length) {
            // Случайное значение из очереди
            let i = Math.floor(Math.random() * this.queue.length);
            // Случайное слово из очереди
            this.current = this.queue[i];
            // Удалить слово из очереди
            this.queue.splice(i, 1);
        } else {
            // Сообщение о завершении игры
            this.current = "Вы ввели все слова :)";
            // Остановить игру
            timer.stop()
        }
        // Отобразить слово
        showWord.set();
    }
});

// Слово
const showWord = new Object({
    source: document.querySelector('.typerWord'),
    // Показать слово на странице
    set: function() {
        this.source.innerHTML = words.current;
    }
});

// Поле ввода слова
const inputWord = new Object({
    source: document.querySelector('.typerInput'),
    position: 0,
    fail: false,
    // Прослушка изменения формы
    listener: function() {
        this.source.addEventListener('input', this.handler)
    },
    // Обработка формы
    handler: function() {
        // Запустить таймер
        timer.checkTimer();
        // Заблокировать форму TextArea
        library.source.disabled = true;
        //Позиция курсора строки
        this.position = this.value.length;
        // Есть совпадение текущего и вводимого слова
        if ( this.value == words.current ) {
            // Слово не забраковано
            this.fail = false;
            // Покрасить слово в обычный цвет
            showWord.source.classList.remove('typer__word-red')
            // Обновить счет
            score.update();
            // Получить новое слово из очереди
            words.getWord();
            // Очистить поле ввода
            this.value = '';
        }
        else if (this.value.slice(-1) != words.current[this.position-1]) {
            // Если слово не забраковано
            if (!this.fail) {
                // Забраковать слово
                this.fail = true;
                // Покрасить слово в красный цвет
                showWord.source.classList.add('typer__word-red')
                // Обновить ошибки
                accuracy.update()
            }
        }
    }
});

// Таймер
const timer = new Object({
    source: document.querySelector('.typerTimer'),
    time: 0,
    // Проверка на работу таймера
    checkTimer: function() {
        if (Boolean(this.status) == false) {
            this.start();
        }
    },
    // Запустить игру
    start: function() {
        this.status = setInterval(()=>{
            this.time++;
            this.update();
        }, 1000);
    },
    // Остановить игру
    stop: function() {
        // Заблокировать поле ввода
        inputWord.source.disabled = true;
        // Сбросить интервал
        clearInterval(this.status);
    },
    // Обновить рендер таймера на странице
    update: function() {
        this.source.innerHTML = addZero( Math.floor(this.time / 60 ) ) +':'+ addZero( this.time % 60);
    }
});

// Рестарт
const restart = new Object({
    source: document.querySelector('.typerRestart'),
    // Прослушка изменения формы
    listener: function() {
        this.source.addEventListener('click', this.restart )        
    },
    // Рестарт
    restart: function() {
        // Остановить игру
        timer.stop()
        // Сбросить таймер
        timer.time = 0;
        // Сбросить статус интервала
        timer.status = 0;
        // Обновить рендер таймера на странице
        timer.update();
        // Слово не забраковано
        this.fail = false;
        // Очистить поле ввода
        inputWord.source.value = '';
        // Покрасить слово в обычный цвет
        showWord.source.classList.remove('typer__word-red')
        // Сбросить счёт
        score.update();
        // Сбросить ошибки
        accuracy.update()
        // Разблокировать поле ввода
        inputWord.source.disabled = false;
        // Разблокировать форму TextArea
        library.source.disabled = false;
        // Подготовка к запуску
        prepare();
    }
});

// Очки
const score = new Object({
    source: document.querySelector('.typerScore'),
    points: 0,
    // Обновить счет
    update: function() {
        // Если игра продолжается увеличить счет, иначе рестарт - счет 0
        Boolean(timer.status) ? this.points += 1 : this.points = 0;
        this.source.innerHTML = this.points;
    }
});

// Очки
const accuracy = new Object({
    source: document.querySelector('.typerAcc'),
    errors: 0,
    // Обновить ошибки
    update: function() {
        // Если игра продолжается увеличить ошибки, иначе рестарт - счет 0
        Boolean(timer.status) ? this.errors += 1 : this.errors = 0;
        this.source.innerHTML = this.errors;
    }
});

// Подготовка слов
Object.prototype.prepare = function() {
    // Разобрать текст из формы в массив
    library.get();
    // Получить слово
    words.getWord();
}

// Подготовка к запуску
prepare();
// Включить прослушку
library.listener();
inputWord.listener();
restart.listener();

/////////////////////////////////////////////////