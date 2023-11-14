// fetch api
fetch("todos/luigi.json")
    .then((response) => {
        // console.log(response);
        // returns a promise
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    });
