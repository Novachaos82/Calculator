let operator = "";

const prevDisplay = document.querySelector(".previous-display");
const currDisplay = document.querySelector(".current-display");

const allClear = document.querySelector(".all-clear");
const clear = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equals");

/*buttons*/
allClear.addEventListener("click", () => {
  allClearFun();
});

clear.addEventListener("click", () => {
  clearFun();
  console.log("yes");
});

equal.addEventListener("click", () => {
  calculate(operator);
});

/*taking numbers input on current display*/
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numberEntered(number.innerText);
  });
});

/*operator events*/
operators.forEach((operation) => {
  operation.addEventListener("click", () => {
    //console.log(operation.innerText);
    {
      operatorFun(operation.innerText);
    }
  });
});

function clearFun() {
  currDisplay.innerText = currDisplay.innerText.slice(0, -1);
}

function allClearFun() {
  prevDisplay.innerHTML = "";
  currDisplay.innerHTML = "";
  operator = "";
}
/*input*/
function numberEntered(number) {
  if (number === "." && currDisplay.innerText.includes(".")) return;
  const input = number;
  currDisplay.innerText = currDisplay.innerText.toString() + input.toString();
}

/*operator selection helper*/
function operatorFun(operation) {
  if (currDisplay.innerText != "" && prevDisplay.innerText === "") {
    if (operation === "x") {
      prevDisplay.innerText = currDisplay.innerText.toString() + "x";
      currDisplay.innerText = "";
      operator = operation;
    }
    if (operation === "+") {
      prevDisplay.innerText = currDisplay.innerText.toString() + "+";
      currDisplay.innerText = "";
      operator = operation;
    }
    if (operation === "-") {
      prevDisplay.innerText = currDisplay.innerText.toString() + "-";
      currDisplay.innerText = "";
      operator = operation;
    }
    if (operation === "÷") {
      prevDisplay.innerText = currDisplay.innerText.toString() + "÷";
      currDisplay.innerText = "";
      operator = operation;
    }
  }
}

/*calculates*/
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

/*keyboard support function*/
document.addEventListener("keydown", (e) => {
  if ((e.key <= 9 && e.key >= 0) || e.key === ".") {
    numberEntered(e.key);
  }

  if (e.key === "*") {
    operator = "x";
    operatorFun(operator);
  }
  if (e.key === "/") {
    operator = "÷";
    operatorFun(operator);
  }
  if (e.key === "+" || e.key === "-") {
    operator = e.key;
    operatorFun(operator);
  }

  if (prevDisplay.innerText != "" && currDisplay.innerText != "") {
    if (e.key === "Enter") {
      calculate(operator);
    }
  }
  if (e.key === "Backspace") {
    clearFun();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  display();
});
