// Функция для установки куки
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция для получения куки
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Функция для применения темы
function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
}
// Функция для применения цветовой схемы
function applyColorScheme(colorScheme) {
    document.body.classList.remove('orange', 'blue');
    document.body.classList.add(colorScheme);
}

// При загрузке страницы применяем тему из куки
window.onload = function() {
    const savedTheme = getCookie("theme");
    const savedColorScheme = getCookie("color-scheme");
    if (savedTheme) {
        applyTheme(savedTheme);
        document.getElementById("theme-app").value = savedTheme;
    }
    if (savedColorScheme) {
        applyColorScheme(savedColorScheme);
        document.getElementById("color-scheme").value = savedColorScheme;
    }
    document.getElementById("theme-app").value = savedTheme;
    document.getElementById("color-scheme").value = savedColorScheme;
};

// Обработчик для кнопки "Применить"
document.getElementById("savePersonalization").addEventListener("click", () => {
    const selectedTheme = document.getElementById("theme-app").value;
    const selectedColorScheme = document.getElementById("color-scheme").value;

    setCookie("theme", selectedTheme, 7); // Сохраняем тему в куки на 7 дней
    setCookie("color-scheme", selectedColorScheme, 7);

    applyTheme(selectedTheme); // Применяем выбранную тему
    applyColorScheme(selectedColorScheme);
}); 



