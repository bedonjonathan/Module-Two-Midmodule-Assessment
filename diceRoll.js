const dice = [
  { 1: "⚀" },
  { 2: "⚁" },
  { 3: "⚂" },
  { 4: "⚃" },
  { 5: "⚄" },
  { 6: "⚅" },
];


let rollInput = document.querySelector("#number-of-dice");
const rollResult = document.querySelector("#dice-para");
const diceRoll = document.querySelector("#roll-btn");
const ul = document.querySelector("#history-list");
const sumStatus = document.querySelector("#sum-para")
const dieSumArray = [];

let sum = 0;
let rollCount = 0;
const rollingDice = (event) => {
    event.preventDefault();
    sumStatus.textContent = "Sum: "
    let diceThrow = [];
    let num = Number(rollInput.value);
    for (let i = 0; i < num; i++) {
        let roll = Math.floor(Math.random() * dice.length);
        diceThrow.push(dice[roll].icon);
        sum += dice[roll].value;
    }
    rollResult.textContent = diceThrow.join("");
    sumStatus.textContent += sum;
    
    dieSumArray.push(`${rollResult.textContent} = ${sum}`);
    
    if (rollCount > 0) {
        const sumHistory = document.createElement("li");
        ul.appendChild(sumHistory);
        sumHistory.textContent = `${dieSumArray[rollCount-1]}`;
    }
    rollCount++
    sum = 0
}


diceRoll.addEventListener("click", rollingDice) 

