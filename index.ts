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

//tuplas
const hero: [string, number, boolean] = ['Dr strange', 10, true];

hero[0] = 'Ironman';
hero[1] = 50;
hero[2] = false;
console.log(hero[1]);

//Enums
enum AudioLevel {
  min = 'min',
  medium = 'medium',
  max = 'max',
}

const currentAudio = AudioLevel.max;
console.log(AudioLevel);
console.log(currentAudio);

//intefaces
interface Hero {
  name: string;
  age: number;
  power: number[];
  func?: () => void;
}

let flash: Hero = {
  name: 'Barri Allen',
  age: 24,
  power: [1, 2],
};

let superman: Hero = {
  name: 'Clark Kent',
  age: 30,
  power: [2],
  func: () => {},
};

//void
function callBatman(): void {}

const call = callBatman();
console.log(call);
