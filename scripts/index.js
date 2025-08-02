const sidebar = document.querySelector('.sidebar');
const resizeHandle = document.querySelector('.resize-handle');
let isResizing = false;
resizeHandle.addEventListener('mousedown', (event) => {
    isResizing = true;
});
document.addEventListener('mousemove', (event) => {
    if (isResizing) {
        const newWidth = event.clientX;
        sidebar.style.width = `${newWidth}px`;
    }
});
document.addEventListener('mouseup', () => {
    isResizing = false;
});

document.querySelectorAll('.sidebar-menu details').forEach(details => {
    const summary = details.querySelector('summary');
    const img = summary.querySelector('img');
    if (details.open) {
        img.style.transform = "rotate(180deg)";
    } else {
        img.style.transform = "rotate(0)";
    };
    details.addEventListener('toggle', () => {
        img.style.transform = details.open ? "rotate(180deg)" : "rotate(0)";
    });
});

function closeOnEsc(element, className) {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (element.classList.contains(className)) {
                element.classList.remove(className);
            };
        };
    });
};
const modalAddList = document.querySelector('.modal-add-list');
closeOnEsc(modalAddList, 'active');
const modalEditList = document.querySelector('.modal-edit-list');
closeOnEsc(modalEditList, 'active'); 
const modalDeleteList = document.querySelector('.modal-delete-list');
closeOnEsc(modalDeleteList, 'active'); 

// горячие клавиши
// function keyOpen(element, className, clickKeyRu, clickKeyEn) {
//     document.addEventListener('keydown', function(event) {
//         if(event.key === clickKeyRu || event.key === clickKeyEn) {
//             if (!element.classList.contains(className)) {
//                 element.classList.add(className);
//             };
//         };
//     });
// };
// const windowAddList = document.querySelector('.modal-add-list');
// keyOpen(windowAddList, 'active', 'a', 'ф');
// const windowEditList = document.querySelector('.modal-edit-list');
// keyOpen(windowEditList, 'active', 'e', 'у');
// const windowDeleteList = document.querySelector('.modal-delete-list');
// keyOpen(windowDeleteList, 'active', 'd', 'в');


