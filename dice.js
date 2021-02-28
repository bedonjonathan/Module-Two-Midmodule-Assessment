const diceFaces = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
const form = document.querySelector("form");
const numOfDice = document.querySelector("#num-of-dice");
const rollButton = document.querySelector("#rollButton");
let diceResult = document.querySelector("#dice-para");
let sumText = document.querySelector("#sum-para");
const originalSumtext = sumText.textContent;
let ul = document.querySelector("#history-list");
let dice;

form.button.addEventListener("click", (e) => {
  e.preventDefault();
  let sum = 0;
  sumText.textContent = originalSumtext;
  dice = "";
  for (let i = 0; i < Number(numOfDice.value); i++) {
    let randomNum = Math.floor(Math.random() * diceFaces.length);
    dice += diceFaces[randomNum];
    sum += randomNum + 1;
  }
  diceResult.innerHTML = dice;
  sumText.textContent += sum;
  let li = ""
  li = document.createElement("li");
  li.innerHTML += dice;
  li.innerText += ` = ${sum}`;
  button.addEventListener("click", (e) => { 
    ul.appendChild(li);

  },);
 
});
