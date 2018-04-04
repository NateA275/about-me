'use strict';

var response;
var userName;
var score = 0;
var resultsElement = document.getElementById('results');

alert('Hello and welcome to my site! While here, you\'ll get a chance to learn a little bit about me though an interactive promt.');

response = prompt('Are you ready to begin? \n Y or N').toUpperCase();

if(response === 'Y') {
  userName = prompt('Awesome! First, what is your name?');
  alert(userName + ', let\'s get started!');
  console.log('User: ' + userName);
  response = '';


  response = prompt('Question 1:\nHave I lived in Seattle for more than three years?\n Y or N').toUpperCase();
  if(response === 'N') {
    score++;
    alert('Thats right! This summer will mark 3 years since I moved to Seattle.\n\nScore: ' + score + '/5');
  } else if (response === 'Y') {
    alert('Not quite! This summer will mark 3 years since I moved to Seattle.\n\nScore: ' + score + '/5');
  } else {
    alert('Please use Y or N');
  }
  response = '';


  response = prompt('Question 2:\nDo you think I prefer dogs over cats?\n Y or N').toUpperCase();
  if(response === 'Y') {
    score++;
    alert('Thats right! I love dogs. I have a 3 year old Belgian Malinois named Lily. She looooves playing fetch.\n\nScore: ' + score + '/5');
  } else if (response === 'Y'){
    alert('Not quite! I love dogs. I have a 3 year old Belgian Malinois named Lily. She looooves playing fetch.\n\nScore: ' + score + '/5');
  } else {
    alert('Please use Y or N');
  }
  response = '';


  response = prompt('Question 3:\nDid I used to be a DJ?\n Y or N').toUpperCase();
  if(response === 'N') {
    score++;
    alert('Thats right! Unfortunately, I can\'t say that I have much musical talent.\n\nScore: ' + score + '/5');
  } else if (response === 'Y'){
    alert('That would be cool, but unfortunatly I can\'t say I have much musical talent.\n\nScore: ' + score + '/5');
  } else {
    alert('Please use Y or N');
  }
  response = '';


  response = prompt('Question 4:\nWas Computer Programming my favorite subject in high school?\n Y or N').toUpperCase();
  if(response === 'N') {
    score++;
    alert('Thats right! Can you believe Computer Programming wasn\'t even an option I had in high school?\n\nScore: ' + score + '/5');
  } else if (response === 'Y'){
    alert('Nope. Can you believe Computer Programming wasn\'t even an option I had in high school?\n\nScore: ' + score + '/5');
  } else {
    alert('Please use Y or N');
  }
  response = '';


  response = prompt('Question 5:\nAm I a twin?\n Y or N').toUpperCase();
  if(response === 'N') {
    score++;
    alert('Thats right! I do have two siblings, but neither is my twin.\n\nScore: ' + score + '/5');
  } else if (response === 'Y') {
    alert('Nope. I do have two siblings, but neither is my twin.\n\nScore: ' + score + '/5');
  } else {
    alert('Please use Y or N');
  }
  response = '';

  resultsElement.textContent = ('Thanks for playing ' + userName + '! \n You got ' + score + '/5 correct.');
  console.log('Score: ' + score + '/5');

} else if (response === 'N') {

  alert('Ok, just refresh the page when you\'re ready!');

} else { 

  alert('Please use Y or N. Refresh to restart.');

}