const defaultSettings = {
    theme: "light",
    colorScheme: 'orange',
    fontFamily: 'Roboto',
    fontSize: '16',
    panelVisible: 'visible',
    bgImage: '',
    blurBg: 'noblur'
};

// загрузка настроек из localStorage
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('userSettings'));
    return settings ? settings : defaultSettings;
}

// применение настроек
function applySettings(settings) {
    // Применение темы
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(settings.theme);

    // Применение цветовой схемы
    document.body.classList.remove('orange', 'blue', 'gray');
    document.body.classList.add(settings.colorScheme);

    // Применение шрифтов
    document.body.style.fontFamily = settings.fontFamily;
    document.body.style.fontSize = settings.fontSize + 'px';

    // Применение фонового изображения
    const bgImageContainer = document.querySelector('.bg-image');
    if (bgImageContainer) {
        if (settings.bgImage) {
            bgImageContainer.innerHTML = `<img src="${settings.bgImage}" alt="Фоновое изображение">`;
        } else {
            bgImageContainer.innerHTML = '';
        }
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
}

// инициализация настроек при загрузке страницы
const settings = loadSettings();
applySettings(settings);