/**
 * Calcula cuántas tareas quedan pendientes por completar.
 * @param {import("./estado.js").Tarea[]} tareas
 * @returns {number}
 */

export function contarPendientes(tareas) {
    return tareas.filter((tarea) => !tarea.completada).length;
}

export function contarCompletadas(tareas){
    return tareas.filter((tarea) => tarea.completada).length;
}

export function agregarTarea(tareas, texto){
    /** @type {import("./estado.js").Tarea} */
    const nuevaTarea = {
        id: Date.now(),
        texto,
        completada: false
    };
    return [...tareas, nuevaTarea];
}

export function toggleTarea(tareas, id) {
  return tareas.map((tarea) =>
    tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
  );
}

export function borrarTarea(tareas, id) {
  return tareas.filter((tarea) => tarea.id !== id);
}