const request = new XMLHttpRequest(); // create an object

// console.log(request.readyState); // request unsent - readyState 0

request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});

// open method - req type , endpoint
request.open("GET", `https://jsonplaceholder.typicode.com/todos/`);
// send method
request.send();
