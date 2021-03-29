const startButton = document.querySelector(".start");

startButton.addEventListener("click",function(){

})

const questions = [
    {
        question: 'When is the best time to see Cherry Blossoms?',
        answers: [
            { text: 'february', correct: false },
            { text: 'march', correct: false },
            { text: 'april', correct: false },
            { text: 'may', correct: true }
        ]
    },
    {
        question: 'Which is these whales is the biggest?',
        answers: [
            { text: 'Orca', correct: false },
            { text: 'Humpback', correct: false },
            { text: 'Beluga', correct: false },
            { text: 'Finback', correct: true }
        ]
    }, 
    { 
        question: 'What is the tallest building?',
        answers: [
            { text:'Burj Khalifa', correct: true},
            { text:'Shanghai Tower', correct: false},
            { text:'One World Trade Center', correct: false},
            { text:'Taipei 101', correct: false}
        ]
    }, 
    { 
        question: 'Which city has the largest population?',
        answers: [
            { text:'Tokyo, Japan', correct: true},
            { text:'Sao Paulo, Brazil', correct: false},
            { text:'Delhi, India', correct: false},
            { text:'Shanghai, China', correct: false}
        ]
    }, 
    { 
        question: 'What breed of dog was the most popular last year',
        answers: [
            { text:'Labrador', correct: true},
            { text:'French Bulldog', correct: false},
            { text:'Corgi', correct: false},
            { text:'German Shepherd', correct: false}
        ]
    }, 
    
]

console.log(questions);

function chooseQuestion(){
    var theQuestion = Math.floor(Math.random()*questions.length);

}

const timeLeftSpan = document.querySelector("#clock");
const timeLeft = 10;
var timer;

function startTimer() {
        clearInterval(timer);
        timeLeft = 10;
        timeLeftSpan.textContent = timeLeft;
        console.log('time function')
        timer = setInterval(function () {
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            // if time runs out , loss
            if (timeLeft < 1){
                clearInterval(timer);
                console.log("Lost!");
            }
            console.log(timeLeft)
        },1000)
}
console.log(startTimer);

// var timeLeftSpan = document.querySelector("#clock");
// var timeLeft = 60;
// var timer;

// function startTimer() {
//     clearInterval(timer);
//     timeLeft = 10;
//     // timeHeader.style.display = "block";
//     // lossSection.style.display = "none";
//     // winSection.style.display = "none";
//     timeLeftSpan.textContent = timeLeft;
//     console.log('time function')
//     timer = setInterval(function () {
//         timeLeft--;
//         timeLeftSpan.textContent = timeLeft;
//         if time runs out, loss
//         if (timeLeft < 1) {
//             isGameRunning = false;
//             clearInterval(timer);
//             console.log("lost!");
//             losses++;
//             lossSpan.textContent = losses;
//             startButton.style.display = "block";
//             localStorage.setItem('losses', losses);
//             timeHeader.style.display = "none";
//             lossSection.style.display = "block";
//         }
//         console.log(timeLeft);
//     }, 1000)
// }
// console.log(startTimer);

// function startTimer(){
//     clearInterval(timer);
//     timeLeft = 60;
    
//     // console.log('startTimer function')
//     timer = setInterval(function(){
//         timeLeft --;
//         timeCount.textContent= timeLeft;
//         if(timeLeft<1){
//             clearInterval(timer);
//             alert("YOU LOOSE")
//         }
//         // console.log(timeSeconds);
//     },1000)
//  }
// console.log("startTimer");