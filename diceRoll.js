const dice = { 1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅" };

let rollInput = document.querySelector("#number-of-dice");
const rollResult = document.querySelector("#dice-para");
const diceRoll = document.querySelector("#roll-btn");
const ul = document.querySelector("#history-list");
const sumStatus = document.querySelector("#sum-para");
const dieSumArray = [];


// const addToHistory = (diceHTML, sumHTML) => {
//     **corey's function with (dice.html.textcontent) end text content has sumhtml.textcontent too
// }
// if ()


let sum = 0;
let rollCount = 0;



const rollingDice = (event) => {
    event.preventDefault();
    sumStatus.textContent = "";
    debugger
//   sumStatus.textContent = sum;
  let diceThrow = [];
  // let num = Number(rollInput.value);
  for (let i = 0; i < rollInput.valueAsNumber; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
    diceThrow.push(dice[roll]);
  }
  rollResult.textContent = diceThrow.join("");
  debugger
  sumStatus.textContent += sum;

  if (rollCount.textContent === "") {
    dieSumArray.push(`${rollResult.textContent} = ${sum}`);

  }

  
  // if sumStatus = empty String
  // run function
  // else, create li & append and then run function.

  // feels redundant??

    // ** to go with COREY's edits** addToHistory(dicePara, sumPara);  

  if (rollCount > 0) {
      const sumHistory = document.createElement("li");
      ul.appendChild(sumHistory);
      sumHistory.textContent = `${dieSumArray[rollCount - 1]}`;
    }
    rollCount++;
    sum = 0;
};

diceRoll.addEventListener("click", rollingDice);

