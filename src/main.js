import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";
import { render } from "./dom.js";

// console.table(estado.tareas);

const titulo = document.querySelector("h1");

titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

render();