function computeScore(word: string): number {
    const letters: string[] = word.toUpperCase().split('');
    return letters.reduce((accum: number, currentValue: string) => accum += getPointsFor(currentValue), 0);
}

function getPointsFor(letter: string): number {
    const lettersAndPoints: (string | number)[][] = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];

    return lettersAndPoints.reduce((accum: number, currentValue: (string | number)[]) => {
        const [letters, score]: any = currentValue;
        if (letters.split('').find((ll: string) => ll === letter)) {
            return accum += score;
        }
        return accum;
    }, 0);
}

console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);