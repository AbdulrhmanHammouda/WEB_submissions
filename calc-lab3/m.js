const display = document.getElementById("display");
let errorState = false; // track if "Error" is showing

function append(value) {
  if (errorState) {
    // If the display currently says "Error", clear it before adding new input
    display.value = "";
    errorState = false;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  errorState = false;
}

function toggleSign() {
  if (errorState) return; // ignore if error showing
  if (display.value) {
    display.value = display.value.startsWith('-') 
      ? display.value.slice(1)
      : '-' + display.value;
  }
}

function calculate() {
  try {
    let result = eval(display.value.replace('÷', '/').replace('×', '*'));
    if (isNaN(result) || result === undefined) throw "Error";
    display.value = result;
    errorState = false;
  } catch {
    display.value = "Error";
    errorState = true;
  }
}
