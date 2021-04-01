## AY-quizzlet

## Overview

For this homework we were tasked to create a timed quiz with JavaScript fundamentals and store a score after the quiz is complete or the timer hits 0.
## HTML
To begin I started with a basic HTML template and then added parts to it from there. At the top in the header there is the title 'Quizzlet' and a time. Following there there is the start screen, a game screen and then an end game screen all with different actions based on which part of the game the user is on.
## CSS
For the style sheet there is some simple styling as to the postponing of each section as well as some font and color changes. The
## JavaScript
For the main JavaScript there was a lot that was done. We begin with declaring the variables used on the page such as the questions with their answers and assigning elements to the queryselectors of classes and Id's on the HTML. Then the functions for the page were created starting with prompting the questions onto the page. If the answers are correctly chosen then the user is prompted to the next question until there are no more questions. However if the wrong answer is chosen then the timer is reduced by 10 seconds until the right answer is chosen or the timer runs out. With both situations of either running out of time or getting to the end of the game the user finally comes to the screen to input their initials to submit their score.

Once their initials have been submitted then they can click the ScoreBoard to see their score on the linked HTML. The information put in with the submit button is put into a localStorage via a JSON.parse and turned into a string via the JSON.string. At the score screen they will see their score next to their initials and can then either clear the scoreboard or choose to retry and do the quiz again.


## ScreenShots 

Refer to the Pictures folder to see each step of the quiz. 