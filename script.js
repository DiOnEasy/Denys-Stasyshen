let firstBox = [];
let secondBox = [];
let firstBoxNumeric;
let secondBoxNumeric;
var x;
let sumFirstBox = 0;
let sumSecondBox = 0;
let howManyIteration = prompt("Введите количество итераций: ")

for (let k = 0; k < howManyIteration; k++) {
    getRandom();

}

function getRandom() {
    firstBoxNumeric = (Math.floor(Math.random() * 100000));
    firstBox.push(firstBoxNumeric);
    x = Math.floor(Math.random() * 2);
    console.log(x)

    checkNumber();
    secondBox.push(secondBoxNumeric);
    console.log(firstBox, secondBox)
    sumBox();

}

function checkNumber() {
    // console.log(x)

    if (x == 0) {
        secondBoxNumeric = firstBoxNumeric / 2;
    } else {
        secondBoxNumeric = firstBoxNumeric * 2;
    }
    // console.log(secondBoxNumeric)
}
// (function() {
//     document.addEventListener('keydown', function(e) {
//         if (e.keyCode === 13) {
//             getRandom()
//         }
//     });
// })();

function sumBox() {
    sumFirstBox = 0;
    sumSecondBox = 0;
    for (let i = 0; i < firstBox.length; i++) {

        sumFirstBox = sumFirstBox + firstBox[i];
        sumSecondBox = sumSecondBox + secondBox[i];
    }
    console.log(sumFirstBox, sumSecondBox)
}