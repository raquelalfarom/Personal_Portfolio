// Mostrar y ocultar menú
const menuIcon = document.querySelector("#menu-icon");
const nav = document.querySelector("nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

// Detectar envío del formulario
const form = document.querySelector("form");
const submitButton = document.querySelector("form .btn");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // importante prevenir el submit real si no tienes backend
  submitButton.innerText = "Sending...";
});
