'use strict';

/**************************************
 * Variables
 *************************************/
var response; //Contains latest user response
var userName; //Gets user name
var score = 0; //Gets score of Yes-or-No game
var counter = 0; //Gets # of attempts of Number Guessing game
var randomNum = Math.floor(Math.random()*10 + 1); //Generates random number in range [1, 10]

var dataTypes = ['boolean', 'null', 'undefined', 'number', 'string', 'symbol']; //Correct answers to JavaScript quiz
var MAX_ATTEMPTS = 6; //Maximum number of allowed attempts for JavaScript quiz
var correctAnswers = []; //Gets correct answers from user
var attempts = 0; //Gets number of accumulated attempts in JavaScript quiz

var introElement = document.getElementById('results');
var quizElement = document.getElementById('quizResults');
var guessElement = document.getElementById('guessGameResults');
var dataTypeElement = document.getElementById('dataTypeResults');

/**************************************
 * Main Function
 **************************************/
if(confirm('Hello and welcome to my site!\n\nWhile here, you can learn a little about me and also see some of my hard work.\n\nHit \'ok\' to play some text games I\'ve setup\nHit \'cancel\' if you just want to browse the site')) {

  userName = prompt('Good choice. First, what is your name?');

  console.log('User: ' + userName);

  introElement.textContent = ('Thanks for playing, ' + userName);

  if (confirm(userName + ', the first game I have is a guessing game about me! Want to play?')) {
    guessAboutMe();
    quizElement.textContent = ('-You guessed ' + score + '/5 questions about me correctly.');
  }

  if (confirm('The next game we can play is a number guessing game. Try it?')) {
    guessNumber();
    guessElement.textContent = ('-You guessed my random number in ' + counter + ' attempts.');
  }

  if(confirm('The last game we can play is a JavaScript quiz. Want to play?')) {
    jsQuiz();
    dataTypeElement.textContent = ('-You guessed ' + correctAnswers.length + ' out of 6 JavaScript primitive data types.');
  }
 
} else {
  alert('Ok, just hit refresh if you want to try them out!.');
}

/**************************************
* About Me Quiz
**************************************/
function guessAboutMe() {
  //Question 1
  do {
    response = prompt('Question 1:\nHave I lived in Seattle for more than three years?\n Y or N').toUpperCase();
    if (response === 'N') {
      score++;
      alert('Thats right! This summer will mark 3 years since I moved to Seattle.\n\nScore: ' + score + '/5');
    } else if (response === 'Y') {
      alert('Not quite! This summer will mark 3 years since I moved to Seattle.\n\nScore: ' + score + '/5');
    } else {
      alert('Please use \'Y\' or \'N\'');
    }
  } while(response !== 'Y' && response !== 'N');

  //Question 2
  do {
    response = prompt('Question 2:\nDo you think I prefer dogs over cats?\n Y or N').toUpperCase();
    if (response === 'Y') {
      score++;
      alert('Thats right! I love dogs. I have a 3 year old Belgian Malinois named Lily. She looooves playing fetch.\n\nScore: ' + score + '/5');
    } else if (response === 'N') {
      alert('Not quite! I love dogs. I have a 3 year old Belgian Malinois named Lily. She looooves playing fetch.\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
  } while(response !== 'Y' && response !== 'N');

  //Question 3
  do {
    response = prompt('Question 3:\nDid I used to be a DJ?\n Y or N').toUpperCase();
    if (response === 'N') {
      score++;
      alert('Thats right! Unfortunately, I can\'t say that I have much musical talent.\n\nScore: ' + score + '/5');
    } else if (response === 'Y') {
      alert('That would be cool, but unfortunatly I can\'t say I have much musical talent.\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
  } while(response !== 'Y' && response !== 'N');

  //Question 4
  do {
    response = prompt('Question 4:\nWas Computer Programming my favorite subject in high school?\n Y or N').toUpperCase();
    if (response === 'N') {
      score++;
      alert('Thats right! Can you believe Computer Programming wasn\'t even an option I had in high school?\n\nScore: ' + score + '/5');
    } else if (response === 'Y') {
      alert('Nope. Can you believe Computer Programming wasn\'t even an option I had in high school?\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
  } while(response !== 'Y' && response !== 'N');

  //Question 5
  do {
    response = prompt('Question 5:\nAm I a twin?\n Y or N').toUpperCase();
    if (response === 'N') {
      score++;
      alert('Thats right! I do have two siblings, but neither is my twin.\n\nScore: ' + score + '/5');
    } else if (response === 'Y') {
      alert('Nope. I do have two siblings, but neither is my twin.\n\nScore: ' + score + '/5');
    } else {
      alert('Please use Y or N');
    }
  } while(response !== 'Y' && response !== 'N');

  //Output results
  alert('You scored ' + score + '/5');
  console.log('About me quiz: ' + score + '/5');
}

/**************************************
 * Number Guessing Game
 *************************************/
function guessNumber() {
  response = parseInt(prompt('Guess a random number between 1 and 10.'));
  counter++;

  while(response !== randomNum && counter < MAX_ATTEMPTS) {
    counter++;
    if(response > randomNum) {
      response = parseInt(prompt('Answer too high. Try again:'));
    } else if(response < randomNum) {
      response = parseInt(prompt('Answer too low. Try again:'));
    } else {
      response= parseInt(prompt('Invalid answer. Try again:'));
    }
  }

  //Output results
  if(counter === 1) {
    alert('First try!');
  } else if(counter === MAX_ATTEMPTS) {
    alert('You ran out of attmpts. The right answer was ' + randomNum);
    console.log('Number guess: failed');
  } else {
    alert('You got it in ' + counter + ' attempts.');
    console.log('Number guess: ' + counter + ' attempts' );
  }
}

/*************************************
 *  JavaScript Quiz
 ************************************/
function jsQuiz() {
  alert('Do you think you can guess all six of the primitive data types in JavaScript? Give it a shot!');
  do{
    response = prompt('Enter a primitive type: \n' + attempts + '/6 attempts\n' + correctAnswers).toLowerCase();
    for(var i = 0; i < dataTypes.length; i++) {
      if(response === dataTypes[i]) {
        correctAnswers.push(' ' + response);
        dataTypes.splice(i, 1);
      }
    }
    attempts++;
  } while (correctAnswers.length < MAX_ATTEMPTS && attempts < MAX_ATTEMPTS);

  //Output results
  if(correctAnswers.length === MAX_ATTEMPTS) {
    alert('Nice! You got all six primitive types!');
  } else {
    alert('You got ' + correctAnswers.length + ' correct.\nYou forgot about:\n' + dataTypes);
  }
  console.log('JavaScript: ' + correctAnswers.lenght + '/6');
}