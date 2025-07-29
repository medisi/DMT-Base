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

const availableFields = document.querySelectorAll('.table-cols-item');
const selectedFieldsContainer = document.getElementById('selected-fields');
// Функция для обновления выбранных полей
function updateSelectedFields() {
    // Очищаем контейнер выбранных полей
    selectedFieldsContainer.innerHTML = '';
    // Получаем активные элементы
    const activeItems = Array.from(availableFields).filter(item => item.classList.contains('active'));
    // Добавляем активные элементы в контейнер выбранных полей
    activeItems.forEach(activeItem => {
        const newItem = activeItem.cloneNode(true);
        selectedFieldsContainer.appendChild(newItem);
    });
}
// Функция для сортировки полей
function sortFields() {
    const parent = document.getElementById('available-fields');
    const items = Array.from(parent.children);
    // Сортируем элементы: сначала активные, затем неактивные
    items.sort((a, b) => {
        return (a.classList.contains('active') ? -1 : 1) - (b.classList.contains('active') ? -1 : 1);
    });
    // Очищаем родительский элемент и добавляем отсортированные элементы
    parent.innerHTML = '';
    items.forEach(item => parent.appendChild(item));
}
// Обработчики событий для активных полей
availableFields.forEach(field => {
    field.addEventListener('click', () => {
        field.classList.toggle('active');
        updateSelectedFields(); // Обновляем выбранные поля
        sortFields(); // Сортируем поля
    });
});
// Инициализация Sortable для перетаскивания
new Sortable(selectedFieldsContainer, {
    animation: 150,
    onEnd: function (evt) {
        console.log('Новый порядок:', Array.from(selectedFieldsContainer.children).map(item => item.textContent));
    }
});
// Инициализация с активными полями при загрузке страницы
updateSelectedFields();
sortFields(); // Сортируем поля при загрузке

let setBtnToggles = document.querySelectorAll('.toggle');
setBtnToggles.forEach(setBtnToggle => {

    setBtnToggle.addEventListener('click', () => {
        setBtnToggle.classList.toggle('active');

        let hasClassActive = setBtnToggle.classList.contains('active');
        // console.log(hasClassActive);
        let hasClassBorder = setBtnToggle.classList.contains('border');
        // console.log(hasClassBorder);
        let hasClassBgRow = setBtnToggle.classList.contains('bg-row');
        // console.log(hasClassBgRow);

        let buttonBorder = document.querySelector('.toggle.border');
        let buttonBgRow = document.querySelector('.toggle.bg-row');


        if (buttonBorder.classList.contains('active') === true) {
            document.querySelector('.setting-item-card-title.border').classList.remove('noactive');
            document.querySelector('.input-toggle-border').removeAttribute('disabled');
        } else if (buttonBorder.classList.contains('active') === false) {
            document.querySelector('.setting-item-card-title.border').classList.add('noactive');
            document.querySelector('.input-toggle-border').setAttribute('disabled', 'true');
        }

        if (buttonBgRow.classList.contains('active') === true) {
            document.querySelector('.setting-item-card-title.bg-row').classList.remove('noactive');
            document.querySelector('.input-toggle-bg-row').removeAttribute('disabled');
        } else if (buttonBgRow.classList.contains('active') === false) {
            document.querySelector('.setting-item-card-title.bg-row').classList.add('noactive');
            document.querySelector('.input-toggle-bg-row').setAttribute('disabled', 'true');
        }
    });
});