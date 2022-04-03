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


// find the items of the buttons that are going to be changed
var count = 0;

var questionAsked = document.querySelector("#Question");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");






// creating a question object 

var question = {
  questionAsked: ['What is a Boolean?','What does it mean if a value is null?', 'Which is used for creating unqiue identifers for objects?'],
  choice1: ['represents a true or false values', 'there is a value there', 'Numbers'],
  choice2: ['an interger', 'the value is a number value', 'String'],
  choice3: ['a conditonal staement','the value is a letter values', 'Symbol'],
  choice4: ['a coding language', 'the value represents nothing and an unknown type', 'objects'],
  answer: ['choice1', 'choice4', 'choice3' ]

}

// creating var strings for the questions 

  // var to keep track of what questin you are on

  var questionCounter = 0;



var questionAskedString = `${question.questionAsked[questionCounter]}`


var question1String = `${question.choice1[questionCounter]}`


var question2String = `${question.choice2[questionCounter]}`

var question3String = `${question.choice3[questionCounter]}`

var question4String = `${question.choice4[questionCounter]}`

var answerString = `${question.answer[questionCounter]}`

/* ----------------------------- reload function ---------------------------- */

function reload(questionCounter) {

  var questionAskedString = `${question.questionAsked[questionCounter]}`


var question1String = `${question.choice1[questionCounter]}`


var question2String = `${question.choice2[questionCounter]}`

var question3String = `${question.choice3[questionCounter]}`

var question4String = `${question.choice4[questionCounter]}`

var answerString = `${question.answer[questionCounter]}`

questionAsked.textContent = questionAskedString
question1.textContent = question1String
question2.textContent = question2String
question3.textContent = question3String
question4.textContent = question4String

return
  
};


// adding the questions to the question buttons
questionAsked.textContent = questionAskedString
question1.textContent = question1String
question2.textContent = question2String
question3.textContent = question3String
question4.textContent = question4String

  

// which choice is choosen 

var choicePicked = '';

question1.addEventListener("click",(event) =>{
  choicePicked = 'choice1';
  checkanswer();
  reload(questionCounter);
  
  

  // setCounterText()
}
  );
question2.addEventListener("click",(event) =>{
    choicePicked = 'choice2';
    checkanswer();
    reload(questionCounter);
    
    
    // setCounterText()
  }
    );
 question3.addEventListener("click",(event) =>{
      choicePicked = 'choice3';
      checkanswer();
      reload(questionCounter);

      
      
      // setCounterText()
    }
      );
      question4.addEventListener("click",(event) =>{
        choicePicked = 'choice4';
        checkanswer();
        reload(questionCounter);
        
       
        // setCounterText()
      }
        );

      


// checking to see if the answer is correct or wrong

function checkanswer() {

  if(choicePicked == answerString) {
    questionCounter++
    secondsLeft = secondsLeft + 10;


    console.log("Got it right ")
    console.log(questionCounter)



} else{
  questionCounter++
  secondsLeft = secondsLeft - 5;
  console.log("Got it wrong")
  console.log(questionCounter)

};
return questionCounter;
};









