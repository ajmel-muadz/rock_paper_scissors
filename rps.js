function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function capitaliseWord(word)
{
    let firstLetter = word.slice(0, 1);
    let remainingLetters = word.slice(1, word.length);

    let capitalisedWord = firstLetter.toUpperCase() + remainingLetters.toLowerCase();

    return capitalisedWord;
}

function getComputerChoice()
{
    let randomInt = getRandomInt(1, 4);

    let result = "";
    if (randomInt === 1)
    {
        result = "Rock";
    }
    else if (randomInt === 2)
    {
        result = "Paper";
    }
    else
    {
        result = "Scissors";
    }

    return result;
}

function playRound(playerChoice, computerChoice)
{
    let output = "";

    let r = "Rock";
    let p = "Paper";
    let s = "Scissors";

    playerChoice = capitaliseWord(playerChoice);

    if (playerChoice == computerChoice)
    {
        console.log("That's a tie! Let's replay that round.");
        const userInput = prompt("Choice: ");
        const cpuInput = getComputerChoice();
        output = playRound(userInput, cpuInput);
    }
    else if ((playerChoice === r && computerChoice === p) || 
    (playerChoice === p && computerChoice === s) || 
    (playerChoice === s && computerChoice === r))
    {
        output = `You lose. You chose ${playerChoice} and CPU chose ${computerChoice}`;
        cpuScore = cpuScore + 1;
    }
    else
    {
        output = `You win! You chose ${playerChoice} and CPU chose ${computerChoice}`;
        playerScore = playerScore + 1;
    }

    return output;
}

const NUM_OF_ROUNDS = 5
let playerScore = 0;
let cpuScore = 0;
function game()
{
    for (let i = 0; i < NUM_OF_ROUNDS; i++)
    {
        let userInput = prompt("Choice: ");
        let cpuInput = getComputerChoice();
        console.log(playRound(userInput, cpuInput));
    }

    if (playerScore > cpuScore)
    {
        console.log(`You win the game with a score of ${playerScore} point(s). CPU score: ${cpuScore} point(s).`);
    }
    else
    {
        console.log(`You lose as CPU scored ${cpuScore} point(s). Your score: ${playerScore} point(s).`);
    }
}

game();