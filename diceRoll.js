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

let sum = 0;
diceRoll.addEventListener("click", (event) => {
  event.preventDefault();
  let diceThrow = [];
  let num = Number(rollInput.value);
  for (let i = 0; i < num; i++) {
    let roll = Math.floor(Math.random() * dice.length);
    diceThrow.push(dice[roll].icon);
    sum += dice[roll].value;
  }
  rollResult.textContent = diceThrow.join("");
});
