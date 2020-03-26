const capitalize = ([first, ...rest]) => {
    return firstLetter = first.toUpperCase() + rest.join('').toLowerCase();
}

console.log(capitalize('heeeeeeeeeeeeey'));
console.log(capitalize('iPhone'));
// console.log(capitalize('PlainText'));