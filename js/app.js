'use strict';

var response;
var userName;
var score = 0;
var counter = 0;
var guessNumber = Math.floor(Math.random()* 10 + 1); //Generates a random number between [1, 10]

var dataTypes = ['boolean', 'null', 'undefined', 'number', 'string', 'symbol'];
var MAX_ATTEMPTS = 6;
var correctAnswers = [];
var attempts = 0;

var introElement = document.getElementById('results');
var quizElement = document.getElementById('quizResults');
var guessElement = document.getElementById('guessGameResults');
var dataTypeElement = document.getElementById('dataTypeResults');


/**
 * Main introduction
 */
alert('Hello and welcome to my site! While here, you\'ll get a chance to learn a little bit about me and also get a chance to check out my hard work!.');

response = prompt('Are you ready to begin? \n Y or N').toUpperCase();

/**
 * Main if statement
 */
if(response === 'Y') {
  userName = prompt('Awesome! First, what is your name?');
  alert(userName + ', let\'s get started!');
  console.log('User: ' + userName);
  response = '';

  response = prompt('The first game we can play is a short quiz about me, want to play? \n Y or N').toUpperCase();
  if (response === 'Y') {

    // /**
    //  * All 5 yes or no questions
    //  */
    response = prompt('Question 1:\nHave I lived in Seattle for more than three years?\n Y or N').toUpperCase();
    if (response === 'N') {
      score++;
      alert('Thats right! This summer will mark 3 years since I moved to Seattle.\n\nScore: ' + score + '/5');
    } else if (response === 'Y') {
      alert('Not quite! This summer will mark 3 years since I moved to Seattle.\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
    response = '';


    response = prompt('Question 2:\nDo you think I prefer dogs over cats?\n Y or N').toUpperCase();
    if (response === 'Y') {
      score++;
      alert('Thats right! I love dogs. I have a 3 year old Belgian Malinois named Lily. She looooves playing fetch.\n\nScore: ' + score + '/5');
    } else if (response === 'N') {
      alert('Not quite! I love dogs. I have a 3 year old Belgian Malinois named Lily. She looooves playing fetch.\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
    response = '';


    response = prompt('Question 3:\nDid I used to be a DJ?\n Y or N').toUpperCase();
    if (response === 'N') {
      score++;
      alert('Thats right! Unfortunately, I can\'t say that I have much musical talent.\n\nScore: ' + score + '/5');
    } else if (response === 'Y') {
      alert('That would be cool, but unfortunatly I can\'t say I have much musical talent.\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
    response = '';


    response = prompt('Question 4:\nWas Computer Programming my favorite subject in high school?\n Y or N').toUpperCase();
    if (response === 'N') {
      score++;
      alert('Thats right! Can you believe Computer Programming wasn\'t even an option I had in high school?\n\nScore: ' + score + '/5');
    } else if (response === 'Y') {
      alert('Nope. Can you believe Computer Programming wasn\'t even an option I had in high school?\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
    response = '';


    response = prompt('Question 5:\nAm I a twin?\n Y or N').toUpperCase();
    if (response === 'N') {
      score++;
      alert('Thats right! I do have two siblings, but neither is my twin.\n\nScore: ' + score + '/5');
    } else if (response === 'Y') {
      alert('Nope. I do have two siblings, but neither is my twin.\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
    response = '';
  }

  response = prompt('The next game we can play is a number guessing game, want to play? \n Y or N').toUpperCase();
  if (response === 'Y') {

    /**
     * Number guessing game
    */
    response = parseInt(prompt('Guess a random whole number between 1 and 10 inclusively.'));
    counter++;

    while(response !== guessNumber) {
      counter++;
      if(response > guessNumber) {
        response = parseInt(prompt('Nope. Your guess is too high. \n Try again!'));
      } else if(response < guessNumber) {
        response = parseInt(prompt('Nope, that guess is too low. \n Try again'));
      } else {
        response = parseInt(prompt('Please enter an integer between 1 and 10'));
      }
    }

    if(counter === 1) {
      alert('Wow! You guessed it on your first attempt!');
    } else {
      alert('You guessed the correct number in ' + counter + ' attempts.');
    }
  }

  response = prompt('The last game we can play is a JavaScript quiz. Want to play? \n Y or N').toUpperCase();
  if (response === 'Y') {
    /**
     * Guess Primitive Data Types in JavaScript
     */
    alert('Do you think you can guess all six of the primitive data types in JavaScript? Let\'s give it a shot!');
    response = '';
    while(correctAnswers.length < MAX_ATTEMPTS && attempts < MAX_ATTEMPTS) {
      response = prompt('Enter a primitive type: \n' + attempts + '/6 attempts\n' + correctAnswers).toLowerCase();
      for(var i = 0; i < dataTypes.length; i++) {
        if(response === dataTypes[i]) {
          correctAnswers.push(' ' + response);
          dataTypes.splice(i, 1);
        }
      }
      attempts++;
    }

    if(correctAnswers.length === MAX_ATTEMPTS) {
      alert('Nice! You got all six primitive types!');
    } else {
      alert('You got ' + correctAnswers.length + ' correct.');
    }
  }

  /**
   * Outputting results to user
   */
  introElement.textContent = ('Thanks for playing, ' + userName + '.');
  quizElement.textContent = ('-You guessed ' + score + '/5 questions about me correctly.');
  guessElement.textContent = ('-You guessed my random number in ' + counter + ' attempts.');
  dataTypeElement.textContent = ('-You guessed ' + correctAnswers.length + ' out of 6 JavaScript primitive data types.');  

/**
 * Exception handling
 */
} else if (response === 'N') {
  alert('Ok, just refresh the page when you\'re ready!');
} else {
  alert('Please use Y or N. Refresh to restart.');
}