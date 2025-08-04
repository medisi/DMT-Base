const btnSidebarHidden = document.getElementById('hidden-sidebar');
btnSidebarHidden.addEventListener('click', () => {
    document.querySelector('.sidebar.settings').classList.toggle('hidden');
});

// Получаем все элементы меню и контейнеры
const menuItems = document.querySelectorAll('.sidebar_settings-menu-item');
const contentContainers = document.querySelectorAll('.settings_container-content');
// Функция для переключения активного элемента
function setActiveSection(index) {
    // Убираем класс active у всех элементов меню и контейнеров
    menuItems.forEach(item => item.classList.remove('active'));
    contentContainers.forEach(container => container.classList.remove('active'));
    // Устанавливаем класс active и обновляем хлебные крошки
    menuItems[index].classList.add('active');
    contentContainers[index].classList.add('active');
    document.querySelector('.name_settings').textContent = menuItems[index].querySelector('span').textContent;
}
// Устанавливаем активный элемент при загрузке страницы
setActiveSection(0); // Активируем первый элемент (Профиль)
// Добавляем обработчики событий для каждого элемента меню
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        setActiveSection(index); // Переключаем активный элемент
    });
});

document.getElementById('btn-select-font').addEventListener('click', () => {
    document.querySelector('.modal-fonts').classList.add('active');
});

const modalSupport = document.querySelector('.modal-support');
const btnOpenModalSupport = document.getElementById('support-content-link');
const supportSend = document.querySelector('.modal-support-reason-btn.send');
const supportCancel = document.querySelector('.modal-support-reason-btn.cancel');
const selectModalSupport = document.getElementById('modal-support-reason-select');
const textareaModalSupport = document.getElementById('modal-support-comment-textarea');

btnOpenModalSupport.addEventListener('click', () => {
    modalSupport.classList.add('active');
});
supportCancel.addEventListener('click', () => {
    selectModalSupport.value = 'none';
    textareaModalSupport.value = '';
    modalSupport.classList.remove('active');
});

const btnOpenModalBgImage = document.getElementById('btn-select-image');
const modalBgImage = document.querySelector('.modal-bg-image');
const btnCloseModalBgImage = document.querySelector('.modal-bg-image-btn.cancel');


btnOpenModalBgImage.addEventListener('click', () => {
    modalBgImage.classList.add('active');
});
btnCloseModalBgImage.addEventListener('click', () => {
    modalBgImage.classList.remove('active');
});

// смена табов в bg image
const allTabsBgImage = document.querySelectorAll('.modal-bg-image-tab');
const allContentsBgImage = document.querySelectorAll('.modal-bg-image-content-item.cards');
function setActiveTabBgImage(index) {
    allTabsBgImage.forEach(tab => tab.classList.remove('active'));
    allContentsBgImage.forEach(content => content.classList.remove('active'));

    allTabsBgImage[index].classList.add('active');
    allContentsBgImage[index].classList.add('active');
};
setActiveTabBgImage(0);
allTabsBgImage.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        setActiveTabBgImage(index);
    });
});

function toggleClassMobMenuSet() {
    if (window.innerWidth <= 1023) {
        menuItems.forEach(menuItem => {
            menuItem.classList.add('mob');
        });
    } else {
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('mob');
        });
    }

    if (window.innerWidth <= 767) {
        document.getElementById('sidebar_settings-profile').classList.remove('active');
    } else {
        document.getElementById('sidebar_settings-profile').classList.add('active');
    }

    // Добавляем обработчики событий для элементов с классом "mob"
    addClickEventToSidebarItems();
}

// Функция для добавления обработчиков событий
function addClickEventToSidebarItems() {
    const itemsSidebarSettings = document.querySelectorAll('.sidebar_settings-menu-item.mob');
    itemsSidebarSettings.forEach(itemSidebarSettings => {
        itemSidebarSettings.removeEventListener('click', handleSidebarItemClick); // Удаляем предыдущий обработчик, если он есть
        itemSidebarSettings.addEventListener('click', handleSidebarItemClick);
    });
}

// Обработчик клика для элементов меню
function handleSidebarItemClick() {
    document.querySelector('.sidebar.settings').classList.add('hidden');
}

// Инициализация
toggleClassMobMenuSet();
window.addEventListener('resize', toggleClassMobMenuSet);
