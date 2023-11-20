# Jest

## Ejercicio 1.1

Debemos escribir una función, fizzBuzz, que acepte un número y devuelva una cadena:

• si el número es divisible por 3, devuelve Fizz

• si el número es divisible por 5, devuelve Buzz

• si el número es divisible por 3 y 5, devuelve FizzBuzz

• si el número no cumple ninguna de las condiciones 
anteriores, devuelve el número

A medida que crea escribimos la función en fizzbuzz.js, también debemos escribir las pruebas
en index.test.js. Debemos ir creando nuestros propios casos de prueba.

Casos extremos a considerar:

• ¿Qué debería devolver fizzbuzz(0)?

• ¿Qué debería pasar si a la función se le pasa una cadena?

## Ejercicio 1.2

Escriba una función que tome un año y devuelva un valor booleano que indique si el año es un
año bisiesto.

Tener en cuenta que:

• Los años que son divisibles por 4 son años bisiestos

• Los años que son divisibles por 100 no son años bisiestos

• Los años que son divisibles por 400 son años bisiestos

## Ejercicio 1.3

Escriba una función que tome una cadena de ADN (por ejemplo, ’CTAGGGTA’) y devuelva
una nueva cadena con cualquier valor base de ADN no canónico eliminado. 

Los valores base canónicos son caracteres únicos: ’C’, ’T’, ’A’ y ’G’ únicamente. 

Haga que la función distinga entre mayúsculas y minúsculas, lo que significa que ’c’ (minúsculas) debe eliminarse de la cadena, pero ’C’ (mayúsculas) es correcto y debe permanecer. Si la cadena de ADN está vacía,
simplemente devuelva una cadena vacía.

## Ejercicio 1.4

Escriba una función que tome una arreglo y devuelva la suma de todos los números positivos del arreglo. Los valores que se pueden convertir en números deben convertirse e incluirse en la suma si son positivos. Si la matriz está vacía, devuelve cero.

## Ejercicio 1.5

Dada una cadena, encuentre el primer carácter que se repite consecutivamente en ella y devuelva su índice. Si no hay caracteres repetidos, devuelve -1. Esta función debe ignorar cualquier espacio y no debe distinguir entre mayúsculas y minúsculas: trate ’a’ como equivalente a ’A’.

## Ejercicio 1.6

Dada una matriz de 1s y 0s, encuentre el número máximo de 1s consecutivos en esta matriz. Si
hay algún valor distinto de 1 o 0 en la matriz, es un error y devuelve -1. Los 1s y 0s pueden ser valores de cadena o enteros, ambos son aceptables y deben considerarse equivalentes.

## Ejercicio 1.7

Para este ejercicio ya se escribieron las pruebas.
Debemos escribir la función de búsqueda para pasar las cuatro pruebas.

<pre>
// Data
const users = [
  {
    login: 'knuth',
    firstName: 'Donald',
    lastName: 'Knuth',
    likes: ['C', 'Unix'],
  },
  {
    login: 'norvig',
    firstName: 'Peter',
    lastName: 'Norvig',
    likes: ['AI', 'Search', 'NASA', 'Mars'],
  },
  {
    login: 'mfowler',
    firstName: 'Martin',
    lastName: 'Fowler',
    likes: ['Design Patterns', 'Refactoring'],
  },
  {
    login: 'kent',
    firstName: 'Kent',
    lastName: 'Beck',
    likes: ['TDD', 'wikis', 'Design Patterns'],
  },
];

// lookup()
const lookup = (login, property) => {
  // START -- THIS IS WHERE YOUR CODE GOES
  // END
};

// Tests

describe('lookup()', () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup('norvig', 'likes');
    const expected = ['AI', 'Search', 'NASA', 'Mars'];

    expect(actual).toEqual(expected);
  });
  it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
    const actual = lookup('knuth', 'lastName');
    const expected = 'Knuth';

    expect(actual).toEqual(expected);
  });
  it('with unknown user should throw an error with the correct message', () => {
    expect(() => {
      lookup('nobody', 'likes');
    }).toThrow(/Could not find user/);
  });
  it('with unknown property should throw an error the correct message', () => {
    expect(() => {
      lookup('mfowler', 'noprop');
    }).toThrow(/Could not find property/);
  });
});
</pre>

## Ejercicio 1.8

Para este ejercicio ya se escribieron las pruebas.
Debemos escribir la función de búsqueda para pasar las cuatro pruebas.

<pre>

// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  // TODO: implement
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  // TODO: implement
};

describe('setPrice()', () => {
  it('should set the price in the given item object, immutably.', () => {
    const item = {
      name: 'test',
      price: 30,
    };

    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
      name: 'test',
      price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
  });
});

describe('addToCart()', () => {
  it('should add item to cart, immutably', () => {
    const originalCart = [];
    const item = {
      name: 'Toy',
      price: 30,
    };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
  });
});

</pre>
