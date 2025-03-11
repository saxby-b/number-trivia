let numberTrivia = document.querySelector(".number-trivia");
const triviaButton = document.querySelector(".trivia");
const finishButton = document.querySelector(".finish");
const change = document.querySelector(".change span");
let triviaArray = [];
let li = document.createElement("li");

const fetchNumberTrivia = async function () {
  let res = await fetch("http://numbersapi.com/random?min=1&max=20");
  let trivia = await res.text();
  trivia.trim();
  console.log(trivia);
  triviaArray = trivia.split("\n");
  const randomIndex = Math.floor(Math.random() * triviaArray.length);
  const randomTrivia = triviaArray[randomIndex].trim();
  li.innerText = trivia;
  numberTrivia.append(li);
  triviaArray = li;
};

triviaButton.addEventListener("click", function () {
  numberTrivia.classList.remove("hide");
  fetchNumberTrivia();
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
