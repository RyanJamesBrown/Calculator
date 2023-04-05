let screenDisplay = 0;

let clearButton = document.getElementById("clearButton");
clearButton.addEventListener('click',(e)=>{screenDisplay = 0;})

let screen = document.getElementById("screen");
screen.innerHTML = screenDisplay;
