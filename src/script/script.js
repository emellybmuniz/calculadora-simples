const display = document.getElementsByClassName("display")[0];
const numberKeys = document.getElementsByClassName("key");
const operatorKeys = document.getElementsByClassName("operator");
const clearKey = document.getElementsByClassName("dell")[0];
const equalsKey = document.getElementsByClassName("equal")[0];

// impede a entrada de letras
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
      const result = eval(display.value.replace(/[^0-9+\-*/.]/g, ""));
      display.value = result;
    } else if (["add", "multiply", "subtract", "divide"].includes(action)) {

      // remove espaço antes de adicionar o operador
      if (displayedNum && !/\s[+-/*]$/.test(displayedNum)) {
        display.value += ` ${keyContent} `;
      }
    }
  }
});

function clearInput() {
  display.value = "";
}

// adicionar evento de escuta no enter para mostrar resultados