let submitButon = document.getElementById("submitButton");//document.querySelector('.submitButton');


submitButon.addEventListener('click', function1(), false);


function function1 (){
    let passwordField = document.getElementById("password").value;
    let confirmPasswordField = document.getElementById("confirm-password").value;
    if(passwordField === confirmPasswordField){
        console.log("they match")
    }
    else{
    console.log("someone clicked!");
    alert("Derpy Derp I chime in every time!");
    }
}

/*.addEventListener('submit', (e)=>{
    console.log("someone clicked the button");
    if(passwordField != confirmPasswordField){
        alert("Derp your passwords don't match!")
    }
}) */



/*
let screenDisplay = 0;
let firstOp = 0;
let secondOp = 0;
let operand = '';

const clearButton = document.getElementById("clearButton");
const equalsButton = document.getElementById("equalsButton");
const gridButtons = document.getElementsByClassName("gridButton");
const screen = document.getElementById("screen");
screen.innerHTML = screenDisplay;

equalsButton.addEventListener('click',(e)=>{
    operate(firstOp, screenDisplay, operand);
});

clearButton.addEventListener('click',(e)=>{
    screenDisplay = 0;
    firstOp = 0;
    secondOp = 0;
    screen.innerHTML = screenDisplay;
});

Array.from(gridButtons).forEach((button)=>
    button.addEventListener('click',()=>{
        // if addition
        if(button.textContent == "+"){
            if(operand == ''){
                operand = "+";
                firstOp = screenDisplay;
                screenDisplay = '';
                screen.innerHTML = screenDisplay;
            }
            else{
                operate(firstOp, screenDisplay, operand);
                operand = "+";
                firstOp = screenDisplay;
                screenDisplay = '';
                screen.innerHTML = screenDisplay;
            }
        }
        // if subtraction
        else if(button.textContent == "-"){
            if(operand == ''){
                operand = "-";
                firstOp = screenDisplay;
                screenDisplay = '';
                screen.innerHTML = screenDisplay;
            }
            else{
                operate(firstOp, screenDisplay, operand);
                operand = "-";
                firstOp = screenDisplay;
                screenDisplay = '';
                screen.innerHTML = screenDisplay;
            }
        }
        // if mutiplication
        else if(button.textContent == "*"){
            if(operand == ''){
                operand = "*";
                firstOp = screenDisplay;
                screenDisplay = '';
                screen.innerHTML = screenDisplay;
            }
            else{
                operate(firstOp, screenDisplay, operand);
                operand = "*";
                firstOp = screenDisplay;
                screenDisplay = '';
                screen.innerHTML = screenDisplay;
            }
        }
        //otherwise if this is a number append to screen
        else {appendNumber(button.textContent);}
    })
);

function appendNumber(number){
    console.log(number)
    if(screenDisplay == 0){screenDisplay = ''};
    screenDisplay += number;
    screen.innerHTML = screenDisplay;
}

function operate(a,b,o){
    if(o == "+"){
        screenDisplay = Number(a) + Number(b);
    }
    else if(o == "-"){
        screenDisplay = Number(a) - Number(b);
    }
    else if(o == "*"){
        screenDisplay = Number(a) * Number(b);
    }
    else if(o == "-"){
        if(b == 0){
            screenDisplay = 666;
        }
        else{screenDisplay = Number(a) / Number(b);}
    }
    screen.innerHTML = screenDisplay;
    operand = '';
}
screen.innerHTML = screenDisplay;
*/
