const request = new XMLHttpRequest(); // create an object

request.addEventListener("readystatechange", () => {
    if (request.status === 200 && request.readyState === 4) {
        console.log(request);
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log("Error: could not find the data");
    }
});

// open method - req type , endpoint
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
