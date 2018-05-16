function divideOrMultiply(num1, num2) {

    if (Number(num2) >= Number(num1)) {
        return num1 * num2;
    } else if (num1 > num2) {
        return num1 / num2;
    } else {
        return 'Invalid Input';
    }
}

console.log(divideOrMultiply(2, 3));
console.log(divideOrMultiply(144, 12));