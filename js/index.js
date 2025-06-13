let btn = Array.from(document.querySelectorAll(".use-btn"));
let input = document.getElementById("input");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    btnValue = e.target.value;
    if (btnValue != "=" && btnValue != "AC" && btnValue != "⌫") {
      value(btnValue);
    } else if (btnValue == "=") {
      input.value = eval(input.value);
    } else if (btnValue == "AC") {
      input.value = 0;
    } else if (btnValue == "⌫") {
      input.value.slice(0, -1);
      input.value = input.value.slice(0, -1);
      if (input.value == "") {
        input.value = "0";
      }
    }
  });
}
function value(value) {
  if (input.value == "0") {
    input.value = null;
  }
  if (value == "×") {
    input.value += "*";
  } else if (value == "÷") {
    input.value += "/";
  } else {
    input.value += value;
  }
}
