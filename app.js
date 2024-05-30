// // constants ? complex data [] {} ?

// // variables (4 variables)
//     //tbd
//     num1 = number(button text)
//     num 2 = number(button text)
//     operator -, +, *, /
//     result = 3.14

let num1 =Number ('0');
let num2 = Number ('6789')
let operator; 
let result = 0;
let op = 'op';

// // dom elements -

const numberBtnels = document.querySelectorAll('.number')
const operatorBtnEls = document.querySelectorAll('.operator')
const equalBtnEl = document.querySelector('.equals')
const displayEl = document.querySelector('.display')




//     buttons 
//         div.number
//         div.operator
//         div.equals
//     result - .display


// functions

const handleOperator =(event) => {
  if (num1) {
    operator = event.target.textContent
  }
};



const render = () => {
 displayEl.textContent = result
}

const updateResult = () => {
  
  result = num1
  render()

}

const clearCalculator = () => {
  num1 = '';
  num2 = '';
  operator = '';
  result = 0;
  render();
};

const updateNumbers =(event) => {
  console.log(event.target.textContent)

  if (!num1){
    num1 = event.target.textContent
  } else (
    num1 += event.target.textContent
  )
  // num1 = event.target.textContent
  updateResult()
  

  // if I have the number (textContent) -> how do I update State?
  // num1 = the current?
  num1 = event.target.textContent
render()

}

// // event handler -
numberBtnels.forEach((numBtnsEl) =>{



  // console.log(numBtnsEl)

  // Goal: add an event listener to the button?

  numBtnsEl.addEventListener('click' , updateNumbers)
    
})
//     click handler for each group of elements
//     // fuctionality will be tied to its button


// iteate over all operators
render()








// /*-------------------------------- Constants --------------------------------*/

// const buttons = document.querySelectorAll('.button');
// const calulator = document.querySelector('calculator');
// const display = document.querySelector('.display');

// /*-------------------------------- Variables --------------------------------*/


// /*------------------------ Cached Element References ------------------------*/


// /*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
       
    
//     });
//   });
  

//   calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     console.log(event.target.innerText);
  
//     // Example
//     if (event.target.classList.contains('number')) {
//       // Do something with a number
//     }
  
//     // Example
//     if (event.target.innerText === '*') {
//       // Do something with this operator
//     }
//   });
  
// /*-------------------------------- Functions --------------------------------*/

// function appendToDisplay(input){
//     buttons.value += input;
   
// }

// function clearDisplay(){

// }

// function calculate(){

// }
