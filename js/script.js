let numberTrivia = document.querySelector(".number-trivia");
const triviaButton = document.querySelector(".trivia");
const finishButton = document.querySelector(".finish");
const change = document.querySelector(".change span");
let triviaArray = [];
let li = document.createElement("li");

const fetchMotivationalQuote = async function () {
  let res = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random/10");
  let trivia = await res.json();
  console.log(trivia);
};

triviaButton.addEventListener("click", function () {
  numberTrivia.classList.remove("hide");
  fetchMotivationalQuote();
  triviaButton.classList.add("hide");
  finishButton.classList.remove("hide");
});

finishButton.addEventListener("click", function () {
  numberTrivia.classList.add("hide");
  triviaButton.classList.remove("hide");
  finishButton.classList.add("hide");
  for (trivia of triviaArray) {
    if (triviaArray[trivia]) {
      numberTrivia.remove(li);
    }
  }
});

let d = new Date();
let year = d.getFullYear();
change.innerText = year;
