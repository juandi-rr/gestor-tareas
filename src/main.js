import "./style.css";
import { agregarTarea, toggleTarea, borrarTarea } from "./tareas.js";
import { render } from "./dom.js";
import { estado } from "./estado";

// console.table(estado.tareas);

const titulo = document.querySelector("h1");

titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

render();

const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", (e) => {
  console.log("Tipo de evento:", e.type);   // "click"
  console.log("Elemento pulsado:", e.target); // el <button>
  document.body.classList.toggle("oscuro");
});

const form = document.querySelector("#form-tarea");
/** @type {HTMLInputElement} */ // sin esto, vscode muestra errores
const inputTarea = document.querySelector("#input-tarea");

form.addEventListener("submit", (e) => { // el submit es un evento especifico para los formularios, no es un click
  e.preventDefault(); // detener la recarga automática

  const texto = inputTarea.value.trim();
  if(!texto) return; // si está vacío, ignoramos y salimos

  estado.tareas = agregarTarea(estado.tareas, texto);

  inputTarea.value = "";
  inputTarea.focus();

  render(); // mostrar tarea nueva
});

const lista = document.querySelector("#lista");

lista.addEventListener("click", (e) => {
  // 1. ¿El elemento pulsado (e.target) es o está dentro de un botón con data-accion?
  const boton = e.target.closest("button[data-accion]");
  if (!boton) return; // Clic en el texto o fuera de los botones: ignoramos

  // 2. Subimos al <li> más cercano para leer su dataset.id:
  const li = boton.closest("li");
  const id = Number(li.dataset.id); // Convertimos siempre a Number
  const accion = boton.dataset.accion;

  if (accion === "toggle") {
    estado.tareas = toggleTarea(estado.tareas, id);
    render();
  } else if (accion === "borrar") {
    estado.tareas = borrarTarea(estado.tareas, id);
    render();
  }
});