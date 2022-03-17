class Calculadora {
    constructor() {
        this.valor_a = 0
        this.valor_b = 0
    } //constructor

    set valorA(valor) {
        console.log(`Asignando el primer valor = ${valor}`)
        this.valor_a = valor
    }
    set valorB(valor) {
        console.log(`Asignando el primer valor = ${valor}`)
        this.valor_b = valor
    }

    get suma() {
        let resultado = this.valor_a + this.valor_b
        return `La suma de ${this.valor_a} + ${this.valor_b} = ${resultado}`
    }

    /**
     * Realiza la multiplicación de dos valores dados.
     * Para acceder a este método no es necesario contar con una instancia de la clase.
     */

    static multiplicacion(valor_a, valor_b) {
        let resultado = valor_a * valor_b
        return `La multiplicación de ${valor_a} * ${valor_b} = ${resultado}`
    }
}

//probando el método multiplicación sin la necesidad de contar con una instancia de nuestra clase.
let multiplicacion = Calculadora.multiplicacion(9, 1000)
console.log(multiplicacion)

// Instanciando el Objeto
const CALCULADORA = new Calculadora()
CALCULADORA.valorA = 98
CALCULADORA.valorB = 54

//conseguimos la suma de los valores
let suma = CALCULADORA.suma
console.log(suma)