function onlyUniques(...arg) {
  let newArray = [];

  for (elemento of arg) {
    newArray.includes(elemento) ? '' : newArray.push(elemento);
  }

  return newArray;
}

// Solution 2

function onlyUniquesTwo(...arg) {
  let newSet = new Set(arg);

  let toArray = [...newSet];

  return toArray;
}

console.log(onlyUniques(1, 2, 2, 'name', 5, 1, 5, 7, 'lastname', 'name'));

console.log(onlyUniquesTwo(1, 2, 2, 'name', 5, 1, 5, 7, 'lastname', 'name'));
