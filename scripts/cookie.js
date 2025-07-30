const defaultSettings = {
    theme: "light",
    colorScheme: 'orange',
    fontFamily: 'Roboto',
    fontSize: '16'
};

// загрузка настроек из localStorage
function loadSettings() {
    // const settings = JSON.parse(localStorage.getItem('userSettings'));
    // return settings ? settings : defaultSettings;
    const settings = JSON.parse(localStorage.getItem('userSettings'));
    return settings ? settings : defaultSettings;
}

// применение настроек
function applySettings(settings) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(settings.theme);

    document.body.classList.remove('orange', 'blue', 'gray');
    document.body.classList.add(settings.colorScheme);

    document.body.style.fontFamily = settings.fontFamily;
    // document.querySelector('.modal-fonts-item-example.font-family span').textContent = settings.fontFamily;

    document.body.style.fontSize = settings.fontSize + 'px';
    const styledTitleElements = document.querySelectorAll('.styled-title');
    styledTitleElements.forEach(elementTitle => {
        elementTitle.style.fontSize = (settings.fontSize * 1.2) + 'px';
    });
    const styledTextElements = document.querySelectorAll('.styled-text');
    styledTextElements.forEach(elementText => {
        elementText.style.fontSize = settings.fontSize + 'px';
    });
    const styledSubextElements = document.querySelectorAll('.styled-subtext');
    styledSubextElements.forEach(elementSubtext => {
        elementSubtext.style.fontSize = (settings.fontSize * .9) + 'px';
    });
    // document.querySelector('.modal-fonts-item-example.font-size span').textContent = settings.fontSize;

    // обновление элементов интерфейса
    document.getElementById('theme-app').value = settings.theme;
    document.getElementById('color-scheme').value = settings.colorScheme;
    document.querySelector('.modal-fonts-item-example.font-family span').textContent = settings.fontFamily;
    document.querySelector('.modal-fonts-item-example.font-size span').textContent = settings.fontSize;
    document.querySelector('.modal-fonts-example-text span').style.fontFamily = settings.fontFamily;
    document.querySelector('.modal-fonts-example-text span').style.fontSize = settings.fontSize + 'px';
}

// сохранение настроек в localStorage
function saveSettings(settings) {
    localStorage.setItem('userSettings', JSON.stringify(settings));
}

// инициализация настроек при загрузке страницы
const settings = loadSettings();
applySettings(settings);

// Функция для применения цветовой схемы
function applyColorScheme(colorScheme) {
    console.log('цветовая схема: ', colorScheme);
    document.body.classList.remove('orange', 'blue', 'gray'); // Удаляем только цветовые схемы
    document.body.classList.add(colorScheme);
}
// Функция для применения темы
function applyTheme(theme) {
    console.log('тема: ', theme);
    document.body.classList.remove('light', 'dark'); // Удаляем только темы
    document.body.classList.add(theme);
}

// обработчик изменения темы
// document.getElementById('theme-app').addEventListener('change', (event) => {
//     settings.theme = event.target.value;
//     saveSettings(settings);
//     applySettings(settings);
// });
document.getElementById('theme-app').addEventListener('change', (event) => {
    settings.theme = event.target.value;
    saveSettings(settings);
    applyTheme(settings.theme); // Применяем только тему
});

// обработчик изменения цветовой схемы
// document.getElementById('color-scheme').addEventListener('change', (event) => {
//     settings.colorScheme = event.target.value;
//     saveSettings(settings);
//     applySettings(settings);
// });
document.getElementById('color-scheme').addEventListener('change', (event) => {
    settings.colorScheme = event.target.value;
    saveSettings(settings);
    applyColorScheme(settings.colorScheme); // Применяем только цветовую схему
});

// обработчик выбора шрифта
// const fontCards = document.querySelectorAll('.modal-fonts-item-card.ff');
// fontCards.forEach(card => {
//     card.addEventListener('click', (event) => {
//         const selectedFont = event.target.textContent;
//         document.querySelector('.modal-fonts-item-example.font-family span').textContent = selectedFont;
//         document.querySelector('.modal-fonts-example-text span').style.fontFamily = selectedFont;
//     });
// });
const fontCards = document.querySelectorAll('.modal-fonts-item-card.ff');
fontCards.forEach(card => {
    card.addEventListener('click', (event) => {
        const selectedFont = event.target.textContent;
        settings.fontFamily = selectedFont; // Сохраняем выбранный шрифт
        document.querySelector('.modal-fonts-item-example.font-family span').textContent = selectedFont;
        document.querySelector('.modal-fonts-example-text span').style.fontFamily = selectedFont;
        saveSettings(settings); // Сохраняем настройки
    });
});

// обработчик выбора размера шрифта
// const sizeCards = document.querySelectorAll('.modal-fonts-item-card.fs');
// sizeCards.forEach(card => {
//     card.addEventListener('click', (event) => {
//         const selectedSize = event.target.textContent;
//         document.querySelector('.modal-fonts-item-example.font-size span').textContent = selectedSize;
//         document.querySelector('.modal-fonts-example-text span').style.fontSize = selectedSize + 'px';
//     });
// });
const sizeCards = document.querySelectorAll('.modal-fonts-item-card.fs');
sizeCards.forEach(card => {
    card.addEventListener('click', (event) => {
        const selectedSize = event.target.textContent;
        settings.fontSize = selectedSize; // Сохраняем выбранный размер
        document.querySelector('.modal-fonts-item-example.font-size span').textContent = selectedSize;
        document.querySelector('.modal-fonts-example-text span').style.fontSize = selectedSize + 'px';
        saveSettings(settings); // Сохраняем настройки
    });
});

// обработчик кнопки "применить" в модальном окне
document.querySelector('.modal-fonts-btn.accept').addEventListener('click', () => {
    const selectedFont = document.querySelector('.modal-fonts-item-example.font-family span').textContent;
    const selectedSize = document.querySelector('.modal-fonts-item-example.font-size span').textContent;

    settings.fontFamily = selectedFont;
    settings.fontSize = selectedSize;

    saveSettings(settings);
    applySettings(settings);

    // закрыть модальное окно
    document.querySelector('.modal-fonts').classList.remove('active');
});

// обработчик кнопки "отмена" в модальном окне
document.querySelector('.modal-fonts-btn.cancel').addEventListener('click', () => {
    // закрыть модальное окно
    document.querySelector('.modal-fonts').classList.remove('active');
});

// // Функция для сброса настроек
// function resetSettings() {
//     // Удаляем сохраненные настройки
//     localStorage.removeItem('userSettings');
    
//     // Применяем настройки по умолчанию
//     applySettings(defaultSettings);
    
//     // Обновляем UI элементы
//     document.getElementById('theme-app').value = defaultSettings.theme;
//     document.getElementById('color-scheme').value = defaultSettings.colorScheme;
    
//     // Обновляем отображение шрифта и размера
//     document.querySelector('.modal-fonts-item-example.font-family span').textContent = defaultSettings.fontFamily;
//     document.querySelector('.modal-fonts-item-example.font-size span').textContent = defaultSettings.fontSize;
//     document.querySelector('.modal-fonts-example-text span').style.fontFamily = defaultSettings.fontFamily;
//     document.querySelector('.modal-fonts-example-text span').style.fontSize = defaultSettings.fontSize + 'px';
// }

// // Обработчик кнопки сброса
// document.getElementById('reset-settings').addEventListener('click', resetSettings);
// Функция для сброса настроек
function resetSettings() {
    // Удаляем сохраненные настройки
    localStorage.removeItem('userSettings');
    
    // Применяем настройки по умолчанию
    applySettings(defaultSettings);
    
    // Обновляем UI элементы
    document.getElementById('theme-app').value = defaultSettings.theme;
    document.getElementById('color-scheme').value = defaultSettings.colorScheme;
    
    // Обновляем отображение шрифта и размера
    document.querySelector('.modal-fonts-item-example.font-family span').textContent = defaultSettings.fontFamily;
    document.querySelector('.modal-fonts-item-example.font-size span').textContent = defaultSettings.fontSize;
    
    // Применяем шрифт и размер к тексту
    document.querySelector('.modal-fonts-example-text span').style.fontFamily = defaultSettings.fontFamily;
    document.querySelector('.modal-fonts-example-text span').style.fontSize = defaultSettings.fontSize + 'px';
}
// Обработчик кнопки сброса
document.getElementById('reset-settings').addEventListener('click', resetSettings);


// Применение настроек при загрузке страницы
applySettings(settings);

document.addEventListener('DOMContentLoaded', () => {
    const settings = loadSettings();
    applySettings(settings);
});

// styled-title
// styled-text
// styled-subtext