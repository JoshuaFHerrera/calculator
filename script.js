const display = document.getElementById("display");
display.value = 0;
let firstInput = false;

function numOrOp(input) {
  if (!firstInput) {
    display.value = input;
    firstInput = true;
  } else {
    display.value += input;
  }
}

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = 0;
  firstInput = false;
}
