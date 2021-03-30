const startButton = document.querySelector("#start");
const timeLeftSpan = document.querySelector("#clock");

const questions = [
  {
    question: "When is the best time to see Cherry Blossoms?",
    answer1: "february",
    correctAnswer: "may",
    answer2: "march",
    answer3: "april",
    
  },
  {
    question: "Which is these whales is the biggest?",
    answer1: "Orca",
    answer2: "Humpback",
    correctAnswer: "Finback",
    answer3: "Beluga",
  
  },
  {
    question: "What is the tallest building?",
    correctAnswer: "Burj Khalifa",
    answer1: "Shanghai Tower",
    answer2: "One World Trade Center",
    answer3: "Taipei 101",
    
  },
  {
    question: "Which city has the largest population?",
    answer1: "Sao Paulo, Brazil",
    answer2: "Delhi, India",
    answer3: "Shanghai, China",
    correctAnswer: "Tokyo, Japan",
  },
  {
    question: "What breed of dog was the most popular last year",
    answer1: "French Bulldog",
    answer2: "Corgi",
    answer3: "German Shepherd",
    correctAnswer: "Labrador",
  },
];

var currentIndex = 0;
var questionsEl = document.querySelector(".answer-title");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var correctAnswerEl = document.querySelector(".answer4");
var answerButtons = document.querySelectorAll(".answer");
var messageEl = document.querySelector("#start-screen");
var gameEl = document.querySelector("#question-screen");

//show question function
function displayQuestion() {
  questionsEl.textContent = questions[currentIndex].question;
  answer1El.textContent = questions[currentIndex].answer1;
  answer2El.textContent = questions[currentIndex].answer2;
  answer3El.textContent = questions[currentIndex].answer3;
  correctAnswerEl.textContent = questions[currentIndex].correctAnswer;
}

//assigning event listeners
answerButtons.forEach(function (ansBtn) {
  ansBtn.addEventListener("click", function (event) {
    console.log(event.target);
    var userGuess = event.target.textContent;
    //create a separate function to handle correct and incorrect answers
    if (userGuess === questions[currentIndex].correctAnswer) {
      console.log("You Got it!");
      currentIndex++;

      if (currentIndex === questions.length) {
        endGame();
      } else {
        displayQuestion();
      }
    } else {
      timeLeft -= 10;
      console.log("INCORRECT");
    }
  });
});

var chosenQuestion = "";
var guessedAnswer = [];
let timeLeft = 75;
var timer;
var isGameRunning = false;

startButton.addEventListener("click", function () {
  //hide start screen
  messageEl.classList.add("hide");

  //show questions container
  gameEl.classList.remove("hide");

  //start the startTimer
  timer = setInterval(function () {
    //decrease the time
    timeLeft--;

    //show the  updated time
    document.querySelector("#time").textContent = timeLeft;

    //check if we would end the game if time = 0
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  //start the timer
  displayQuestion();
});

//reference class activity 25/26
console.log(questions);

function endGame() {
  //clear the timer
  clearInterval(timer);
  //show end screen
  document.querySelector("#end-screen").classList.remove("hide");
  //hide question container
  gameEl.classList.add("hide");
  //show the score
  document.querySelector("#score").textContent = timeLeft;
}

document.querySelector("#submit").addEventListener("click", function () {
  //get the user input
  const userInput = document.querySelector("#initials").value;

  //contruct the object
  const historyEntry = {
    user: userInput,
    score: timeLeft,
  };

  const history = JSON.parse(localStorage.getItem("history")) || [];

  history.push(historyEntry);

  localStorage.setItem("history", JSON.stringify(history));
});
