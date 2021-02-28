const dice = [
  { entity: "9856", icon: "⚀", value: 1 },
  { entity: "9857", icon: "⚁", value: 2 },
  { entity: "9858", icon: "⚂", value: 3 },
  { entity: "9859", icon: "⚃", value: 4 },
  { entity: "9860", icon: "⚄", value: 5 },
  { entity: "9861", icon: "⚅", value: 6 },
];

// &#9856 = ⚀  1
// &#9857 = ⚁  2
// &#9858 = ⚂  3
// &#9859 = ⚃  4
// &#9860 = ⚄  5
// &#9861 = ⚅  6

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

