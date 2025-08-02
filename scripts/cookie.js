// const defaultSettings = {
//     theme: "light",
//     colorScheme: 'orange',
//     fontFamily: 'Roboto',
//     fontSize: '16',
//     panelVisible: 'visible',
//     bgImage: '',
//     blurTable: 'noblur'
// };

// // Загрузка настроек из localStorage
// function loadSettings() {
//     const settings = JSON.parse(localStorage.getItem('userSettings'));
//     return settings ? settings : defaultSettings;
// }

// // Сохранение настроек в localStorage
// function saveSettings(settings) {
//     localStorage.setItem('userSettings', JSON.stringify(settings));
// }

// // Применение настроек
// function applySettings(settings) {
//     document.body.classList.remove('light', 'dark');
//     document.body.classList.add(settings.theme);

//     document.body.classList.remove('orange', 'blue', 'gray');
//     document.body.classList.add(settings.colorScheme);

//     document.body.style.fontFamily = settings.fontFamily;
//     document.body.style.fontSize = settings.fontSize + 'px';

//     const styledTitleElements = document.querySelectorAll('.styled-title');
//     styledTitleElements.forEach(elementTitle => {
//         elementTitle.style.fontSize = (settings.fontSize * 1.2) + 'px';
//     });
//     const styledTextElements = document.querySelectorAll('.styled-text');
//     styledTextElements.forEach(elementText => {
//         elementText.style.fontSize = settings.fontSize + 'px';
//     });
//     const styledSubtextElements = document.querySelectorAll('.styled-subtext');
//     styledSubtextElements.forEach(elementSubtext => {
//         elementSubtext.style.fontSize = (settings.fontSize * 0.9) + 'px';
//     });

//     // Обновление элементов интерфейса
//     document.getElementById('theme-app').value = settings.theme;
//     document.getElementById('color-scheme').value = settings.colorScheme;
//     document.getElementById('visible-panel-select').value = settings.panelVisible;
//     document.querySelector('.modal-fonts-item-example.font-family span').textContent = settings.fontFamily;
//     document.querySelector('.modal-fonts-item-example.font-size span').textContent = settings.fontSize;
//     document.querySelector('.modal-fonts-example-text span').style.fontFamily = settings.fontFamily;
//     document.querySelector('.modal-fonts-example-text span').style.fontSize = settings.fontSize + 'px';

//     const mainPanel = document.querySelector('.main_content-panel');
//     if (mainPanel) {
//         mainPanel.classList.remove('novisible-panel', 'visible-panel');
//         mainPanel.classList.add(settings.panelVisible + '-panel');
//     }

//     // Применение фонового изображения
//     const bgImageContainer = document.querySelector('.bg-image');
//     if (bgImageContainer) {
//         if (settings.bgImage) {
//             bgImageContainer.innerHTML = `<img src="${settings.bgImage}" alt="Фоновое изображение">`;
//         } else {
//             bgImageContainer.innerHTML = '';
//         }
//     }

//     // применение блюра
//     const mainContentTable = document.querySelector('.main_content-table');
//     if (mainContentTable) {
//         mainContentTable.classList.remove('noblur', 'blur');
//         mainContentTable.classList.add(settings.blurTable);
//     }
// }

// // Инициализация настроек при загрузке страницы
// const settings = loadSettings();
// applySettings(settings);

// // Обработчики событий для выбора фонового изображения
// const allBgImages = document.querySelectorAll('.modal-bg-image-card');
// allBgImages.forEach((image, index) => {
//     image.addEventListener('click', () => {
//         allBgImages.forEach(img => img.classList.remove('active'));
//         image.classList.add('active');
//         const newBgSrc = image.querySelector('img').src;
//         settings.bgImage = newBgSrc; // Обновляем bgImage в настройках
//     });
// });

// // Обработчик кнопки "Применить"
// document.querySelector('.modal-bg-image-btn.accept').addEventListener('click', () => {
//     saveSettings(settings);
//     applySettings(settings);
//     document.querySelector('.modal-bg-image').classList.remove('active'); 
// });

// // Обработчик кнопки "Удалить фон"
// document.querySelector('.modal-bg-image-btn.delete').addEventListener('click', () => {
//     settings.bgImage = '';
//     document.querySelector('.bg-image').innerHTML = '';
//     saveSettings(settings);
//     applySettings(settings);
//     allBgImages.forEach(image => {
//         image.classList.remove('active');
//     });
//     document.querySelector('.modal-bg-image').classList.remove('active');
// });

// // Обработчик кнопки "Отменить"
// document.querySelector('.modal-bg-image-btn.cancel').addEventListener('click', () => {
//     document.querySelector('.modal-bg-image').classList.remove('active');
// });

// // Проверка состояния bgImage при загрузке страницы настроек
// if (settings.bgImage) {
//     const activeImage = Array.from(allBgImages).find(image => {
//         return image.querySelector('img').src === settings.bgImage;
//     });
//     if (activeImage) {
//         activeImage.classList.add('active'); // Выделяем активное изображение
//     }
// }

// // Функция для применения темы
// function applyTheme(theme) {
//     document.body.classList.remove('light', 'dark');
//     document.body.classList.add(theme);
// }

// // Функция для применения цветовой схемы
// function applyColorScheme(colorScheme) {
//     document.body.classList.remove('orange', 'blue', 'gray');
//     document.body.classList.add(colorScheme);
// }

// // Функция для изменения видимости панели
// function applyMainPanel(panelVisible) {
//     document.querySelector('.main_content-panel').classList.remove('novisible-panel', 'visible-panel');
//     document.querySelector('.main_content-panel').classList.add(panelVisible + '-panel ');
// }
// // Функция для применения блюра к таблице
// function applyMainTable(blurTable) {
//     document.querySelector('.main_content-table').classList.remove('noblur', 'blur');
//     document.querySelector('.main_content-table').classList.add(blurTable);
// }

// // Обработчик изменения темы
// document.getElementById('theme-app').addEventListener('change', (event) => {
//     settings.theme = event.target.value;
//     saveSettings(settings);
//     applyTheme(settings.theme);
// });

// // Обработчик изменения цветовой схемы
// document.getElementById('color-scheme').addEventListener('change', (event) => {
//     settings.colorScheme = event.target.value;
//     saveSettings(settings);
//     applyColorScheme(settings.colorScheme);
// });

// // Обработчик изменения видимости панели
// document.getElementById('visible-panel-select').addEventListener('change', (event) => {
//     settings.panelVisible = event.target.value; // 'visible' или 'novisible'
//     saveSettings(settings);
//     applyMainPanel(settings.panelVisible);
// });
// // Обработчик изменения блюра таблицы
// document.getElementById('blur-table').addEventListener('change', (event) => {
//     settings.blurTable = event.target.value;
//     saveSettings(settings);
//     applyMainTable(settings.blurTable);
// });

// // Обработчик выбора шрифта
// const fontCards = document.querySelectorAll('.modal-fonts-item-card.ff');
// fontCards.forEach(card => {
//     card.addEventListener('click', (event) => {
//         const selectedFont = event.target.textContent;
//         settings.fontFamily = selectedFont;
//         document.querySelector('.modal-fonts-item-example.font-family span').textContent = selectedFont;
//         document.querySelector('.modal-fonts-example-text span').style.fontFamily = selectedFont;
//         saveSettings(settings);
//     });
// });

// // Обработчик выбора размера шрифта
// const sizeCards = document.querySelectorAll('.modal-fonts-item-card.fs');
// sizeCards.forEach(card => {
//     card.addEventListener('click', (event) => {
//         const selectedSize = event.target.textContent;
//         settings.fontSize = selectedSize;
//         document.querySelector('.modal-fonts-item-example.font-size span').textContent = selectedSize;
//         document.querySelector('.modal-fonts-example-text span').style.fontSize = selectedSize + 'px';
//         saveSettings(settings);
//     });
// });

// // Обработчик кнопки "применить" в модальном окне
// document.querySelector('.modal-fonts-btn.accept').addEventListener('click', () => {
//     const selectedFont = document.querySelector('.modal-fonts-item-example.font-family span').textContent;
//     const selectedSize = document.querySelector('.modal-fonts-item-example.font-size span').textContent;

//     settings.fontFamily = selectedFont;
//     settings.fontSize = selectedSize;

//     saveSettings(settings);
//     applySettings(settings);

//     // Закрыть модальное окно
//     document.querySelector('.modal-fonts').classList.remove('active');
// });

// // Обработчик кнопки "отмена" в модальном окне
// document.querySelector('.modal-fonts-btn.cancel').addEventListener('click', () => {
//     // Закрыть модальное окно
//     document.querySelector('.modal-fonts').classList.remove('active');
// });

// // Функция для сброса настроек
// function resetSettings() {
//     // Удаляем сохраненные настройки
//     localStorage.removeItem('userSettings');
    
//     // Применяем настройки по умолчанию
//     applySettings(defaultSettings);
    
//     // Обновляем UI элементы
//     document.getElementById('theme-app').value = defaultSettings.theme;
//     document.getElementById('color-scheme').value = defaultSettings.colorScheme;
//     document.getElementById('visible-panel-select').value = defaultSettings.panelVisible;
//     document.getElementById('blur-table').value = defaultSettings.blurTable;
    
//     // Обновляем отображение шрифта и размера
//     document.querySelector('.modal-fonts-item-example.font-family span').textContent = defaultSettings.fontFamily;
//     document.querySelector('.modal-fonts-item-example.font-size span').textContent = defaultSettings.fontSize;
    
//     // Применяем шрифт и размер к тексту
//     document.querySelector('.modal-fonts-example-text span').style.fontFamily = defaultSettings.fontFamily;
//     document.querySelector('.modal-fonts-example-text span').style.fontSize = defaultSettings.fontSize + 'px';
// }

// // Обработчик кнопки сброса
// document.getElementById('reset-settings').addEventListener('click', resetSettings);

// // Применение настроек при загрузке страницы
// applySettings(settings);


const defaultSettings = {
    theme: "light",
    colorScheme: 'orange',
    fontFamily: 'Roboto',
    fontSize: '16',
    panelVisible: 'visible',
    bgImage: '',
    blurTable: 'noblur'
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
    const styledSubtextElements = document.querySelectorAll('.styled-subtext');
    styledSubtextElements.forEach(elementSubtext => {
        elementSubtext.style.fontSize = (settings.fontSize * 0.9) + 'px';
    });

    // Обновление элементов интерфейса
    document.getElementById('theme-app').value = settings.theme;
    document.getElementById('color-scheme').value = settings.colorScheme;
    document.getElementById('visible-panel-select').value = settings.panelVisible;
    document.getElementById('blur-table').value = settings.blurTable; // Устанавливаем значение для blurTable
    document.querySelector('.modal-fonts-item-example.font-family span').textContent = settings.fontFamily;
    document.querySelector('.modal-fonts-item-example.font-size span').textContent = settings.fontSize;
    document.querySelector('.modal-fonts-example-text span').style.fontFamily = settings.fontFamily;
    document.querySelector('.modal-fonts-example-text span').style.fontSize = settings.fontSize + 'px';

    const mainPanel = document.querySelector('.main_content-panel');
    if (mainPanel) {
        mainPanel.classList.remove('novisible-panel', 'visible-panel');
        mainPanel.classList.add(settings.panelVisible + '-panel');
    }

    // Применение фонового изображения
    const bgImageContainer = document.querySelector('.bg-image');
    if (bgImageContainer) {
        if (settings.bgImage) {
            bgImageContainer.innerHTML = `<img src="${settings.bgImage}" alt="Фоновое изображение">`;
        } else {
            bgImageContainer.innerHTML = '';
        }
    }

    // Применение блюра
    const mainContentTable = document.querySelector('.main_content-table');
    if (mainContentTable) {
        mainContentTable.classList.remove('noblur', 'blur');
        mainContentTable.classList.add(settings.blurTable);
    }
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
    settings.blurTable = event.target.value;
    saveSettings(settings);
    applyMainTable(settings.blurTable);
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
    
    // Применяем настройки по умолчанию
    applySettings(defaultSettings);
    
    // Обновляем UI элементы
    document.getElementById('theme-app').value = defaultSettings.theme;
    document.getElementById('color-scheme').value = defaultSettings.colorScheme;
    document.getElementById('visible-panel-select').value = defaultSettings.panelVisible;
    document.getElementById('blur-table').value = defaultSettings.blurTable; // Устанавливаем значение для blurTable
    
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
