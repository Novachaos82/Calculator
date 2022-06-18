let operator = "x";

const prevDisplay = document.querySelector(".previous-display");
const currDisplay = document.querySelector(".current-display");

const allClear = document.querySelector(".all-clear");
const clear = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equals");

//function currentDisplay()
//{
//    currDisplay = ;
//}

/*all clear button*/
allClear.addEventListener("click", () => {
  prevDisplay.innerHTML = "";
  currDisplay.innerHTML = "";
});

/*taking numbers input in current display*/
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (number.innerText.includes(".") && currDisplay.innerText.includes("."))
      return;
    const input = number.innerText;
    currDisplay.innerText = currDisplay.innerText.toString() + input.toString();
  });
});

equal.addEventListener("click", () => {
  calculate(operator);
});

operators.forEach((operation) => {
  operation.addEventListener("click", () => {
    //console.log(operation.innerText);
    if (operation.innerText === "x") {
      prevDisplay.innerText += currDisplay.innerText.toString() + "x";
      currDisplay.innerText = "";
      operator = operation.innerText;
    }
  });
});

function calculate(op) {
  if (op === "x") {
    const result = float(prevDisplay.innerText) * float(currDisplay.innerText);
    currDisplay.innerText = result;
  }

  if (op === "+") {
  }

  if (op === "-") {
  }

  if (op === "÷") {
  }
}

function display() {
  currDisplay.innerText = 0;
  prevDisplay.innerText = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  calculate();
  display();
});
