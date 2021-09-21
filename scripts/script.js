'use strict';
let scores = [0, 0];
let [computerScore, userScore] = scores;
const gameRules = {
  rock: {
    rock: 'draw',
    paper: 'lose',
    scissors: 'win',
  },
  paper: {
    rock: 'win',
    paper: 'draw',
    scissors: 'lose',
  },
  scissors: {
    rock: 'lose',
    paper: 'win',
    scissors: 'draw',
  },
};
const randomChoice = function () {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.trunc(Math.random() * 3);
  return choices[randomNumber];
};

const displayScores = function (result) {
  if (result === 'win') {
    userScore++;
    document.getElementById(`user-score`).innerHTML = userScore;
  } else if (result === 'lose') {
    computerScore++;
    document.getElementById('computer-score').innerText = computerScore;
  } else {
    userScore = userScore;
    computerScore = computerScore;
  }
};

const gameChecker = function (userChoice) {
  let computerChoice = randomChoice();
  document.getElementById('user-choice').innerText = userChoice;
  document.getElementById('computer-choice').innerText = computerChoice;
  const result = gameRules[userChoice][computerChoice];
  document.getElementById('result').innerText = `You ${result}`;
  displayScores(result);
};
