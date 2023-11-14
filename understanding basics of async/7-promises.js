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

getTodos("todos/luigi.json")
    .then((data) => console.log("promise resolved", data))
    .catch((err) => console.log("promise rejected", err));

// promise example
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         let success = true;
//         if (success) {
//             resolve("successfully done");
//         } else {
//             reject("Error: file not found");
//         }
//     });
// };

// 2 ways of using promise

// getSomething().then(
//     (data) => console.log(data),
//     (err) => console.log(err)
// );

// getSomething()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
