import { alumnos, calcularMedia, contarAprobados } from "./notas.js";

export function renderNotas() {
    const alumnosSorted = alumnos.toSorted((a, b) => b.nota - a.nota); // de mayor a menor

    // texto

    const listaNotas = document.querySelector("#lista-notas");
    listaNotas.replaceChildren();
    for(const alumno of alumnosSorted){
        const li = document.createElement("li");
        li.textContent = `${alumno.nombre} - ${alumno.nota}`;
        li.classList.add(alumno.nota >= 5? "aprobado":"suspenso");
        listaNotas.append(li);
    }

    // tabla
    
    const cabeza = document.querySelector("#row-cabeza");
    for(const elemento of ["Alumnos", "Nota"]){
        const th = document.createElement("th");
        th.textContent = elemento;
        cabeza.append(th);
    }

    const cuerpo = document.querySelector("tbody");
    for(const alumno of alumnosSorted){
        const row = document.createElement("tr");
        const nombre = document.createElement("td");
        nombre.textContent = alumno.nombre;
        const nota = document.createElement("td");
        nota.textContent = alumno.nota.toString();

        row.append(nombre, nota);
        cuerpo.append(row);
    }

    const media = calcularMedia(alumnos);
    const aprobados = contarAprobados(alumnos);
    const resumen = document.querySelector("#resumen-notas");

    resumen.textContent = `Media: ${media} · Aprobados: ${aprobados} de ${alumnos.length}`;
}