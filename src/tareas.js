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