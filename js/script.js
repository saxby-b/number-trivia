let numberTrivia = document.querySelector(".number-trivia");
const button = document.querySelector("button");

const fetchNumberTrivia = async function () {
  let res = await fetch("http://numbersapi.com/27");
  let trivia = await res.text();
  trivia.trim();
  console.log(trivia);
  let li = document.createElement("li");
  li.innerText = trivia;
  numberTrivia.append(li);
};




button.addEventListener("click", function () {
  numberTrivia.classList.remove("hide");
  fetchNumberTrivia();
});
