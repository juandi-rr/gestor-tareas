import { estado } from "./estado.js";
import { contarPendientes, contarCompletadas } from "./tareas.js";

export function render() {
  const lista = document.querySelector("#lista");
  const resumen = document.querySelector("#resumen");

  lista.replaceChildren(); // vaciar lista

  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.dataset.id = String(tarea.id); // le damos un data-id al elemento
    li.classList.add(tarea.completada? "completada" : "pendiente");

    // el li es una entrada en la lista, va a ser un contenedor para lo demás
    // ahora mismo tiene clase completada/pendiente y data-id

    const span = document.createElement("span");
    span.textContent = tarea.texto;
    // dentro del li, creamos un span que solo va a mostrar texto

    const btnToggle = document.createElement("button");
    btnToggle.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnToggle.dataset.accion = "toggle"; // Genera data-accion="toggle"
    // también creamos un botón para marcar o desmarcar

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "✕";
    btnBorrar.dataset.accion = "borrar"; // Genera data-accion="borrar"
    // y otro para borrar

    li.append(span, btnToggle, btnBorrar);
    // lo metemos todo dentro del li

    lista.append(li);
    // y luego metemos el li dentro de la lista
  }

  // mostrar recuento
  const pendientes = contarPendientes(estado.tareas);
  const completadas = contarCompletadas(estado.tareas);
  document.querySelector("#resumen").textContent = `${completadas} completadas, ${pendientes} pendientes`;
}