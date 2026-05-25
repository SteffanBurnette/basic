// Will play 5 rounds
function playRound(humanChoice, computerChoice){
    
    let winner = "";

    if(humanChoice === computerChoice){
        winner = "none";
    } else if(humanChoice === "rock" && computerChoice === "sciccors"){
        winner = "human";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
       winner = "human";
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        winner = "human"
    } else{
        winner = "machine";
    }
   

    return winner;
}

const ans = prompt("What is your name");
console.log(ans);


function getHumanChoice(){

    let choice = "Unknown";
    
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
     choice = prompt("Please pick a choice: Rock, Paper, Scissors or type quit to end: ").toLowerCase();
     console.log(choice);

        if(choice === "quit"){
            console.log("Ending game");
            return;
        } else if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
            console.log("Please select a proper option \n");
           } 
    }

    return choice;
    
}

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]

    let randomChoice = Math.floor(Math.random() * (2 - 0)) + 0;
    console.log(choices[randomChoice]);

    return choices[randomChoice];

}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();
let count = {"human": 0, "machine": 0};

while(count["human"] !== 5 && count["machine"] !== 5){

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let roundWinner = playRound(humanSelection, computerSelection);
    console.log(`Congrats, ${roundWinner} has won the round!`);

    count[roundWinner]++;
}

//playRound(humanSelection, computerSelection);