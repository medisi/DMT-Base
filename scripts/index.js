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

function toggleClassMobBtn() {
    const allImageForMobile = document.querySelector('.main.home #btn-quit');
    
    if (window.innerWidth <= 1023) {
        allImageForMobile.classList.add('mob');
    } else {
        allImageForMobile.classList.remove('mob');
    };
};
toggleClassMobBtn();
window.addEventListener('resize', toggleClassMobBtn);

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

const allMenuItemProjects = document.querySelectorAll('.sidebar_menu-item-project');
const menuItemProject1 = document.querySelector('.sidebar_menu-item-project1');
const menuItemProject2 = document.querySelector('.sidebar_menu-item-project2');
const menuItemProject3 = document.querySelector('.sidebar_menu-item-project3');
const menuItemProject4 = document.querySelector('.sidebar_menu-item-project4');
const menuItemProject5 = document.querySelector('.sidebar_menu-item-project5');

const allAboutProjectContents = document.querySelectorAll('.about-project-content');
const aboutProjectContent1 = document.querySelector('.about-project-content1');
const aboutProjectContent2 = document.querySelector('.about-project-content2');
const aboutProjectContent3 = document.querySelector('.about-project-content3');
const aboutProjectContent4 = document.querySelector('.about-project-content4');
const aboutProjectContent5 = document.querySelector('.about-project-content5');

menuItemProject1.addEventListener('click', (event) => {
    if (event.detail === 2) {
        window.location.href = '../pages/all_documents.html';
    } else {
        allMenuItemProjects.forEach(allMenuItemProject => {
            allMenuItemProject.classList.remove('active');
        });
        menuItemProject1.classList.add('active');

        allAboutProjectContents.forEach(allAboutProjectContent => {
            allAboutProjectContent.classList.remove('active');
        });
        aboutProjectContent1.classList.add('active');
    }
});
menuItemProject2.addEventListener('click', (event) => {
    if (event.detail === 2) {
        window.location.href = '../pages/all_documents.html';
    } else {
        allMenuItemProjects.forEach(allMenuItemProject => {
            allMenuItemProject.classList.remove('active');
        });
        menuItemProject2.classList.add('active');

        allAboutProjectContents.forEach(allAboutProjectContent => {
            allAboutProjectContent.classList.remove('active');
        });
        aboutProjectContent2.classList.add('active');
    }
});
menuItemProject3.addEventListener('click', (event) => {
    if (event.detail === 2) {
        window.location.href = '../pages/all_documents.html';
    } else {
        allMenuItemProjects.forEach(allMenuItemProject => {
            allMenuItemProject.classList.remove('active');
        });
        menuItemProject3.classList.add('active');

        allAboutProjectContents.forEach(allAboutProjectContent => {
            allAboutProjectContent.classList.remove('active');
        });
        aboutProjectContent3.classList.add('active');
    }
});
menuItemProject4.addEventListener('click', (event) => {
    if (event.detail === 2) {
        window.location.href = '../pages/all_documents.html';
    } else {
        allMenuItemProjects.forEach(allMenuItemProject => {
            allMenuItemProject.classList.remove('active');
        });
        menuItemProject4.classList.add('active');

        allAboutProjectContents.forEach(allAboutProjectContent => {
            allAboutProjectContent.classList.remove('active');
        });
        aboutProjectContent4.classList.add('active');
    }
});
menuItemProject5.addEventListener('click', (event) => {
    if (event.detail === 2) {
        window.location.href = '../pages/all_documents.html';
    } else {
        allMenuItemProjects.forEach(allMenuItemProject => {
            allMenuItemProject.classList.remove('active');
        });
        menuItemProject5.classList.add('active');

        allAboutProjectContents.forEach(allAboutProjectContent => {
            allAboutProjectContent.classList.remove('active');
        });
        aboutProjectContent5.classList.add('active');
    }
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
const modalBgImage = document.querySelector('.modal-bg-image');
closeOnEsc(modalBgImage, 'active');
const modalFonts = document.querySelector('.modal-fonts');
closeOnEsc(modalFonts, 'active');

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


