console.log('hello');
//let div = ;
//console.log(div);
let clear = document.getElementById('clear');
let display = document.getElementById('blank');
let buttons = document.getElementsByClassName("square");
let enter = document.getElementById('enter');
//console.log(buttons);
//console.log(buttons[3].innerHTML)
let store = [];
/*function cal9(){
 store.push(buttons[3].innerHTML);
};
cal9()
function cal1(){
  store.push(buttons[9].innerHTML);
}
cal1()
function div(){
  store.push(buttons[4].innerHTML);
}
div();*/



/*function calculate(){
  for(let i =0; i < store.length; i ++){
    store[i] +=
  }
}*/
let temp = [];
let x= [];
console.log(buttons.length)
for(let i =0; i < buttons.length; i ++){
buttons[i].addEventListener('click', function() {
  display.textContent += buttons[i].innerHTML;
  store.push(buttons[i].innerHTML);
x = display.textContent;
})

temp.push(x)
console.log(x)
}

//console.log(store);
enter.addEventListener('click', function(){
  if(store[1] === "x"){
     x =store[0]*store[2];
    display.textContent = x;
} else if(store[1] === "/"){
  x = store[0] / store[2];
  display.textContent = x;
} else if (store[1] === "-"){
  x = store[0] - store[2];
  display.textContent = x;
} else if(store[1] === "+"){
  x = store[0] + store[2];
  display.textContent = x;
}
console.log(x);
})
clear.addEventListener('click', function(){
  store.length = 0;
  console.log(store);
  display.textContent = "";

})
