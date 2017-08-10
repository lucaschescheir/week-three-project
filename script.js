let display = document.getElementById('blank');
let numbers = document.getElementsByClassName("square");
let clear = document.getElementById('clear');
let enter = document.getElementById('enter');
let allNumbers = [];
let operators = [];
let number = [];

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}
console.log(divide(21, 7))
console.log(numbers)
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function() {
    display.textContent += numbers[i].innerHTML;
    allNumbers.push(numbers[i].innerHTML);
  })
};

clear.addEventListener('click', function() {
  display.textContent = '';
  allNumbers = [];
  number = [];
  operators = [];
})
let numbersList = [];
enter.addEventListener('click', function() {

  let operatorsList = [];
  let piece = '';
  for (let i = 0; i < allNumbers.length; i++) {

    if (allNumbers[i] === "*" || allNumbers[i] === "/" || allNumbers[i] === "-") {
      //allNumbers.push(piece);
      operatorsList.push(allNumbers[i]);
      piece = '';

    } else {
      piece += allNumbers[i];
      numbersList.push(parseFloat(piece));
    }
  }
  console.log(operatorsList)

  let a = numbersList.shift()
  console.log(numbersList)
  //parseFloat(operatorsList);
  if (operatorsList[0] === "*") {
    display.textContent = multiply(numbersList[0], numbersList[1])
  } else if (operatorsList[0] === "/") {
    display.textContent = (divide(numbersList[0]), numbersList[1])
  } else if (operatorsList[0] === "-") {
    display.textContent = (subtract(numbersList[0]), numbersList[1])
  }else if (operatorsList[0] === "+") {
    display.textContent = (add(numbersList[0], numbersList[1]))
  }
  return
  //think i need a return....
})
