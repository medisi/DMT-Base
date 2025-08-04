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
            bgImageContainer.innerHTML = `<img src="${settings.bgImage}" alt="">`;
        } else {
            bgImageContainer.innerHTML = '';
        }
    }

    // Применение блюра
    // const mainContentTable = document.querySelector('.main_content-table');
    // if (mainContentTable) {
    //     mainContentTable.classList.remove('noblur', 'blur');
    //     mainContentTable.classList.add(settings.blurBg);
    // }

    if (settings.blurBg === 'blur') {
        document.querySelector('.sidebar').classList.remove('noblur');
        document.querySelector('.sidebar').classList.add('blur');
        document.querySelector('.about-project-content1').classList.remove('noblur');
        document.querySelector('.about-project-content1').classList.add('blur');
        document.querySelector('.about-project-content2').classList.remove('noblur');
        document.querySelector('.about-project-content2').classList.add('blur');
        document.querySelector('.about-project-content3').classList.remove('noblur');
        document.querySelector('.about-project-content3').classList.add('blur');
        document.querySelector('.about-project-content4').classList.remove('noblur');
        document.querySelector('.about-project-content4').classList.add('blur');
        document.querySelector('.about-project-content5').classList.remove('noblur');
        document.querySelector('.about-project-content5').classList.add('blur');
    } else {
        document.querySelector('.sidebar').classList.add('noblur');
        document.querySelector('.sidebar').classList.remove('blur');
        document.querySelector('.about-project-content1').classList.add('noblur');
        document.querySelector('.about-project-content1').classList.remove('blur');
        document.querySelector('.about-project-content2').classList.add('noblur');
        document.querySelector('.about-project-content2').classList.remove('blur');
        document.querySelector('.about-project-content3').classList.add('noblur');
        document.querySelector('.about-project-content3').classList.remove('blur');
        document.querySelector('.about-project-content4').classList.add('noblur');
        document.querySelector('.about-project-content4').classList.remove('blur');
        document.querySelector('.about-project-content5').classList.add('noblur');
        document.querySelector('.about-project-content5').classList.remove('blur');
    };

    const styledTextElements = document.querySelectorAll('.styled-text');
    styledTextElements.forEach(elementText => {
        elementText.style.fontSize = settings.fontSize + 'px';
        elementText.style.fontFamily = settings.fontFamily;
    });
}

// инициализация настроек при загрузке страницы
const settings = loadSettings();
applySettings(settings);