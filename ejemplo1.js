class Mascota {
  constructor(nombre, patas) {
    this.nombre = nombre
    this.patas = patas
  }
  get getNombre() {
    return this.nombre
  }
  get getPatas() {
    return this.patas
  }
  set setNombre(nombre) {
    this.nombre = nombre
  }
  set setPatas(patas) {
    this.patas = patas
  }
  emitirSonido() {
    return `${this.nombre} emite un ruido`
  }
}

class Gato extends Mascota {
  constructor(nombre, patas, raza) {
    super(nombre, patas)
    this.raza = raza
  }
  get getRaza() {
    return this.raza
  }
  set setRaza(raza) {
    this.raza = raza
  }
  emitirSonido() {
    return `${this.nombre} emite un miau`
  }
}

class Perro extends Mascota {
  constructor(nombre, patas, raza) {
    super(nombre, patas)
    this.raza = raza
  }
  get getRaza() {
    return this.raza
  }
  set setRaza(raza) {
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
console.log(`${GATO.nombre} tiene ${GATO.getPatas} patas`)
console.log(`${PERRO.nombre} tiene ${PERRO.getPatas} patas`)
