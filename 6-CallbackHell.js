const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.status === 200 && request.readyState === 4) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("Error: could not find the data", undefined);
        }
    });

    request.open("GET", resource);
    request.send();
};

getTodos("todos/luigi.json", (err, data) => {
    console.log(data);
    getTodos("todos/mario.json", (err, data) => {
        console.log(data);
        getTodos("todos/shaun.json", (err, data) => {
            console.log(data);
        });
    });
});
