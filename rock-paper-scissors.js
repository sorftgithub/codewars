// Let's play! You will be given valid moves of two Rock, Paper, Scissors players,
//  and have to return which player won: "Player 1 won!" for player 1, 
// and "Player 2 won!" for player 2. In case of a draw return Draw!.

function rps(p1, p2){
    if( (p1 === "rock" && p2 === "scissors") ||
     (p1 === "paper" && p2 ==="rock") ||
     (p1 === "scissors" && p2 === "paper") ) {
        return "Player 1 won!"
     }else if(p1 === p2){
        return "Draw!"
     }else{
        return "Player 2 won!"
     }
}

    console.log(rps('rock', 'scissors'), "Player 1 won!");
    console.log(rps('scissors', 'paper'), "Player 1 won!");
    console.log(rps('paper', 'rock'), "Player 1 won!");
  

  
    console.log(rps('scissors', 'rock'),"Player 2 won!");
    console.log(rps('paper', 'scissors'),"Player 2 won!");
    console.log(rps('rock', 'paper'),"Player 2 won!");
  

    console.log(rps('rock', 'rock'), 'Draw!');
    console.log(rps('scissors', 'scissors'), 'Draw!');
    console.log(rps('paper', 'paper'), 'Draw!');