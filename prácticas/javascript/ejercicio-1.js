const names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
];

function golfScore(par, strokes) {
  if (strokes <= 0 || par <= 0) {
    return 'Los valores no son correctos';
  }
  if (strokes === 1) {
    return names[0];
  }
  if (strokes <= par - 2) {
    return names[1];
  }
  if (strokes === par - 1) {
    return names[2];
  }
  if (strokes === par) {
    return names[3];
  }
  if (strokes === par + 1) {
    return names[4];
  }
  if (strokes === par + 2) {
    return names[5];
  }
  if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 1));
