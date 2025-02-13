import Cilindro from './Model/Cilindro.js';

let raio = 2
let altura = 3

const cilindro = new Cilindro(raio, altura)

console.log(cilindro.calcularAreaTotal().toFixed(2))
console.log(cilindro.calcularVolume().toFixed(2))