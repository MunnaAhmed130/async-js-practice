const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.status === 200 && request.readyState === 4) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback("Error: could not find the data", undefined);
        }
    });

    // change async behaviour with true false - default is true
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log("callback fired");
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
