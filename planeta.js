const hamburguer = document.querySelector('#hamburguesa');
const closen = document.querySelector('#close');
const Menu = document.querySelector('#menu');




hamburguer.addEventListener('click', () => {
    hamburguer.style.display = 'none';
    closen.style.display = 'block';
    Menu.style.display = 'block';
});

closen.addEventListener('click', () => {
    hamburguer.style.display = 'block';
    closen.style.display = 'none';
    Menu.style.display = 'none';
});