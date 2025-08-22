const display = document.getElementsByClassName("display")[0];
const numberKeys = document.getElementsByClassName("key");
const operatorKeys = document.getElementsByClassName("operator");
const clearKey = document.getElementsByClassName("dell")[0];
const equalsKey = document.getElementsByClassName("equal")[0];

// Prevent default behavior for number keys
document.addEventListener("keydown", (e) => {
  if (
    isNaN(Number(e.key)) &&
    !["+", "-", "*", "/", "Backspace", "Enter"].includes(e.key)
  ) {
    e.preventDefault();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.value;

    if (!action) {
      display.value += keyContent;
    } else if (action === "clear") {
      clearInput();
    } else if (action === "equal") {
      display.value = calculate(display.value);
    } else if (["add", "multiply", "subtract", "divide"].includes(action)) {

      if (displayedNum && !/\s[+-/*]$/.test(displayedNum)) {
        display.value += ` ${keyContent} `;
      }
    }
  }
});

function calculate(expression) {
  const sanitizedExpression = expression.replace(/[^0-9+\-*/.]/g, "");

  if (!sanitizedExpression) {
    return "";
  }

  try {
    const result = new Function("return " + sanitizedExpression)();

    if (!isFinite(result)) {
      return "Conta inválida!";
    }

    return result;
  } catch (e) {
    return "Conta inválida!";
  }
}

function clearInput() {
  display.value = "";
}