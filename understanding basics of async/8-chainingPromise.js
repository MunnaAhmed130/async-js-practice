const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.status === 200 && request.readyState === 4) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("Error: could not find the data");
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

// /* chaining promise on resolve
getTodos("todos/luigi.json")
    .then((data) => {
        console.log("promise 1 resolved", data);
        return getTodos("todos/mario.json");
    })
    .then((data) => {
        console.log("promise 2 resolved", data);
        return getTodos("todos/shaun.json");
    })
    .then((data) => console.log("promise 3 resolved", data))
    .catch((err) => console.log("promise rejected", err));
// */

/* chaining promise on resolve or reject

getTodos("todos/luigi.json")
    .then(
        (data) => {
            console.log("promise 1 resolved", data);
            return getTodos("todos/mario.json");
        },
        (err) => {
            console.log("promise 1 rejected", err);
            return getTodos("todos/mario.json");
        }
    )
    .then(
        (data) => {
            console.log("promise 2 resolved", data);
            return getTodos("todos/shauns.json");
        },
        (err) => {
            console.log("promise 2 rejected", err);
            return getTodos("todos/shaun.json");
        }
    )
    .then(
        (data) => console.log("promise 3 resolved", data),
        (err) => console.log("promise 3 rejected", err)
    );

    */
