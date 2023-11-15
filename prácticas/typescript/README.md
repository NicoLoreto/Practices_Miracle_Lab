# JavaScript
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

4 Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible

