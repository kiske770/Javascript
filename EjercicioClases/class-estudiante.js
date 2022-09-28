class Estudiante {
    nombre;
    
    constructor(nom){
        this.nombre = nom;
    }

    ObtenDatos(){
       
        return {
            nombre: this.nombre,
            asignaturas: ['Javascript', 'HTML', 'CSS']
        }
       
    }
}


let student = new Estudiante('Mario Avendaño')
console.log(student.ObtenDatos())
