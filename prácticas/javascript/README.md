# JavaScript
## Ejercicio 1

En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio de
golpes que se espera que haga un golfista para meter la bola en un hoyo y así completar
el juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existe
un apodo diferente.

Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta de
acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad; de arriba (más alto)
a abajo (más bajo):

<pre>

Strokes Return

1               "Hole-in-one!"
<= par - 2      "Eagle"
par - 1         "Birdie"
par             "Par"
par + 1         "Bogey"
par + 2         "Double Bogey"
>= par + 3      "Go Home!"

const names = [

"Hole-in-one!",
"Eagle",
"Birdie",
"Par",
"Bogey",
"Double Bogey",
"Go Home!",

];

function golfScore(par, strokes) {
    return "Implementar!";
}

golfScore(5, 4);

</pre>

## Ejercicio 2

Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos del arreglo arr

<pre>
function sum(arr, n) { }
</pre>

## Ejercicio 3

Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha
planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta
en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva
el número de días que tardará la planta en medir la alturaDeseada.

<pre>
function calcularDiasCrecimiento(velocidadCrecimiento velocidadDecrecimiento, alturaDeseada) {}
</pre>

## Ejercicio 4

• Crea una función que reciba una frase como cadena y devuelva la palabra más larga:

<pre>
function palabraMasLarga(str) {}

console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');
</pre>


• Crea una función que reciba una cadena y lo devuelva con todas las palabras con su
primera letra mayúscula

<pre>
function primeraMayuscula(str) {}

console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');
</pre>

## Ejercicio 5

• Crea una función que reciba una cadena y la devuelva en camelCase

<pre>
function camelize(str) {}
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');
</pre>

## Ejercicio 6

• Vamos a calcular el precio de un carrito de compra. Un carrito de compra tiene una
propiedad productos que es una lista de los productos. Cada producto tiene las siguientes
propiedades:

<pre>
– nombre: Nombre del producto (Papel higiénico, leche, ...)
– unidades: Número de elementos que se van a comprar de dicho producto
– precio: Precio unitario del producto
</pre>

Además, tiene una propiedad precioTotal donde se va actualizando automáticamente el precio del producto. Crear el código necesario para soportar esta funcionalidad.

Datos de prueba:

<pre>
const carrito = {
    productos: [{
    nombre: 'papel higienico',
    unidades: 4,
    precio: 5
    },
    {
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
    }],
    get precioTotal() {
}
}
</pre>

## Ejercicio 7

• En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa si
lleva un registro del número relativo de cartas altas y bajas que quedan en la baraja. Esto
se llama conteo de cartas.
Tener más cartas altas en el mazo favorece al jugador. A cada carta se le asigna un valor de
acuerdo con la tabla siguiente. Cuando la cuenta es positiva, el jugador debe apostar alto.
Cuando la cuenta es cero o negativa, el jugador debe apostar poco.
Escribe una función de conteo de cartas. Tendrá un parámetro card, que puede ser un número
o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo con el valor de
card. La función devolverá una cadena con el recuento actual y la cadena Bet si el recuento es
positivo, o Hold si el recuento es cero o negativo. El recuento actual y la decisión del jugador
(Bet o Hold) deben estar separados por un solo espacio

<pre>
Count Cards
+1 2, 3, 4, 5, 6
 0 7, 8, 9
-1 10, J, Q, K, A
</pre>

Ejemplo:

<pre>

-3 Hold
5 Bet

let count = 0;

function cc(card) {

return "Implementar!";

}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

</pre>

## Ejercicio 8

• Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma de todos los argumentos.

## Ejercicio 9

• Escriba una función llamada addOnlyNums que pueda aceptar cualquier cantidad de argumentos (incluidos números o cadenas) y devuelva la suma de solo los números.

## Ejercicio 10

• Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos y devuelva un solo arreglo que combine ambos (usando el operador ...)

## Ejercicio 11

• Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos y devuelva un arreglo de solo los argumentos únicos.

## Ejercicio 12

• Vamos a armar el juedo de ”Adivinar el número”. El juego consiste de los siguiente: La
computadora genera un número aleatorio entre 1 y 10. Luego nos pide que adivinemos el
número. Si el número que ingresamos es menor que el que genero la maquina nos muestra
el mensaje ”El número es mayor”. Si el número que ingresamos es mayor nos muestra el
mensaje ”El número es menor”. Cuando hayamos acertado el valor nos informa del fin del
juego.

• Agregue al juego anterior niveles de dificultad.