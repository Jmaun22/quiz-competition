
/* ------------------------------- global vars ------------------------------ */
var secondsLeft = 0;
var finalScore = re();

// hide question buttons
document. getElementById("question1"). hidden=true;
document. getElementById("question2"). hidden=true;
document. getElementById("question3"). hidden=true;
document. getElementById("question4"). hidden=true;

// make the quiz a function

var start = document.querySelector("#start");

start.addEventListener("click", StartQuiz);


function StartQuiz() {

  // hide start 
  document. getElementById("start"). hidden=true;
  // unhide question buttons

  document. getElementById("question1"). hidden=false;
  document. getElementById("question2"). hidden=false;
  document. getElementById("question3"). hidden=false;
  document. getElementById("question4"). hidden=false;

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
    timeEl.textContent = secondsLeft ;

    if(secondsLeft === 0  || questionCounter >= 8) {
      // Stops execution of action at set interval
      var timeLeft = secondsLeft;
      localStorage.setItem("timeLeft", timeLeft.toString());
      clearInterval(timerInterval);
      // Calls function to create and append image
  
      // append secondsLeft to local storage
     
     
     
      

    } else {
      
      // var timeLeft = secondsLeft;
      // localStorage.setItem("timeLeft", timeLeft.toString());
      console.log(timeLeft);
    };
    

  }, 1000);
}



setTime();

/* ---------------------------------- Timer --------------------------------- */
/* -------------------------------- questions ------------------------------- */


// find the items of the buttons that are going to be changed


var questionAsked = document.querySelector("#Question");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");






// creating a question object 

var question = {
  questionAsked: ['What is a Boolean?','What does it mean if a value is null?', 'Which is used for creating unqiue identifers for objects?','Hoisting is?', 'What is Big O Notation?', 'Which of these is not a J.S. data type?', 'What are possible ways to display J.S. outputs?', 'A phrase of J.S. that can be evaluted to produce a value', 'A data value that appears directly in a program' ],
  choice1: ['represents a true or false values', 'there is a value there', 'Numbers', 'All variable and function declarations are moved on top', 'a bootsrap thing', 'String', 'innerHTML', 'statement', 'literal'],
  choice2: ['an interger', 'the value is a number value', 'String', 'All varibales are moved to the bottom.', 'a html thing', 'Booleans', 'innerText', 'expression', 'identifer'],
  choice3: ['a conditonal staement','the value is a letter values', 'Symbol', 'declartions are moved to the right', 'a logarithic efficiency thing', 'Null', 'print', 'method', 'primative types'],
  choice4: ['a coding language', 'the value represents nothing and an unknown type', 'objects', 'declarations are moved to the left', 'an array thing', 'console.log()', 'Identifer', 'function'],
  answer: ['choice1', 'choice4', 'choice3', 'choice1', 'choice3', 'choice4', 'choice3', 'choice2', 'choice1' ]

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

  if(questionCounter <= 8) {

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
// final score
// var fScore = re();
// finalScores.push(fScore);



return;
  } else {
    // when questions are answerwed hides test
    questionAsked.textContent = '';
    document. getElementById("question1"). hidden=true;
document. getElementById("question2"). hidden=true;
document. getElementById("question3"). hidden=true;
document. getElementById("question4"). hidden=true;
var finalScore = Number(localStorage.getItem("timeLeft"));
scores.push(finalScore);
console.log(finalScore);

// re();




  };

  
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
return secondsLeft;
};
// set of start quiz function 

/* ------------------------- create a high score log ------------------------ */
// function highScore() {
  var count = 0;

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

var scores = [];


// TODO: What is the purpose of this function?
// puts the todos on the page
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // makes a string at the 
  // puts how many todo items there are on the page


  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // appends what is typed to the todo list 


 
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var score = scores[i];
 


    var li = document.createElement("li");
    li.textContent = `${todo} score was ${score}` ;
    console.log(secondsLeft);
    li.setAttribute("data-index", i);

    // var button = document.createElement("button");
    // button.textContent = "Complete ✔️";

    // li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// putting the todo items on the local storage 
function init() {
  // TODO: What is the purpose of the following line of code?
    // makes it a JSOn string
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  var storedScores = JSON.parse(localStorage.getItem("score"));
  // TODO: Describe the functionality of the following `if` statement.
    // retive the todo from the localst making sure its not null
  if ((storedTodos !== null) && (storedScores !== null)) {
    todos = storedTodos;
    scores = storedScores;
  }
  // TODO: Describe the purpose of the following line of code.
  // rendering the todo items and count on the screen
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
    // translating the todo items to json
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("score", JSON.stringify(scores));
}
// TODO: Describe the purpose of the following line of code.
// when you clikc on submit the form is subimeted

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  var finalScore = secondsLeft
  // TODO: Describe the functionality of the following `if` statement.
  // 
  if (todoText === "" && finalScore === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  // scores.push(finalScore)
  
  todoInput.value = "";
  finalScore.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();

// };
// end of highscore function

/* -------------------------------------------------------------------------- */

// need to save secondsLeft to storage and then retive it when the save highscore funciton is called
// need to 
function re() {
var finalScore = Number(localStorage.getItem("timeLeft"));
console.log(`lastsub ${finalScore}`)

  if (finalScore !== null) {
    document.querySelector(".message").textContent = "The last socre was " + finalScore 
  };
  return finalScore
};


