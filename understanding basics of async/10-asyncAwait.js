// async & await

const getTodos = async () => {
    const response = await fetch("todos/luigi.json");
    // const data = await response.json();
    return await response.json();
    // console.log(data);
};

console.log(1);
console.log(2);

getTodos().then((data) => console.log("resolved", data));

console.log(3);
console.log(4);

/* fetch api
fetch("todos/luigi.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log("rejected", err);
    });
*/
