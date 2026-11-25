import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  const resumen = document.querySelector("#resumen");

  lista.replaceChildren(); // vaciar lista

  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    li.classList.add(tarea.completada? "completada" : "pendiente");
    lista.append(li);
  }

  // mostrar recuento
  const pendientes = contarPendientes(estado.tareas);
  const completadas = contarCompletadas(estado.tareas);
  document.querySelector("#resumen").textContent = `${completadas} completadas, ${pendientes} pendientes`;
}