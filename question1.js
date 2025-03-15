function sumArray(numbers) { //we have here our function in an array
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
} //using the reduce method,it iterates over each element in the array


console.log(sumArray([1, 2, 3, 4, 5])); //output