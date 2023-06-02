// Import stylesheets
import './style.css';

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//inferencia de datos
const a: number = 10;
let b = 10;

// Booleans
let isSuperman = true;
let isBatman = false;
let n = 10;

isSuperman = 1 + 1 == 2 ? true : false;

console.log(isSuperman);

//Numbers
const countAvengers = '123A';
const villanos = 2;
let avengers = Number(countAvengers);

if (!isNaN(avengers)) {
  if (avengers > villanos) {
    console.log('Estamos en problemas');
  }
} else {
  console.log('Estamos a salvo');
}

//string
const batman = 'Batman';
const linternaVerde = 'Linterna verde';
const volcanNegro = `Heroe`;
const poder: string = 'Velocidad';
const edad: number = 35;
console.log('yo soy ' + batman);
console.log(
  `Yo soy ${linternaVerde} y mi super poder es ${poder} y tengo ${edad} años`
);

//any
const nombre = 'Pedro';
console.log(nombre.charAt(1));

//Arreglos
const numbers: number[] = [1, 2, 3, 4, 5, 6];
numbers.push(7);
console.log(numbers);
