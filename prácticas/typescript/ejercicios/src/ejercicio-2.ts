// Code Breaker
function game() {
    const numSecret = "2561";
    let randomNumber: string = "";
    let crosses: string = "";
    let dashes: string = "";
    while (randomNumber.length < 4) {
        const number = Math.floor(Math.random() * 6);
        const numberToString = number.toString();
        randomNumber += numberToString;
    }

    console.log("The random number is:", randomNumber);

    // Remove repeated elements.
    const newSet = new Set(randomNumber);
    const arrRandomNumbers = [...newSet];

    // Save in an array the elements that have passed the condition for "X".
    // This way, they are not considered in future iterations
    const touched = [];

    for (let i = 0; i < arrRandomNumbers.length; i++) {
        if (arrRandomNumbers[i] === numSecret[i]) {
            crosses += "X";
            touched.push(arrRandomNumbers[i]);
        }
        if (numSecret.includes(arrRandomNumbers[i]) && !touched.includes(arrRandomNumbers[i])) {
            dashes += "-";
        }
    }

    return crosses + dashes;
}
console.log("Result:", game());
