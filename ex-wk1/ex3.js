const colors = ['yellow', 'orange', 'white']
const capitalize = ([first, ...rest]) => {
    return firstLetter = first.toUpperCase() + rest.join('').toLowerCase();
}
const capitalizeColor = colors.map(capitalize);

console.log(capitalizeColor);