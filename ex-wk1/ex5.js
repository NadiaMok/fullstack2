arr = [1, 2, 3, 4];

const calculateSum = arr.reduce(reducer = (accumulator, currentValue) =>
    accumulator + currentValue);
const calculateProduct = arr.reduce(reducer = (accumulator, currentValue) =>
    accumulator * currentValue);

console.log("Sum: ", calculateSum);
console.log("Product: ", calculateProduct);