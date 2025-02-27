let numberTrivia = document.querySelector(".number-trivia");

const fetchNumberTrivia = async function() {
    const res = await fetch("http://numbersapi.com/27");
    const trivia = await res.text();
    newLi();
}

fetchNumberTrivia();

const newLi = function() {
    const li = document.createElement;
    li.innerText = trivia;
    numberTrivia.append("li");
}