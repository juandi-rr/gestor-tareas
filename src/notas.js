export const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4.2 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Sara", nota: 3.8 },
];

export function calcularMedia(alumnos){
  return alumnos.reduce((acc, alumno) => acc + alumno.nota, 0) / alumnos.length;
}

export function contarAprobados(alumnos){
  return alumnos.filter((alumno) => alumno.nota >= 5).length;
}