const compareNumToTen = (numberToTest) => {
    prom = new Promise((resolve, reject) => {
        if (numberToTest > 10) {
            resolve(numberToTest + " is greater than 10, success!")
        } else {
            reject(numberToTest + " is less than 10, error!")
        }
    })
    return prom
}


compareNumToTen(0.1)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareNumToTen(101)
    .then(result => console.log(result))
    .catch(error => console.log(error));