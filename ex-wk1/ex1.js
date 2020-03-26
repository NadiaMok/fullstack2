function greeter(arr, counter) {
    var message = 'Hello, ';

    for (var i = 0; i < arr.length; i++) {
        console.log(message + arr[i]);
    }
}

const greeter = (arr) => {
    let message = 'Hello ';

    for (const el of arr) {
        console.log('${message}', el);
    }
}

greeter(['Steve Wozniak', 'Bill Gates', 'Steve Jobs'], 3);