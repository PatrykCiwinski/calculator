const currentNumber=document.querySelector(".currentNumber");
const firstNumber=document.querySelector(".firstNumber  p");
const mathsign=document.querySelector(".mathsign");
const numbersButtons=document.querySelectorAll(".number");
const operatorsButtons=document.querySelectorAll(".operator");
const equalsButton=document.querySelector(".equals");
const clearButton=document.querySelector(".clear");
const calculatorHistory=document.querySelector(".history");
const historyButton=document.querySelector(".history-btn");

let result='';

function displayNumber(){
    if(this.textContent==="." && currentNumber.innerHTML.includes('.'))return;
    if(this.textContent=='.' && currentNumber.innerHTML==='')return currentNumber.innerHTML='0.';
    currentNumber.innerHTML +=this.textContent;

}
function showResult(){
    if(firstNumber.innerHTML==='' || currentNumber.innerHTML==='')return;
    let a=Number(currentNumber.innerHTML);
    let b= Number(firstNumber.innerHTML);
    let operator=mathsign.innerHTML;

    switch(operator){
        case '-':
            result=b-a;
            break;
        case '+':
            result=a+b;
            break;
        case '*':
        result=a*b;
        break;
        case '/':
            result=b/a
            break;
            case 'X^y':
                result=b**a;
                break;
    }
    addToHistory();
    historyButton.classList.add('active');
    currentNumber.innerHTML=result;
    firstNumber.innerHTML='';
    mathsign.innerHTML='';

}

function addToHistory(){
    const newHistoryItem=document.createElement('li');
    newHistoryItem.innerHTML=`${firstNumber.innerHTML} ${mathsign.innerHTML} ${currentNumber.innerHTML}= ${result}`
newHistoryItem.classList.add('history-item');
calculatorHistory.appendChild(newHistoryItem);

}

function operate(){
    if(currentNumber.innerHTML==='' && this.textContent==='-'){
        currentNumber.innerHTML='-';
        return;
    }
    else if(currentNumber.innerHTML===''){return}

    if(mathsign !==''){
        showResult()
    }
    firstNumber.innerHTML=currentNumber.innerHTML;
    mathsign.innerHTML=this.textContent;
    currentNumber.innerHTML='';

}
function clearScreen(){
    result='';
    currentNumber.innerHTML='';
    firstNumber.innerHTML='';
    mathsign.innerHTML='';

}
function clearHistory(){
    calculatorHistory.textContent='';
    if(calculatorHistory.textContent===''){
        historyButton.classList.remove('active');
    }

}













operatorsButtons.forEach((button) => {button.addEventListener('click', operate)});
equalsButton.addEventListener('click',showResult);
clearButton.addEventListener('click',clearScreen);
numbersButtons.forEach((button)=> {button.addEventListener('click', displayNumber)});
historyButton.addEventListener('click', clearHistory);