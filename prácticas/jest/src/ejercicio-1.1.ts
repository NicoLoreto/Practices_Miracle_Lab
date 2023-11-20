export function fizzBuzz(num: number): string {
  
    if (typeof num === 'undefined') {
      return 'Debe ingresar un valor';
    }
  
    if (num === 0) {
      return 'El valor ingresado no puede ser igual a cero';
    }
  
    if (typeof num === 'string') {
      return 'La función no permite cadenas de texto';
    }
  
    if (typeof num !== 'number') {
      return 'El valor ingresado debe ser un número';
    }
  
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    }
  
    if (num % 3 === 0) {
      return 'Fizz';
    }
  
    if (num % 5 === 0) {
      return 'Buzz';
    } else {
      return num.toString();
    }
}

