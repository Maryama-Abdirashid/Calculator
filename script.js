let display = document.getElementById("display");

function press(key) {
  if (display.value === "0" || display.value === "Error") {
    display.value = key === "*" ? "x" : key;
  } else {
    display.value += key === "*" ? "x" : key;
  }
}

function clearDisplay() {
  display.value = "0";
}

function calculate() {
  try {
    let expression = display.value.replace(/x/g, "*");
    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }
}
