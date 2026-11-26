import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

export function render() {
  const lista = document.getElementById("lista"); // no encuentra el elemento porque hay un #
  const resumen = document.querySelector("#resumen");

  lista.replaceChildren(); // esto estaba dentro del for, lo que hacía que siempre se borrase tras cada lectura

  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    if (tarea.completada) { // necesita tres iguales, o quitar el igual y el true
      li.classList.add("completada");
    }
    lista.append(li);
  }

  resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`; // contarPendientes es una función, asi que necesita parentesis y un parámetro
}