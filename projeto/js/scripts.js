// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// funções

// Eventos
[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active");
    });
});