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