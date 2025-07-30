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