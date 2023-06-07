const MENSAJE_CANTIDAD_DE_ALUMNOS = "Buenos días, profesor. \nPor favor, ingrese la cantidad de alumnos en su curso.";
const MENSAJE_CANTIDAD_DE_ALUMNOS_ERROR = "Por favor, ingrese una cantidad de alumnos válida.";
const MENSAJE_MISMAS_EVALUACIONES = "¿Todos los alumnos tienen la misma cantidad de evaluaciones? \nPresione \"s\" para una respuesta afirmativa.\nPresione \"n\" para una respuesta negativa.";
const MENSAJE_CANTIDAD_DE_EVALUACIONES_GRUPAL = "Ingrese cantidad de evaluaciones a lo largo del curso";
const MENSAJE_SI_NO_ERROR = "Por favor, ingrese \"s\" o \"n\"";

function evaluarNumero(limiteInferior,limiteSuperior,numero){
    return numero > limiteInferior && numero < limiteSuperior;
}

function evaluarLetra (opcionUno, opcionDos, letra){
    return letra === opcionUno || letra === opcionDos;
}

function cargaDatos(alumnos,evaluaciones){
    let datos = [];
    // alert("hola");
    for (let i = 0; i < alumnos; i++){
        const notasAlumno = {
            nombre: "",
            notas: [],
        }
        let nombreAlumno = prompt(`Ingese el nombre del alumno`)
        let cantidadEvaluacionesAlumno = evaluaciones === 0 ?
        parseInt(prompt(`Ingese cantidad de evaluaciones del alumno ${i+1}`)) :
        evaluaciones;
        const notas = [];
        for (let j = 0; j < cantidadEvaluacionesAlumno; j++){
            let notaEvaluacion = parseInt(prompt(`Ingese la nota de la evaluación ${j+1} del alumno ${nombreAlumno} `))
            while (evaluarNumero(1,10,notaEvaluacion) === false){
                notaEvaluacion = parseInt(prompt(`Nota incorrecta. Ingese nota evaluación ${j+1} del alumno ${i+1} (entre 1 y 10)`));
            }
            notas.push(notaEvaluacion);
        }
    notasAlumno.nombre = nombreAlumno;
    notasAlumno.notas = notas;
    datos.push(notasAlumno);
    }
    return datos;
}

function mensaje(notas,alumno){
        let evaluacionesAprobadas = 0;
        let evaluacionesDesaprobadas = 0;
        let evaluacionesRevision = 0;
        const promedioNotas = notas.reduce ((acum,valor) => acum + valor, 0)/notas.length;
        notas.map(nota => {
            nota > 4 ?
            evaluacionesAprobadas+=1:
            evaluacionesAprobadas+=0} )
        notas.map(nota => {
            nota < 4 ?
            evaluacionesDesaprobadas+=1:
            evaluacionesDesaprobadas+=0} )
        notas.map(nota => {
            nota === 4 ?
            evaluacionesRevision+=1:
            evaluacionesRevision+=0} )
        return `El promedio del alumno ${alumno} es ${promedioNotas} puntos, tiene ${evaluacionesAprobadas} evaluaciones aprobadas, 
        ${evaluacionesDesaprobadas} desparobadas, y ${evaluacionesRevision} evaluaciones a revisar \n
        ¡Gracias! Es momento de pasar al siguiente alumno.`
}

function main(){
    let cantidadAlumnos = parseInt(prompt(MENSAJE_CANTIDAD_DE_ALUMNOS));
    while (evaluarNumero(0,100,cantidadAlumnos) === false){
        cantidadAlumnos = parseInt(prompt(MENSAJE_CANTIDAD_DE_ALUMNOS_ERROR));
    }
    let mismasEvaluaciones = prompt(MENSAJE_MISMAS_EVALUACIONES);
    while (evaluarLetra("s","n",mismasEvaluaciones) === false){
        mismasEvaluaciones = prompt(MENSAJE_SI_NO_ERROR);
    }
    const cantidadEvaluaciones = mismasEvaluaciones === "s" ?
    parseInt(prompt(MENSAJE_CANTIDAD_DE_EVALUACIONES_GRUPAL)):
    0;
    const datos = cargaDatos(cantidadAlumnos,cantidadEvaluaciones);
    datos.map(alumno => alert(mensaje(alumno.notas,alumno.nombre)));
}
        
main();
