'use strict';

var response; //Gets latest user response
var userName; //Gets user name
var score = 0; //Gets score of Yes-or-No game
var counter = 0; //Gets # of attempts of Number Guessing game
var guessNumber = Math.floor(Math.random()* 10 + 1); //Generates a random number between [1, 10]

var dataTypes = ['boolean', 'null', 'undefined', 'number', 'string', 'symbol']; //Correct answers to JavaScript quiz
var MAX_ATTEMPTS = 6; //Maximum number of allowed attempts for JavaScript quiz
var correctAnswers = []; //Gets correct answers from user
var attempts = 0; //Gets number of accumulated attempts in JavaScript quiz

var introElement = document.getElementById('results');
var quizElement = document.getElementById('quizResults');
var guessElement = document.getElementById('guessGameResults');
var dataTypeElement = document.getElementById('dataTypeResults');

/**
 * Main introduction
 */
alert('Hello and welcome to my site! While here, you\'ll get a chance to learn a little bit about me and also get a chance to check out my hard work!.');

response = confirm('Are you ready to begin?');

/**
 * Main if statement
 */
if(response) {
  userName = prompt('Awesome! First, what is your name?');
  alert(userName + ', let\'s get started!');
  console.log('User: ' + userName);
  response = '';

  // /**
  //  * Yes-or-No Quiz Game
  //  */
  response = confirm('The first game we can play is a short quiz about me, want to play?');
  if (response) {

    //Question 1
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

    //Question 2
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

    //Question 3
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

    //Question 4
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

    //Question 5
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

    alert('You scored ' + score + '/5'); //Output result to user
    console.log('About me quiz: ' + score + '/5'); //Output result to console
  }

  /**
   * Number guessing game
   */
  response = confirm('The next game we can play is a number guessing game, want to play?');
  if (response) {

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

    //Output result to user
    if(counter === 1) {
      alert('Wow! You guessed it on your first attempt!');
    } else {
      alert('You guessed the correct number in ' + counter + ' attempts.');
    }
    console.log('Number guessing: ' + counter + ' attempts'); //Output result to console
  }

  /**
   * Guess Primitive Data Types in JavaScript
   */
  response = confirm('The last game we can play is a JavaScript quiz. Want to play?');
  if (response) {

    alert('Do you think you can guess all six of the primitive data types in JavaScript? Give it a shot!');
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

    //Output results to user
    if(correctAnswers.length === MAX_ATTEMPTS) {
      alert('Nice! You got all six primitive types!');
    } else {
      alert('You got ' + correctAnswers.length + ' correct.\nYou forgot about:\n' + dataTypes.toString());
    }
    console.log('JavaScript quiz: ' + correctAnswers.length + ' correct.');
  }

  /**
   * Outputting results to site
   */
  introElement.textContent = ('Thanks for playing, ' + userName + '.');
  quizElement.textContent = ('-You guessed ' + score + '/5 questions about me correctly.');
  guessElement.textContent = ('-You guessed my random number in ' + counter + ' attempts.');
  dataTypeElement.textContent = ('-You guessed ' + correctAnswers.length + ' out of 6 JavaScript primitive data types.');

/**
 * Exception handling
 */
} else {
  alert('Ok, just refresh the page when you\'re ready!');
}