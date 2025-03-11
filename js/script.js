let numberTrivia = document.querySelector(".number-trivia");
const triviaButton = document.querySelector(".trivia");
const finishButton = document.querySelector(".finish");

const fetchNumberTrivia = async function () {
  let res = await fetch("http://numbersapi.com/27");
  let trivia = await res.text();
  trivia.trim();
  console.log(trivia);
  let li = document.createElement("li");
  li.innerText = trivia;
  numberTrivia.append(li);
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
})
