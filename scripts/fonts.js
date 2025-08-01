const btnSelectFont = document.getElementById('btn-select-font');
const modalFonts = document.querySelector('.modal-fonts');
const btnSelectFontAccept = document.querySelector('.modal-fonts-btn.accept');
const btnSelectFontClose = document.querySelector('.modal-fonts-btn.cancel');
const selectFontFamily = document.querySelector('.modal-fonts-item-example.font-family span');
const selectFontSize = document.querySelector('.modal-fonts-item-example.font-size span');
const exampleText = document.querySelector('.modal-fonts-example-text span');

// Устанавливаем значения по умолчанию
let currentFontFamily = getCookie('font-family') || 'Roboto';
let currentFontSize = getCookie('font-size') || '16';

// Функция для обновления примера текста
function updateExampleText() {
    exampleText.style.fontFamily = currentFontFamily;
    exampleText.style.fontSize = currentFontSize + 'px';
    exampleText.textContent = 'AaBbYyZz'; // Пример текста
}

// Функция для установки куки
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    // document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// Функция для получения значения куки
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
}

// Открытие модального окна
btnSelectFont.addEventListener('click', () => {
    modalFonts.classList.add('active');
    selectFontFamily.textContent = currentFontFamily;
    selectFontSize.textContent = currentFontSize; // Исправлено: вывод размера в правильное поле
    updateExampleText();
});

// Закрытие модального окна без сохранения
btnSelectFontClose.addEventListener('click', () => {
    modalFonts.classList.remove('active');
});

// Применение выбранного шрифта и размера
btnSelectFontAccept.addEventListener('click', () => {
    // Удаляем старые классы шрифта и размера
    document.body.classList.remove(`font${currentFontFamily}`);
    document.body.classList.remove(`fontSize${currentFontSize}`);

    // Сохраняем новые значения в куки
    setCookie('font-family', currentFontFamily, 7); // Сохраняем шрифт в куки на 7 дней
    setCookie('font-size', currentFontSize, 7); // Сохраняем размер в куки на 7 дней

    // Добавляем новые классы к body
    document.body.classList.add(`font${currentFontFamily}`);
    document.body.classList.add(`fontSize${currentFontSize}`);

    modalFonts.classList.remove('active');
});

// Обработчики для смены шрифта
const fontCards = document.querySelectorAll('.modal-fonts-item-card');
fontCards.forEach(card => {
    card.addEventListener('click', () => {
        // Удаляем класс active у всех карточек
        fontCards.forEach(c => c.classList.remove('active'));
        // Добавляем класс active к выбранной карточке
        card.classList.add('active');
        // Обновляем текущее семейство шрифта
        currentFontFamily = card.textContent;
        selectFontFamily.textContent = currentFontFamily;
        updateExampleText();
    });
});

// Обработчики для смены размера
const sizeCards = document.querySelectorAll('.modal-fonts-item-card.fw span');
sizeCards.forEach(card => {
    card.addEventListener('click', () => {
        // Удаляем класс active у всех карточек
        sizeCards.forEach(c => c.classList.remove('active'));
        // Добавляем класс active к выбранной карточке
        card.classList.add('active');
        // Обновляем текущий размер шрифта
        currentFontSize = card.textContent;
        selectFontSize.textContent = currentFontSize; // Исправлено: вывод размера в правильное поле
        updateExampleText();
    });
});

// Инициализация значений по умолчанию
updateExampleText();

// Применение шрифта и размера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Устанавливаем классы для body
    document.body.classList.add(`font${currentFontFamily}`);
    document.body.classList.add(`fontSize${currentFontSize}`);
});
