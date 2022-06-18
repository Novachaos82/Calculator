let operator = "";

const prevDisplay = document.querySelector(".previous-display");
const currDisplay = document.querySelector(".current-display");

const allClear = document.querySelector(".all-clear");
const clear = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equals");

/*all clear button*/
allClear.addEventListener("click", () => {
  prevDisplay.innerHTML = "";
  currDisplay.innerHTML = "";
  operator = "";
});

clear.addEventListener("click", () => {
  currDisplay.innerText = currDisplay.innerText.slice(0, -1);
  console.log("yes");
});

equal.addEventListener("click", () => {
  calculate(operator);
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

operators.forEach((operation) => {
  operation.addEventListener("click", () => {
    //console.log(operation.innerText);
    if (currDisplay.innerText != "") {
      if (operation.innerText === "x") {
        prevDisplay.innerText = currDisplay.innerText.toString() + "x";
        currDisplay.innerText = "";
        operator = operation.innerText;
      }
      if (operation.innerText === "+") {
        prevDisplay.innerText = currDisplay.innerText.toString() + "+";
        currDisplay.innerText = "";
        operator = operation.innerText;
      }
      if (operation.innerText === "-") {
        prevDisplay.innerText = currDisplay.innerText.toString() + "-";
        currDisplay.innerText = "";
        operator = operation.innerText;
      }
      if (operation.innerText === "÷") {
        prevDisplay.innerText = currDisplay.innerText.toString() + "÷";
        currDisplay.innerText = "";
        operator = operation.innerText;
      }
    }
  });
});

function calculate(op) {
  if (op === "x") {
    const result =
      parseFloat(prevDisplay.innerText) * parseFloat(currDisplay.innerText);
    currDisplay.innerText = result;
    prevDisplay.innerText = "";
  }

  if (op === "+") {
    const result =
      parseFloat(prevDisplay.innerText) + parseFloat(currDisplay.innerText);
    currDisplay.innerText = result;
    prevDisplay.innerText = "";
  }

  if (op === "-") {
    const result =
      parseFloat(prevDisplay.innerText) - parseFloat(currDisplay.innerText);
    currDisplay.innerText = result;
    prevDisplay.innerText = "";
  }

  if (op === "÷") {
    const result =
      parseFloat(prevDisplay.innerText) / parseFloat(currDisplay.innerText);
    if (currDisplay.innerText == 0) {
      alert("error");
    }
    currDisplay.innerText = result;
    prevDisplay.innerText = "";
  }
}

function display() {
  currDisplay.innerText = "";
  prevDisplay.innerText = "";
}

//document.addEventListener("keydown", (e) => {
//  if ((e.key <= 9 && e.key >= 0) || (e.key = ".")) {
//    currDisplay.innerText = currDisplay.innerText.toString() + e.key.toString();
//    if (e.key === "*" || e.key === "-" || e.key === "+" || e.key === "/") {
//      {
//        calculate(e.key);
//      }
//    }
//  }
//});

document.addEventListener("DOMContentLoaded", () => {
  display();
});
