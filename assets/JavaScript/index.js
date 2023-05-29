const mainMenu = document.querySelector('.nav-links');

const menuBar = document.querySelector('.hamb');


menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    mainMenu.classList.toggle('active');
})

document.querySelectorAll('.menu-links').forEach(n => n.addEventListener('click', () => {
    menuBar.classList.remove('active');
    mainMenu.classList.remove('active');
}));