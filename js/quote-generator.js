// button click event listener
let button = document.getElementById("quote-button");
let quote = document.getElementById("quote");
let author = document.getElementById("author");

function handleClick() {
    fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = '"' + data.quote + '"';
        author.innerHTML = '-' + data.author;
    })
}

button.addEventListener("click", handleClick);
