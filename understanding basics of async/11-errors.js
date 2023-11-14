const getTodos = async () => {
    const response = await fetch("todos/luigis.json");
    // console.log(response);
    if (response.status !== 200) {
        throw new Error("file not found");
    }
    const data = await response.json();
    return data;
};

getTodos()
    .then((data) => console.log("resolved", data))
    .catch((err) => console.log("rejected", err.message));
