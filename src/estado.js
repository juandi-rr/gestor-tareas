/**
 * @typedef {Object} Tarea
 * @property {number} id
 * @property {string} texto
 * @property {boolean} completada
 */

/**
 * @typedef {Object} Estado
 * @property {Tarea[]} tareas
 * @property {"todas" | "pendientes" | "completadas"} filtro
 */

/** @type {Estado} */

export const estado = {
  tareas: [
    { id: 1, texto: "Instalar Node y Vite", completada: true },
    { id: 2, texto: "Crear el proyecto gestor-tareas", completada: false },
    { id: 3, texto: "Bailar la Macarena", completada: true },
    { id: 4, texto: "Programar el resto", completada: false }
  ],
  filtro: "todas",
};