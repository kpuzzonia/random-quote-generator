// button click event listener
let button = document.getElementById("quote-button");
let quote = document.getElementById("quote");

function handleClick() {
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

button.addEventListener("click", handleClick);
// call API with fetch()
// parse the JSON response
// grab quote text and author from the data
// inject into HTML elements