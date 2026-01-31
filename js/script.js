let numberTrivia = document.querySelector(".number-trivia");
const quoteButton = document.querySelector(".quote");
const finishButton = document.querySelector(".finish");
const change = document.querySelector(".change span");
let triviaArray = [];
let li = document.createElement("li");

const fetchMotivationalQuote = async function () {
  let res = await fetch(
    "https://motivational-spark-api.vercel.app/api/quotes/random/10",
  );
  let trivia = await res.json();
  console.log(trivia);
};

quoteButton.addEventListener("click", fetchMotivationalQuote);

let d = new Date();
let year = d.getFullYear();
change.innerText = year;
