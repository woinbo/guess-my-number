'use strict';

const $ = document.querySelector.bind(document);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
var score = 20;
var highScore = 0;
$('.score').textContent = score;

$('.check').addEventListener('click', function () {
  const guess = Number($('.guess').value);
  if (!guess) {
    $('.message').textContent = '😒 Please enter a number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      $('.score').textContent = score;
      $('.message').textContent = 'too high!';
    } else {
      score--;
      $('.score').textContent = score;
      $('.message').textContent = 'You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      $('.score').textContent = score;
      $('.message').textContent = 'too low!';
    } else {
      score--;
      $('.score').textContent = score;
      $('.message').textContent = 'You lost the game!';
    }
  } else if (guess === secretNumber) {
    score++;
    $('.score').textContent = score;
    $('.message').textContent = '🎉 You win!';
    $('.number').textContent = secretNumber;
    $('body').style.backgroundColor = '#60b347';
    $('.check').textContent = 'You Win!';
    getHighScore();
  }
});

$('.again').addEventListener('click', function () {
  $('.message').textContent = 'Start guessing...';
  $('.guess').value = '';
  $('.check').textContent = 'Check!';
  $('.number').textContent = '?';
  $('.score').textContent = 20;
  $('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});

function getHighScore() {
  if (score > highScore) {
    highScore = score;
    $('.highscore').textContent = highScore;
  }
}
