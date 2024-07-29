let digits = document.querySelector("#digits");
let operand1 = 0;
let operator = "";
let isNew = false;

let elements = document.querySelectorAll(".btns");
elements.forEach(function (element) {
  element.addEventListener("click", clickHandler);
});

let operate = document.querySelectorAll(".operate");
operate.forEach(function (element) {
  element.addEventListener("click", operation);
});

function operation(e) {
  let target = e.target;

  if (target.innerText == "=") {
    let operand2 = parseInt(digits.innerText);
    let resultData;

    switch (operator) {
      case "+":
        resultData = operand1 + operand2;
        break;
      case "-":
        resultData = operand1 - operand2;
        break;
      case "*":
        resultData = operand1 * operand2;
        break;
      case "/":
        resultData = operand1 / operand2;
        break;
    }

    digits.innerText = resultData;
    operand1 = 0;
    isNew = true;
    operator = "";
  } else {
    operand1 = parseInt(digits.innerText);
    operator = target.innerText;
    isNew = true;
  }
}

function clickHandler(e) {
  if (digits.innerText == "0" || isNew) {
    digits.innerText = "";
    isNew = false;
  }

  let target = e.target;
  digits.innerText += target.innerText;
}

let ac = document.getElementById("ac");
ac.addEventListener("click", function () {
  let target = document.getElementById("digits");
  target.innerText = 0;
  operand1 = 0;
  operator = "";
  isNew = false;
});
