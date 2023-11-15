# Typescript

## Ejercicio 1

Armar una función que reciba dos cadenas. Una de las cadenas son joyas que representan los tipos de piedras preciosas que tenemos. La otra cadena reporesenta las piedras es un tipo que tenemos. Quieremos saber cuántas de las piedras son también joyas.

<pre>
console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);
</pre>

## Ejercicio 2

1. Vamos a implementar el juego de Code Breaker. El juego comienza generando un número al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.

2. El usuario ingresa un número intentando adivinar el número secreto.

3. Si alguno de los números concuerda en la posición original, se muestra una X.

4. Si alguno de los números no concuerda con la posición original, pero está en el número secreto en otra posición, muestra un -.

5. El orden en que se muestran es el siguiente: XX- (primero las X y luego los -)

6. Ejemplo:

<pre>
Número secreto: 2561
Primer intento: 1334
Salida: -
Segundo intento: 4251
Salida: X--
Tercer intento: 6521
Salida: XX--
</pre>


## Ejercicio 2.1

TypeScript es inteligente sobre los posibles tipos de una variable.
Dado el siguiente codigo:

<pre>

function doStuff(value: any): void {

if (typeof value === 'string') {

console.log(value.toUpperCase().split('').join(' '));

} else if (typeof value === 'number') {

console.log(value.toPrecision(5));

}

value; // coloque el cursor sobre `valor` aqui

}

 doStuff(2);
 doStuff(22);
 doStuff(222);
 doStuff('hello');
 doStuff(true);
 doStuff({});

 console.log('[Ejercicio 4.1]')

</pre>

## Ejercicio 2.2

Dado el siguiente codigo:

<pre>


function padLeft(value: string, padding: number | string): string {

 // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`

 // si padding es una cadena, return padding + value
 
 }

 console.log('[Ejercicio 4.2]', `
 ${padLeft('', 0)}
 ${padLeft('', '')}
 ${padLeft('', '')}
 ${padLeft('', '')}
 ${padLeft('', '')}
13 `);

</pre>

1 Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘

## Ejercicio 2.3

Dado el siguiente codigo:

<pre>

const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten(array) {

    const flattened = [];

    for (const element of array) {

        if (Array.isArray(element)) {
            element; // any[]
            flattened.push(...element);
        } else {
            element; // any
            flattened.push(element);
            }
    }

    return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log('[Ejercicio 4.3]', flattenedNumbers);

</pre>

1 Añadir anotaciones de tipo (‘any‘ excluido)

2 Inspeccione el tipo de ‘element‘ en diferentes ramas de código

3 Bonificación: convertir ‘flatten‘ en una función genérica

## Ejercicio 2.4

Dado el siguiente código:

<pre>

interface EggLayer {
    layEggs(): void;
 }

 interface Flyer {
    fly(height: number): void;
 }

 interface Swimmer {
    swim(depth: number): void;
 }

 // agregar alias de tipo(s) aqui

 class Bird implements BirdLike {
    constructor(public species: string) { }

 layEggs(): void {
    console.log('Poniendo huevos de aves.');
 }

 fly(height: number): void {
    console.log(`Volando a la altura de ${height} metros.`);
 }
 };

 class Fish implements FishLike {
    constructor(public species: string) { }

 layEggs(): void {
    console.log('Poniendo huevos de pescado.');
 }

 swim(depth: number): void {
    console.log(`Nadando a una profundidad de ${depth} etros.`);
 }
 }

 function getRandomAnimal() {
    const animals = [
    new Bird('puffin'),
    new Bird('kittiwake'),
    new Fish('sea robin'),
    new Fish('leafy seadragon'),
 ];

    return animals[Math.floor(Math.random() * animals.length)];
 }

 function interrogateAnimal(animal = getRandomAnimal()) {
    animal.swim(10) // se llama solo si es un pez
    animal.fly(10); // se llama solo si es un pajaro

    return animal.species;
 }

 console.log('[Ejercicio 2.4]',
 `Tenemos un ${interrogateAnimal()} en nuestras manos!`);

</pre>

1 Las aves y los peces ponen huevos. Sólo los pájaros vuelan. Sólo los peces nadan. Defina
dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ basados en estos rasgos

2 Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘

3 Use ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros
volar

4 Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible.

### Funciones
## Ejercicio 3.1

Dado el siguiente codigo:

<pre>

 function add(x, y) {
    return x + y;
 }

 function sumArray(numbers) {
    return numbers.reduce(add, 0);
 }

 const someSum = sumArray(['3', '6', '9']);

 console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);

 </pre>

1 Agregue tipos explícitos a los parámetros y el tipo de retorno

2 Solucione cualquier error resultante de tipos inválidos

## Ejercicio 3.2

Dado el siguiente codigo:

<pre>

 const bankAccount = {
    money: 0,
    deposit(value, message) {
        this.money += value;
        if (message) {
            console.log(message);
        }
    }
 };

bankAccount.deposit(20);

bankAccount.deposit(10, 'Deposit received')

console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);

</pre>

1 Agregue tipos explícitos a los parámetros y el tipo de retorno a la funcion ‘deposit‘

2 Haz que el parámetro de ‘message‘ sea *optional*

## Ejercicio 3.3

Para una palabra dada, calculamos su puntuación en Scrabble®

<pre>

function computeScore(word) {
    const letters = word.toUpperCase().split('');
    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
}

function getPointsFor(letter) {
    const lettersAndPoints = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];

    return lettersAndPoints.reduce((computedScore, pointsTuple) => {
        const [letters, score] = pointsTuple;
        if (letters.split('').find((ll) => ll === letter)) {
            return computedScore += score;
        }
        return computedScore;
    }, 0);
}

console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);


</pre>

1 Añadir anotaciones de tipo siempre que sea posible.

## Ejercicio 3.4

Dado el siguiente codigo:

<pre>
 function greet(greeting) {
   return greeting.toUpperCase();
 }

 const defaultGreeting = greet();
 const portugueseGreeting = greet('Oi como vai!');

 console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
</pre>

1 Añadir tipos explícitos a los parámetros y tipo de retorno
2 Añadir un saludo predeterminado: ”hola”

## Ejercicio 3.5

<pre>
function layEggs(quantity, color) {
  console.log(`[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
}

layEggs();
</pre>

1 Añadir anotación de tipo de parámetro

2 A pesar de que esta función no vuelve, agregue un tipo de retorno explícito

## Ejercicio 3.6

Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos
funciones.

<pre>
let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

multiply = function (x: number, y: number): number {
  return x * y;
}

capitalize = function (value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
</pre>

1 Arreglar los errores

## Ejercicio 3.7

Actualmente, nuestra función ‘pushToCollection‘ acepta *cualquier* elemento y lo agrega, (indiscriminadamente) a *cualquier* tipo de matriz. Un par de problemas con esto:

1 El tipo ‘any‘ hace que perdamos toda la información de tipos en nuestros parámetros.

2 Esta holgura se ha vuelto en nuestra contra durante el tiempo de ejecución (mira a ‘incrementByTwo‘)

Dado el siguiente codigo:

<pre>
const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection(item, collection) {
  collection.push(item);
  return collection;
}

// Añadir algunas cosas a las colecciones
pushToCollection(false, stringCollection);
pushToCollection('hi', stringCollection);
pushToCollection([], stringCollection);

pushToCollection('1', numberCollection);
pushToCollection('2', numberCollection);
pushToCollection('3', numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3, 4, 5]`);
</pre>

1 Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear errores en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección determinada. Fije estos valores a los tipos correctos)

2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operar
en artículos y colecciones de cualquier tipo mientras se continúa aplicando que conicida.