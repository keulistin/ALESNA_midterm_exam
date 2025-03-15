function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


console.log(sumArray([1, 2, 3, 4, 5])); 