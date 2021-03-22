const dice = { 1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅" };

const diceForm = document.querySelector(".dice-roll");
const rollInput = document.querySelector("#number-of-dice");
const rollResult = document.querySelector("#dice-para");
const sumStatus = document.querySelector("#sum-para");
const ul = document.querySelector("#history-list");


const rollingDice = (event) => {
  event.preventDefault();
  if(sumStatus.textContent) {
    const sumHistory = document.createElement("li");
    ul.appendChild(sumHistory);
    sumHistory.textContent = `${rollResult.textContent} = ${sumStatus.textContent}`;
  }
  sumStatus.textContent = "";
  
  let diceThrow = "";
  let sum = 0;
  if(rollInput.value === "") return;
  for (let i = 0; i < rollInput.valueAsNumber; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
    diceThrow += dice[roll];
  }
  rollResult.textContent = diceThrow;
  sumStatus.textContent += sum;
};

diceForm.addEventListener("submit", rollingDice);

