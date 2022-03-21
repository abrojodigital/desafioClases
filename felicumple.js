class Profesor {
    constructor(nombre, apellido, fechaNacimiento, materias) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.materias = materias;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getFechaNacimiento() {
        return this.fechaNacimiento;
    }
    getSexo() {
        return this.sexo;
    }
    getMaterias() {
        return this.materias;
    }
}

let profesor = new Profesor('Juan', 'Perez', '10/10/1990', ['Matematicas', 'Fisica']);