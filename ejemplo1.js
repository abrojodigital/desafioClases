class Animal {
  constructor(nombre, patas) {
    this.nombre = nombre
    this.patas = patas
  }
  getNombre() {
    return this.nombre
  }
  getPatas() {
    return this.patas
  }
  setNombre(nombre) {
    this.nombre = nombre
  }
  setPatas(patas) {
    this.patas = patas
  }
  emitirSonido() {
    return `${this.nombre} emite un ruido`
  }
}

class Gato extends Animal {
  constructor(nombre, patas, raza) {
    super(nombre, patas)
    this.raza = raza
  }
  getRaza() {
    return this.raza
  }
  setRaza(raza) {
    this.raza = raza
  }
  emitirSonido() {
    return `${this.nombre} emite un miau`
  }
}

class Perro extends Animal {
  constructor(nombre, patas, raza) {
    super(nombre, patas)
    this.raza = raza
  }
  getRaza() {
    return this.raza
  }
  setRaza(raza) {
    this.raza = raza
  }
  emitirSonido() {
    return `${this.nombre} emite un guau`
  }
}

// Instanciando un gato
const GATO = new Gato('Bola de Nieve VI', 4, 'Bombay')

// Instanciando un perro
const PERRO = new Perro('Ayudante de Santa', 4, 'galgo')

// Probando el método emitirSonido
console.log(GATO.emitirSonido())
console.log(PERRO.emitirSonido())

// Probando el método getPatas
console.log(GATO.getPatas())
console.log(PERRO.getPatas())
