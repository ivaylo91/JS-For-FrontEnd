function productThreeNumbers(num1, num2, num3) {

    let product = Number(num1) * Number(num2) * Number(num3);

    if (product < 0) {
        return 'Negative';
    } else {
        return 'Positive';
    }
}

console.log(productThreeNumbers(2, 3, -1)); // Negative
console.log(productThreeNumbers(5, 4, 3)); // Positive
console.log(productThreeNumbers(-3, -4, 5)); // Positive