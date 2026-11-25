// src/main.js — arranque y orquestación
import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";
import { render } from "./dom.js";

// 1. Muestra los datos estructurados en la consola de DevTools
console.table(estado.tareas);

const titulo = document.querySelector("h1");

titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

const listaElements = document.getElementsByClassName("demo");
const lista = document.getElementById("lista"); // el argumento no lleva # porque sabemos que es una id por el método
const newLista = [];

/* listaElements.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = "- " + element.textContent;
    newLista.push(li);
}); 
Property 'forEach' does not exist on type 'HTMLCollectionOf<Element>'.
*/

Array.from(listaElements).forEach((element) => {
    const li = document.createElement("li");
    li.textContent = "✓ " + element.textContent;
    newLista.push(li);
});

lista.replaceChildren();

newLista.forEach((element) => lista.append(element));

// la HTMLCollection es viva, se actualiza cuando se modifica
// querySelectorAll no es viva, es una captura de cuando se pide

// render();