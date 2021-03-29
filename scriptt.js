// //Create a quiz
// //have 5 questions
//     // questions set on an array 
//     // answers set on an array
//     // each question needs clickable button answers
// // have a timer
// var timeCounter= 60;

// function countDown(){
//     timeCounter--;
//     console.log ('${timeCounter} Seconds Left')
//     if(timeCounter<1) {
//         clearInterval(gameOver);
//         console.log ("all done!")

//     }
// }

// var gameOver = setInterval(countDown,1000)
//     //timer increases when question is correct
//     // timer decreases as questions are incorrect
// // have a scoreboard at the end
//     //remaining timer is the scoreboard


//     var answers =[
//         {
//             "answer1": "1",
//             "answer2": "2",
//             "answer3": "3",
//             "correctAnswer": "4",
//         }, 
//     ]



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
            question: 'What is the tallest building?'
            answers: [
                { text:'Burj Khalifa', correct: true}
                { text:'Shanghai Tower', correct: false}
                { text:'One World Trade Center', correct: false}
                { text:'Taipei 101', correct: false}
            ]
        }, 
        { 
            question: 'Which city has the largest population?'
            answers: [
                { text:'Tokyo, Japan', correct: true}
                { text:'Sao Paulo, Brazil', correct: false}
                { text:'Delhi, India', correct: false}
                { text:'Shanghai, China', correct: false}
            ]
        }, 
        { 
            question: 'What is the tallest building?'
            answers: [
                { text:'Burj Khalifa', correct: true}
                { text:'Shanghai Tower', correct: false}
                { text:'One World Trade Center', correct: false}
                { text:'Taipei 101', correct: false}
            ]
        }, 
        
        

    ]


        console.log(questions);