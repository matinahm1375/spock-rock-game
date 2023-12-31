import { startConfetti, stopConfetti,removeConfetti} from "./confetti.js";

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resulTtext = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;

let computerChoice='';

//random computer choice 
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber<0.2){
    computerChoice='rock';
  }else if (computerChoiceNumber<0.4){
    computerChoice='paper';
  }else if (computerChoiceNumber<0.6){
    computerChoice='scissors';
  }else if (computerChoiceNumber<0.8){
    computerChoice='lizard';
  }else{
    computerChoice='spock';
  }
}
// add selected styling &computer choice
function displayComputerChoice(){
  // add selected styling playerchoice
  switch(computerChoice){
   case 'rock':
     computerRock.classList.add('selected');
     computerChoiceEl.textContent='--- Rock';
     break;
     case 'paper':
       computerPaper.classList.add('selected');
       computerChoiceEl.textContent='--- Paper';
       break;
       case 'scissors':
         computerScissors.classList.add('selected');
         computerChoiceEl.textContent='--- Scissors';
         break;
       case 'lizard':
          computerLizard.classList.add('selected');
          computerChoiceEl.textContent='--- Lizard';
          break;
        case 'spock':
          computerSpock.classList.add('selected');
          computerChoiceEl.textContent='--- Spock';
          break;
        default:
          break;
  }
 }
 

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon)=>{
    icon.classList.remove('selected')
  });
  stopConfetti();
  removeConfetti();
 }

//reset score & player choice/computer choice
function resetAll(){
  playerScoreNumber=0;
  computerScoreNumber=0;
  playerScoreEl.textContent=playerScoreNumber;
  computerScoreEl.textContent=computerScoreNumber;
  playerChoiceEl.textContent="";
  computerChoiceEl.textContent="";
  resulTtext.textContent='';
  resetSelected();
}
window.resetAll = resetAll;
// check result,increase scores update result text
function updateScore(playerChoice){
  if (playerChoice===computerChoice){
    resulTtext.textContent = "it's a tie";
  }else{
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1){
      resulTtext.textContent = 'you won!'
      startConfetti();
      playerScoreNumber++;
      playerScoreEl.textContent=playerScoreNumber;
    }else{
      resulTtext.textContent='you lost !'
      computerScoreNumber++;
      computerScoreEl.textContent=computerScoreNumber;
    }
  }
}


// call function to process turn 
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

function select(playerChoice){
 // add selected styling playerchoice
 checkResult(playerChoice);
 switch(playerChoice){
  case 'rock':
    playerRock.classList.add('selected');
    playerChoiceEl.textContent='--- Rock';
    break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent='--- Paper';
      break;
      case 'scissors':
        playerScissors.classList.add('selected');
        playerChoiceEl.textContent='--- Scissors';
        break;
      case 'lizard':
         playerLizard.classList.add('selected');
         playerChoiceEl.textContent='--- Lizard';
         break;
       case 'spock':
         playerSpock.classList.add('selected');
         playerChoiceEl.textContent='--- Spock';
         break;
       default:
         break;
 }
}
window.select = select;

// on startu sec initial value
resetAll();
