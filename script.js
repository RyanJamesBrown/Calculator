let screenDisplay = 0;
let firstOp = 0;
let secondOp = 0;
let operand = '=';

const clearButton = document.getElementById("clearButton");
const equalsButton = document.getElementById("equalsButton");
const gridButtons = document.getElementsByClassName("gridButton");
const screen = document.getElementById("screen");
screen.innerHTML = screenDisplay;

equalsButton.addEventListener('click',(e)=>{
    if(operand == "+"){
        secondOp = screenDisplay;
        screenDisplay = Number(firstOp) + Number(secondOp);
    }
    screen.innerHTML = screenDisplay;
});

clearButton.addEventListener('click',(e)=>{
    screenDisplay = 0;
    firstOp = 0;
    secondOp = 0;
    screen.innerHTML = screenDisplay;
});

Array.from(gridButtons).forEach((button)=>
    button.addEventListener('click',()=>{
        if(button.textContent == "+"){
            operand = "+";
            firstOp = screenDisplay;
            screenDisplay = '';
            screen.innerHTML = screenDisplay;
        }
        //otherwise if this is a number append to screen
        else {appendNumber(button.textContent)}
    })
);

function appendNumber(number){
    console.log(number)
    if(screenDisplay == 0){screenDisplay = ''};
    screenDisplay += number;
    screen.innerHTML = screenDisplay;
}
screen.innerHTML = screenDisplay;
