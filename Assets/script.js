/* ---------------------------------- Timer --------------------------------- */
// Selects element by class
var timeEl = document.querySelector("#timer");

// Selects element by id
// var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      highscore();
    }

  }, 1000);
}

// Function to bring up highscore list 

function highscore() {

};


// Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

setTime();

/* ---------------------------------- Timer --------------------------------- */


/* -------------------------------- questions ------------------------------- */

var count = 0;
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");

var countEl = document.querySelector("#count");

// declartion
function setCounterText() {
  countEl.textContent = count;
}
// const secondFunction - function(params){}
// ES6 const thirdFunction = (parms) => console.log("sessage")
// add and substrat functions 
// function add() {

//   count++
//   setCounterText()
// }
function sub() {
  if(count > 0){
  count--
  setCounterText()
  } else{
    setCounterText()
  }
}

// TODO: Add event listener to increment button
question1.addEventListener("click",(event) =>{
  count++
  setCounterText()
}
  ) 

// TODO: Add event listener to decrement button 
question2.addEventListener("click", sub);
question3.addEventListener("click", sub);
question4.addEventListener("click", sub);
