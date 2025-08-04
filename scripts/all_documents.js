const mainPanel = document.querySelector('.main_content-panel');
const btnPanelMore = document.querySelector('#btn-main-panel');

const tabPanelWindowOne = document.querySelector('.main_content-panel-header-item-title.one');
const tabPanelWindowTwo = document.querySelector('.main_content-panel-header-item-title.two');
const tabPanelWindowThree = document.querySelector('.main_content-panel-header-item-title.three');

const mainPanelWindowOne = document.querySelector('.main_content-panel-content-item.one');
const mainPanelWindowTwo = document.querySelector('.main_content-panel-content-item.two');
const mainPanelWindowThree = document.querySelector('.main_content-panel-content-item.three'); 

btnPanelMore.addEventListener('click', () => {
    mainPanel.classList.toggle('active');
    btnPanelMore.classList.toggle('active');

    // Если панель активна, открываем первую вкладку
    if (mainPanel.classList.contains('active')) {
        console.log('panel is active');
        tabPanelWindowOne.classList.add('active');
        mainPanelWindowOne.classList.add('active');
        mainPanelWindowOne.classList.add('history');
        tabPanelWindowTwo.classList.remove('active');
        tabPanelWindowThree.classList.remove('active');
    } else {
        tabPanelWindowOne.classList.remove('active');
        tabPanelWindowTwo.classList.remove('active');
        tabPanelWindowThree.classList.remove('active');
    }
});
// Функция для переключения вкладок
function switchTab(activeTab, activeWindow) {
    // Удаляем класс active у всех вкладок
    tabPanelWindowOne.classList.remove('active');
    tabPanelWindowTwo.classList.remove('active');
    tabPanelWindowThree.classList.remove('active');

    // Удаляем класс active у всех окон
    mainPanelWindowOne.classList.remove('active');
    mainPanelWindowTwo.classList.remove('active');
    mainPanelWindowThree.classList.remove('active');

    // Добавляем класс active к выбранной вкладке и окну
    activeTab.classList.add('active');
    activeWindow.classList.add('active');
}

// Обработчики событий для вкладок
tabPanelWindowOne.addEventListener('click', () => {
    if (!mainPanel.classList.contains('active')) {
        mainPanel.classList.add('active');
        btnPanelMore.classList.add('active');
    }
    switchTab(tabPanelWindowOne, mainPanelWindowOne);
});

tabPanelWindowTwo.addEventListener('click', () => {
    if (!mainPanel.classList.contains('active')) {
        mainPanel.classList.add('active');
        btnPanelMore.classList.add('active');
    }
    switchTab(tabPanelWindowTwo, mainPanelWindowTwo);
});

tabPanelWindowThree.addEventListener('click', () => {
    if (!mainPanel.classList.contains('active')) {
        mainPanel.classList.add('active');
        btnPanelMore.classList.add('active');
    }
    switchTab(tabPanelWindowThree, mainPanelWindowThree);
});

let allRows = document.querySelectorAll('.main_content-table tbody tr');
let lastActiveRow = null; // Переменная для хранения последней активной строки

allRows.forEach(allRow => {
    allRow.addEventListener('click', (event) => {
        // Проверяем, был ли клик двойным
        if (event.detail === 2) {
            // Переход на другую страницу
            window.location.href = '../pages/open_document.html';
        } else {
            // Удаляем класс active у предыдущей строки, если она есть
            if (lastActiveRow) {
                lastActiveRow.classList.remove('active');
            }
            // Добавляем класс active к текущей строке
            allRow.classList.add('active');
            // Сохраняем текущую строку как последнюю активную
            lastActiveRow = allRow;
        }
    });
});

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
btnSearch.addEventListener('click', (e) => {
    e.stopPropagation();
    btnSearch.classList.add('active');
    inputSearch.focus();
})
document.addEventListener('click', () => {
    if (btnSearch.classList.contains('active')) {
        btnSearch.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const starHeader = document.querySelector('.fav-star-in-table.thead');
    const tableBody = document.getElementById('table-body');
    let originalRows = Array.from(tableBody.querySelectorAll('tr'));
    let isFiltered = false;

    starHeader.addEventListener('click', () => {
        if (!isFiltered) {
            // Create sorted array (starred first)
            const sortedRows = [...originalRows].sort((a, b) => {
                const aHasStar = a.querySelector('.col-star img') !== null;
                const bHasStar = b.querySelector('.col-star img') !== null;
                return bHasStar - aHasStar; // Descending sort
            });

            // Rebuild table with sorted rows
            tableBody.innerHTML = '';
            sortedRows.forEach(row => tableBody.appendChild(row));
            
            isFiltered = true;
        } else {
            // Restore original order
            tableBody.innerHTML = '';
            originalRows.forEach(row => tableBody.appendChild(row));
            
            isFiltered = false;
        }
    });
});

const btnFavorite = document.getElementById('btn-favorite');
const tableRows = document.querySelectorAll('.table-body-row'); // Получаем все строки таблицы

btnFavorite.addEventListener('click', () => {
    // Ищем выделенные строки
    tableRows.forEach(row => {
        if (row.classList.contains('active')) {
            const tableRowsColImage = row.querySelector('.col-star');

            // Проверяем, есть ли изображение
            const existingImage = tableRowsColImage.querySelector('.fav-star-in-table');
            if (existingImage) {
                // Если изображение есть, удаляем его
                tableRowsColImage.removeChild(existingImage);
            } else {
                // Если изображения нет, добавляем его
                const newImage = document.createElement('img');
                newImage.src = '../icons/star_fav.png';
                newImage.className = 'fav-star-in-table';
                newImage.alt = '';
                tableRowsColImage.appendChild(newImage);
            }
        }
    });
});

const sidebarBtn1 = document.querySelector('.sidebar-panel-item-btn.all');
const sidebarBtn2 = document.querySelector('.sidebar-panel-item-btn.history');
const sidebarBtn3 = document.querySelector('.sidebar-panel-item-btn.favorites'); 
const sidebarMenu1 = document.querySelector('.sidebar-menu'); 
const sidebarMenu2 = document.querySelector('.sidebar-history'); 
const sidebarMenu3 = document.querySelector('.sidebar-favorites');
sidebarBtn1.addEventListener('click', () => {
    sidebarBtn1.classList.remove('active');
    sidebarBtn2.classList.remove('active');
    sidebarBtn3.classList.remove('active');

    sidebarMenu1.classList.add('active');
    sidebarMenu2.classList.remove('active');
    sidebarMenu3.classList.remove('active');
});
sidebarBtn2.addEventListener('click', () => {
    sidebarBtn1.classList.add('active');
    sidebarBtn2.classList.add('active');
    sidebarBtn3.classList.remove('active');

    sidebarMenu1.classList.remove('active');
    sidebarMenu2.classList.add('active');
    sidebarMenu3.classList.remove('active');
});
sidebarBtn3.addEventListener('click', () => {
    sidebarBtn1.classList.add('active');
    sidebarBtn2.classList.remove('active');
    sidebarBtn3.classList.add('active');

    sidebarMenu1.classList.remove('active');
    sidebarMenu2.classList.remove('active');
    sidebarMenu3.classList.add('active');
});
// поиск по таблице
document.getElementById('input-search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#table-body tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let rowContainsSearchTerm = false;

        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchTerm)) {
                rowContainsSearchTerm = true;
            }
        });

        if (rowContainsSearchTerm) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
// создание и удаление списков
// кнопки в меню для работы со списками
const mainBtnListAdd = document.getElementById('btn-list-add');
const mainBtnListEdit = document.getElementById('btn-list-edit');
const mainBtnListDelete = document.getElementById('btn-list-delete');
// модальные окна
const modalListAdd = document.querySelector('.modal-add-list');
const modalListEdit = document.querySelector('.modal-edit-list');
const modalListDelete = document.querySelector('.modal-delete-list');
// кнопки в модальных окнах
const modalAddBtnAccept = document.getElementById('modal-btn-add-list');
const modalAddBtnCancel = document.getElementById('modal-btn-add-cancel');

const modalEditBtnAccept = document.getElementById('modal-btn-edit-list');
const modalEditBtnCancel = document.getElementById('modal-btn-edit-cancel');

const modalDeleteBtnAccept = document.getElementById('modal-btn-delete-list');
const modalDeleteBtnCancel = document.getElementById('modal-btn-delete-cancel');

const list = document.getElementById('select-list');

const newInput = document.getElementById('new-list');
const editInputAll = document.getElementById('edit-all-list');
const editInput = document.getElementById('edit-list');
const deleteInput = document.getElementById('old-list');

// функции для открытия модальных окон
mainBtnListAdd.addEventListener('click', () => {
    modalListAdd.classList.add('active');
    newInput.focus();
});
mainBtnListEdit.addEventListener('click', () => {
    modalListEdit.classList.add('active');
    editInputAll.focus();
});
mainBtnListDelete.addEventListener('click', () => {
    modalListDelete.classList.add('active');
    deleteInput.focus();
});
// функции для закрытия модальных окон
modalAddBtnCancel.addEventListener('click', () => {
    modalListAdd.classList.remove('active');
});
modalEditBtnCancel.addEventListener('click', () => {
    modalListEdit.classList.remove('active');
});
modalDeleteBtnCancel.addEventListener('click', () => {
    modalListDelete.classList.remove('active');
});
// добавление нового списка
function addNewList() {
    const newList = newInput.value.trim();
    if (newList) {
        const newOptionList = document.createElement('option');
        newOptionList.value = newList;
        newOptionList.textContent = newList;
        list.appendChild(newOptionList);

        newInput.value = '';
        modalListAdd.classList.remove('active');
    };
};
modalAddBtnAccept.addEventListener('click', addNewList);
newInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addNewList();
    }
});

// Редактирование названия списка
function editNameList() {
    const listValueEditSelect = document.getElementById('edit-all-list').value; // Получаем выбранное название
    const newListValue = document.getElementById('edit-list').value; // Получаем новое название
    const listsEdit = document.querySelectorAll('#select-list option'); // Получаем все опции списка

    // Проверяем, есть ли выбранное название в списке
    listsEdit.forEach(list => {
        if (list.value === listValueEditSelect) {
            list.value = newListValue; // Заменяем старое название на новое
            list.textContent = newListValue; // Обновляем текст опции
        }
    });

    // Очищаем поля ввода и закрываем модальное окно
    document.getElementById('edit-all-list').value = '';
    document.getElementById('edit-list').value = '';
    modalListEdit.classList.remove('active');
}

// Обработчик для кнопки "ОК"
modalEditBtnAccept.addEventListener('click', editNameList);

// Обработчик для кнопки "Отмена"
modalEditBtnCancel.addEventListener('click', () => {
    modalListEdit.classList.remove('active'); // Закрываем модальное окно
});

// Функция для отображения совпадений в edit-all
document.getElementById('edit-all-list').addEventListener('input', function() {
    const editListAll = document.querySelector('.edit-all');
    const searchListEdit = this.value.toLowerCase();
    const optionsEdit = document.querySelectorAll('#select-list option');

    editListAll.innerHTML = ''; // Очищаем предыдущие результаты

    let hasMatchesEdit = false;

    optionsEdit.forEach(optionEdit => {
        if (optionEdit.textContent.toLowerCase().includes(searchListEdit) && searchListEdit !== '') {
            hasMatchesEdit = true;

            const cellEditItem = document.createElement('div');
            cellEditItem.textContent = optionEdit.textContent;
            cellEditItem.classList.add('edit-list-all-item');

            cellEditItem.addEventListener('click', () => {
                document.getElementById('edit-all-list').value = optionEdit.textContent; // Устанавливаем выбранное значение
                editListAll.style.display = 'none'; // Скрываем список совпадений
            });
            editListAll.appendChild(cellEditItem);
        }
    });
    editListAll.style.display = hasMatchesEdit ? 'block' : 'none'; // Показываем или скрываем список совпадений
});


// удаление списка
function deleteList() {
    const listValueDel = document.getElementById('old-list').value;
    const listsDel = document.querySelectorAll('#select-list option');
    listsDel.forEach(listDel => {
        if (listDel.value === listValueDel) {
            listDel.remove();
        };
    });
    deleteInput.value = '';
    modalListDelete.classList.remove('active');
};
modalDeleteBtnAccept.addEventListener('click', deleteList);
deleteInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        deleteList();
    }
});
document.getElementById('old-list').addEventListener('input', function() {
    const delListAll = document.querySelector('.old-list-all');
    const searchListDel = this.value.toLowerCase();
    const optionsDel = document.querySelectorAll('#select-list option');

    delListAll.innerHTML = '';

    let hasMatchesDel = false;

    optionsDel.forEach(optionDel => {
        if (optionDel.textContent.toLowerCase().includes(searchListDel) && searchListDel !== '') {
            hasMatchesDel = true;

            const cellDelItem = document.createElement('div');
            cellDelItem.textContent = optionDel.textContent;
            cellDelItem.classList.add('old-list-all-item');

            cellDelItem.addEventListener('click', () => {
                document.getElementById('old-list').value = optionDel.textContent;
                delListAll.style.display = 'none';
            });
            delListAll.appendChild(cellDelItem);
        };
    });
    delListAll.style.display = hasMatchesDel ? 'block' : 'none';
});

const btnSidebarHidden = document.getElementById('hidden-sidebar');
btnSidebarHidden.addEventListener('click', () => {
    document.querySelector('.sidebar.all_doc').classList.toggle('hidden');
});

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

    // Применение видимости панели
    const mainPanel = document.querySelector('.main_content-panel');
    if (!mainPanel) {
        return; // Если панель не найдена, выходим
    }

    // Удаляем старые классы и добавляем новый
    mainPanel.classList.remove('visible-panel', 'novisible-panel');
    if (settings.panelVisible === 'visible') {
        mainPanel.classList.add('visible-panel');
    } else {
        mainPanel.classList.add('novisible-panel');
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
    } else {
        document.querySelector('.sidebar').classList.add('noblur');
        document.querySelector('.sidebar').classList.remove('blur');
    };

    const styledTextElements = document.querySelectorAll('.styled-text');
    styledTextElements.forEach(elementText => {
        elementText.style.fontSize = settings.fontSize + 'px';
    });
}

// инициализация настроек при загрузке страницы
const settings = loadSettings();
applySettings(settings);