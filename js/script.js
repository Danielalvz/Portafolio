document.addEventListener('DOMContentLoaded', () => {

  // Tecnologias, al pasar por encima muestra un parrafo
  const herramientas = document.querySelectorAll('.herramienta');

  herramientas.forEach(herramienta => {
    herramienta.addEventListener('mouseenter', () => {
      const descripcion = this.querySelector('.descripcion');
      descripcion.style.display = 'inline-block';
    });

    herramienta.addEventListener('mouseleave', () => {
      const descripcion = this.querySelector('.descripcion');
      descripcion.style.display = 'none';
    });
  });
});

//Nav, menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.toggle("mostrar");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("mostrar");
});

//Boton nav de modo claro y oscuro
const btnSwitch = document.querySelector("#switch");

obtenerModoColor();

btnSwitch.addEventListener("click", cambiarColor);

function cambiarColor() {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  guardarColor();
}

function guardarColor() {
  const modoActual = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", modoActual.toString());
}

function obtenerModoColor() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
  }
}

// Boton cambiar idioma
const switchButton = document.getElementById("idioma");

switchButton.addEventListener("click", idiomaSwitch);

function idiomaSwitch() {
  switchButton.classList.toggle("active");

  const isEnglish = switchButton.classList.contains("active");
  localStorage.setItem("language", isEnglish ? "en" : "es");

  const language = localStorage.getItem("language") || "es";
  location.href = language === "en" ? "en/index.html" : "../index.html";
}

document.addEventListener('DOMContentLoaded', () => {
  const storedLanguage = localStorage.getItem("language") || "es";
  if (storedLanguage === "en" && !location.href.includes("en/")) {
    location.href = "en/index.html";
  } else if (storedLanguage === "es" && location.href.includes("en/")) {
    location.href = "../index.html";
  }
});
