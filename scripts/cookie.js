const defaultSettings = {
    theme: "light",
    colorScheme: 'orange',
    fontFamily: 'Roboto',
    fontSize: '16',
    panelVisible: 'visible',
    bgImage: '',
    blurBg: 'noblur'
    // invertedText: 'false'
};

// Загрузка настроек из localStorage
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('userSettings'));
    return settings ? settings : defaultSettings;
}

// Сохранение настроек в localStorage
function saveSettings(settings) {
    localStorage.setItem('userSettings', JSON.stringify(settings));
}

// Применение настроек
function applySettings(settings) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(settings.theme);

    document.body.classList.remove('orange', 'blue', 'gray');
    document.body.classList.add(settings.colorScheme);

    document.body.style.fontFamily = settings.fontFamily;
    document.body.style.fontSize = settings.fontSize + 'px';

    const styledTitleElements = document.querySelectorAll('.styled-title');
    styledTitleElements.forEach(elementTitle => {
        elementTitle.style.fontSize = (settings.fontSize * 1.2) + 'px';
    });
    const styledTextElements = document.querySelectorAll('.styled-text');
    styledTextElements.forEach(elementText => {
        elementText.style.fontSize = settings.fontSize + 'px';
    });
    const styledTextProfileTitleElements = document.querySelectorAll('.setting-profile-card-title.styled-text');
    styledTextProfileTitleElements.forEach(elementText => {
        elementText.style.fontSize = settings.fontSize + 'px';
        elementText.style.fontWeight = 'bold';
    });
    const styledSubtextElements = document.querySelectorAll('.styled-subtext');
    styledSubtextElements.forEach(elementSubtext => {
        elementSubtext.style.fontSize = (settings.fontSize * 0.9) + 'px';
    });

    // Обновление элементов интерфейса
    document.getElementById('theme-app').value = settings.theme;
    document.getElementById('color-scheme').value = settings.colorScheme;
    document.getElementById('visible-panel-select').value = settings.panelVisible;
    document.getElementById('blur-table').value = settings.blurBg;
    document.querySelector('.modal-fonts-item-example.font-family span').textContent = settings.fontFamily;
    document.querySelector('.modal-fonts-item-example.font-size span').textContent = settings.fontSize;
    document.querySelector('.modal-fonts-example-text span').style.fontFamily = settings.fontFamily;
    document.querySelector('.modal-fonts-example-text span').style.fontSize = settings.fontSize + 'px';

    // Изменение размера изображений в меню
    const menuImages = document.querySelectorAll('.sidebar_settings-menu-item img');
    if (menuImages.length > 0) {
        menuImages.forEach(img => {
            img.style.width = (settings.fontSize * 1.1) + 'px'; // Устанавливаем ширину изображения
            img.style.height = (settings.fontSize * 1.1) + 'px'; // Устанавливаем высоту изображения
            img.style.objectFit = 'contain'; // Убедитесь, что изображение сохраняет пропорции
        });
    } else {
        console.warn('Изображения не найдены в меню.');
    }
    const menuPointImages = document.querySelectorAll('.setting-item-card-title-image');
    if (menuPointImages.length > 0) {
        menuPointImages.forEach(img => {
            img.style.width = (settings.fontSize * 1.1) + 'px'; // Устанавливаем ширину изображения
            img.style.height = (settings.fontSize * 1.1) + 'px'; // Устанавливаем высоту изображения
        });
    } else {
        console.warn('Изображения не найдены в меню.');
    }
    const menuPointImagesImg = document.querySelectorAll('.setting-item-card-title-image img');
    if (menuPointImagesImg.length > 0) {
        menuPointImagesImg.forEach(img => {
            img.style.width = (settings.fontSize * 1.1) + 'px'; // Устанавливаем ширину изображения
            img.style.height = (settings.fontSize * 1.1) + 'px'; // Устанавливаем высоту изображения
            img.style.objectFit = 'contain'; // Убедитесь, что изображение сохраняет пропорции
        });
    } else {
        console.warn('Изображения не найдены в меню.');
    }

    const mainPanel = document.querySelector('.main_content-panel');
    if (mainPanel) {
        mainPanel.classList.remove('novisible-panel', 'visible-panel');
        mainPanel.classList.add(settings.panelVisible + '-panel');
    }

    // Применение фонового изображения
    const bgImageContainer = document.querySelector('.bg-image');
    if (bgImageContainer) {
        if (settings.bgImage) {
            bgImageContainer.innerHTML = `<img src="${settings.bgImage}" alt="">`;
        } else {
            bgImageContainer.innerHTML = '';
        }
    }

    // Применение блюра
    const mainContentTable = document.querySelector('.main_content-table');
    if (mainContentTable) {
        mainContentTable.classList.remove('noblur', 'blur');
        mainContentTable.classList.add(settings.blurBg);
    }

    if (settings.blurBg === 'blur') {
        document.querySelector('.sidebar').classList.remove('noblur');
        document.querySelector('.sidebar').classList.add('blur');
        document.querySelector('.settings_container').classList.remove('noblur');
        document.querySelector('.settings_container').classList.add('blur');
    } else {
        document.querySelector('.sidebar').classList.add('noblur');
        document.querySelector('.sidebar').classList.remove('blur');
        document.querySelector('.settings_container').classList.add('noblur');
        document.querySelector('.settings_container').classList.remove('blur');
    }

    // инвертирование текста
    // if (settings.invertedText === 'true') {
    //     document.querySelector('.main').classList.add('text-inverted');
    // } else if (settings.invertedText === 'false') {
    //     document.querySelector('.main').classList.remove('text-inverted');
    // }
}

// Инициализация настроек при загрузке страницы
const settings = loadSettings();
applySettings(settings);

// Обработчики событий для выбора фонового изображения
const allBgImages = document.querySelectorAll('.modal-bg-image-card');
allBgImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        allBgImages.forEach(img => img.classList.remove('active'));
        image.classList.add('active');
        const newBgSrc = image.querySelector('img').src;
        settings.bgImage = newBgSrc; // Обновляем bgImage в настройках
    });
});

// Обработчик кнопки "Применить"
document.querySelector('.modal-bg-image-btn.accept').addEventListener('click', () => {
    saveSettings(settings);
    applySettings(settings);
    document.querySelector('.modal-bg-image').classList.remove('active'); 
});

// Обработчик кнопки "Удалить фон"
document.querySelector('.modal-bg-image-btn.delete').addEventListener('click', () => {
    settings.bgImage = '';
    document.querySelector('.bg-image').innerHTML = '';
    saveSettings(settings);
    applySettings(settings);
    allBgImages.forEach(image => {
        image.classList.remove('active');
    });
    document.querySelector('.modal-bg-image').classList.remove('active');
});

// Обработчик кнопки "Отменить"
document.querySelector('.modal-bg-image-btn.cancel').addEventListener('click', () => {
    document.querySelector('.modal-bg-image').classList.remove('active');
});

// Проверка состояния bgImage при загрузке страницы настроек
if (settings.bgImage) {
    const activeImage = Array.from(allBgImages).find(image => {
        return image.querySelector('img').src === settings.bgImage;
    });
    if (activeImage) {
        activeImage.classList.add('active'); // Выделяем активное изображение
    }
}

// Функция для применения темы
function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
}

// Функция для применения цветовой схемы
function applyColorScheme(colorScheme) {
    document.body.classList.remove('orange', 'blue', 'gray');
    document.body.classList.add(colorScheme);
}

// Функция для изменения видимости панели
function applyMainPanel(panelVisible) {
    document.querySelector('.main_content-panel').classList.remove('novisible-panel', 'visible-panel');
    document.querySelector('.main_content-panel').classList.add(panelVisible + '-panel ');
}
// Функция для изменения блюра интерфейса
function applyBlur(blurBg) {
     const mainContentTable = document.querySelector('.main_content-table');
    if (mainContentTable) {
        mainContentTable.classList.remove('noblur', 'blur'); // Удаляем старые классы
        mainContentTable.classList.add(blurBg); // Добавляем новый класс
    }
    // Дополнительно: обновляем другие элементы, если необходимо
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('blur', blurBg === 'blur');
        sidebar.classList.toggle('noblur', blurBg === 'noblur');
    }
    const settingsContainer = document.querySelector('.settings_container');
    if (settingsContainer) {
        settingsContainer.classList.toggle('blur', blurBg === 'blur');
        settingsContainer.classList.toggle('noblur', blurBg === 'noblur');
    }
}

// Обработчик изменения темы
document.getElementById('theme-app').addEventListener('change', (event) => {
    settings.theme = event.target.value;
    saveSettings(settings);
    applyTheme(settings.theme);
});

// Обработчик изменения цветовой схемы
document.getElementById('color-scheme').addEventListener('change', (event) => {
    settings.colorScheme = event.target.value;
    saveSettings(settings);
    applyColorScheme(settings.colorScheme);
});

// Обработчик изменения видимости панели
document.getElementById('visible-panel-select').addEventListener('change', (event) => {
    settings.panelVisible = event.target.value; // 'visible' или 'novisible'
    saveSettings(settings);
    applyMainPanel(settings.panelVisible);
});

// Обработчик изменения блюра таблицы
document.getElementById('blur-table').addEventListener('change', (event) => {
    settings.blurBg = event.target.value; // Обновляем значение в настройках
    saveSettings(settings); // Сохраняем изменения в localStorage
    applyBlur(settings.blurBg); // Применяем изменения к интерфейсу
});

// Обработчик выбора шрифта
const fontCards = document.querySelectorAll('.modal-fonts-item-card.ff');
fontCards.forEach(card => {
    card.addEventListener('click', (event) => {
        const selectedFont = event.target.textContent;
        settings.fontFamily = selectedFont;
        document.querySelector('.modal-fonts-item-example.font-family span').textContent = selectedFont;
        document.querySelector('.modal-fonts-example-text span').style.fontFamily = selectedFont;
        saveSettings(settings);
    });
});

// Обработчик выбора размера шрифта
const sizeCards = document.querySelectorAll('.modal-fonts-item-card.fs');
sizeCards.forEach(card => {
    card.addEventListener('click', (event) => {
        const selectedSize = event.target.textContent;
        settings.fontSize = selectedSize;
        document.querySelector('.modal-fonts-item-example.font-size span').textContent = selectedSize;
        document.querySelector('.modal-fonts-example-text span').style.fontSize = selectedSize + 'px';
        saveSettings(settings);
    });
});

// Обработчик кнопки "применить" в модальном окне
document.querySelector('.modal-fonts-btn.accept').addEventListener('click', () => {
    const selectedFont = document.querySelector('.modal-fonts-item-example.font-family span').textContent;
    const selectedSize = document.querySelector('.modal-fonts-item-example.font-size span').textContent;

    settings.fontFamily = selectedFont;
    settings.fontSize = selectedSize;

    saveSettings(settings);
    applySettings(settings);

    // Закрыть модальное окно
    document.querySelector('.modal-fonts').classList.remove('active');
});

// Обработчик кнопки "отмена" в модальном окне
document.querySelector('.modal-fonts-btn.cancel').addEventListener('click', () => {
    // Закрыть модальное окно
    document.querySelector('.modal-fonts').classList.remove('active');
});

// Функция для сброса настроек
function resetSettings() {
    // Удаляем сохраненные настройки
    localStorage.removeItem('userSettings');
    settings.bgImage = '';
    settings.blurBg = 'noblur';
    settings.panelVisible = 'visible';
    
    // Применяем настройки по умолчанию
    applySettings(defaultSettings);
    
    // Обновляем UI элементы
    document.getElementById('theme-app').value = defaultSettings.theme;
    document.getElementById('color-scheme').value = defaultSettings.colorScheme;
    document.getElementById('visible-panel-select').value = defaultSettings.panelVisible;
    document.getElementById('blur-table').value = defaultSettings.blurBg;
    
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
applyTheme(settings.theme);
applyColorScheme(settings.colorScheme);
applyMainPanel(settings.panelVisible);
applyBlur(settings.blurBg);