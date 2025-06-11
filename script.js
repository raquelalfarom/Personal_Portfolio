// envío del formulario

const btn = document.getElementById("button");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_d3je9e5";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");

      // Limpia los campos del formulario
      form.reset();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
// Mostrar y ocultar menú
const menuIcon = document.querySelector("#menu-icon");
const nav = document.querySelector("nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-times");
  nav.classList.toggle("active");
};
