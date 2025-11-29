// script.js
// ------------------------------
// Funciones en JavaScript puro
// ------------------------------

// Mostrar un saludo si estamos en index.html
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("index.html")) {
        console.log("Bienvenida al portafolio de Natalia Rodríguez Escárate ✨");
    }
});

// ------------------------------
// Cambiar color del navbar al hacer scroll
// ------------------------------
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});

// ------------------------------
// Evento simple para botones "Enviar"
// ------------------------------
document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.type === "submit") {
        console.log("El usuario hizo clic en un botón Enviar ✔");
    }
});