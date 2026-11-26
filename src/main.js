import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";
import { render } from "./dom.js";
import { alumnos, calcularMedia, contarAprobados } from "./notas.js";
import { renderNotas } from "./dom-notas";

// console.table(estado.tareas);

const titulo = document.querySelector("h1");

titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

render();

/* const lista = document.querySelector("#lista");

const vivos = document.getElementsByClassName("prueba");
const foto = document.querySelectorAll(".prueba");
console.log("A:", vivos.length, foto.length); // saldrá A: 0 0

const li = document.createElement("li");
li.className = "prueba";
li.textContent = "<b>Nueva</b>";
lista.append(li);
console.log("B:", vivos.length, foto.length); // saldrá B: 1 0

const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Gestor</em>";
console.log("C:", h1.textContent, h1.children.length); // saldrá C: Gestor 1

console.log("D:", document.getElementById("#lista")); // saldrá null, porque se está usando un # cuando no se debe */

renderNotas();
