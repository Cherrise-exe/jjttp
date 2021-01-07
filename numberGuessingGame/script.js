'use strict';

// create a random secret number between 0 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// create score
let score = 20;
// create highscore
let highscore = 0;

// create display message
const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
    };

    // add guess as input for the game
    document.querySelector('.check').addEventListener('click',function(){
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
  
    //When there is no input
    if(!guess){
    //document.querySelector('.message').textContent = ' No number!';
        displayMessage('No number!');

    //When player wins
    } else if (guess === secretNumber){
     //document.querySelector('.message').textContent = 'Correct Number!';
    // if guess equals random number return Correct Number 
     displayMessage('Correct Number!');
    // display the number and the winning screen
    document.querySelector('.number').textContent = secretNumber;

    // background color changes when answer is correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    // style and width of number
    document.querySelector('.number').style.width = '30rem';
    // if score is greater than highscore update highscore to current score
    if (score > highscore){
        highscore = score;
    // return on the screen
        document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
    } else if (guess !== secretNumber){
        if (score > 1){
    //document.querySelector('.message').textContent =
    //guess > secretNumber ? 'Too high!' : 'Too low!';
    // display message if the guess is greater or less than the secret number
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    // if guess is not correct lower the current score by 1
    score--;
    // return updated score
    document.querySelector('.score').textContent = score;
     } else {
    //document.querySelector('.message').textContent = 'You last the game!';
    // if the score equals 0 return you lost the game
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = 0;
     }
    }
    
    });

    // restart game when selecting again
    document.querySelector('.again').addEventListener('click',function(){
    // reset score
        score = 20;
    // reset random number
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        // start guessing message
        //document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        // reset score, number, and value boxes to first settings
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        // reset background color to original color
        document.querySelector('.body').style.backgroundColor = '#222';
        // reset style and width back to smaller style
        document.querySelector('.number').style.width = '15rem';

    });