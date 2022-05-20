async function sendRequest() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {})
        console.log("Got response");
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }     console.log(data)

}
sendRequest();