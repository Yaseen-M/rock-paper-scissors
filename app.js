// Generates a play for the computer
function computerPlay() {
  const index = Math.floor(Math.random() * 3);
  return ['Rock', 'Paper', 'Scissors'][index];
}

// Gets the player to input their play
function playerPlay() {
  let play = prompt('Play (rock/paper/scissors):');
  play = play.charAt(0).toUpperCase() + play.substring(1).toLowerCase();
  return play;
}

// Plays a round
function playRound(playerSelection, computerSelection) {
  const winner = getWinner(playerSelection, computerSelection);
  const message = generateMessage(playerSelection, computerSelection, winner);
  return message;
}

// Returns the winner of the round
function getWinner(playerSelection, computerSelection) {
  let winner;
  switch (playerSelection) {
    case 'Rock':
      winner =
        computerSelection === 'Rock'
          ? 'draw'
          : computerSelection === 'Paper'
          ? 'computer'
          : computerSelection === 'Scissors'
          ? 'player'
          : 'none';
      break;

    case 'Paper':
      winner =
        computerSelection === 'Rock'
          ? 'player'
          : computerSelection === 'Paper'
          ? 'draw'
          : computerSelection === 'Scissors'
          ? 'computer'
          : 'none';
      break;

    case 'Scissors':
      winner =
        computerSelection === 'Rock'
          ? 'computer'
          : computerSelection === 'Paper'
          ? 'player'
          : computerSelection === 'Scissors'
          ? 'draw'
          : 'none';
      break;

    default:
      winner = 'none';
      break;
  }
  return winner;
}

// Generates a win/lose/draw message
function generateMessage(playerSelection, computerSelection, winner) {
  switch (winner) {
    case 'player':
      return `You win! ${playerSelection} beats ${computerSelection}.`;
      break;

    case 'computer':
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
      break;

    case 'draw':
      return 'Draw!';
      break;

    default:
      return 'Invalid play!';
      break;
  }
}

// Plays the game
function game() {
  for (let index = 0; index < 5; index++) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log('Player: ' + playerSelection);
    console.log('Comp: ' + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
