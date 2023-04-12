console.log(multiplyNumbers(10, 2))

// we cannot access multiplyNumbers before initialization because it is witten in function expression for that we have to write it after initialization or we have to not use function expression

const multiplyNumbers = function (a, b) {
    return a * b
}