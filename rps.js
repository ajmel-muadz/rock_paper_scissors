let playerScore = 0;
let cpuScore = 0;

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

function getCpuChoice()
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

function playRound(playerChoice, cpuChoice)
{
    let output = "";

    let r = "Rock";
    let p = "Paper";
    let s = "Scissors";

    playerChoice = capitaliseWord(playerChoice);

    if (playerScore < 5 && cpuScore < 5)
    {
        if (playerChoice === cpuChoice)
        {
            output = `That's a tie! Both players chose ${cpuChoice}`;
        }
        else if ((playerChoice === r && cpuChoice === p) || 
        (playerChoice === p && cpuChoice === s) || 
        (playerChoice === s && cpuChoice === r))
        {
            cpuScore = cpuScore + 1;

            if (cpuScore === 5)
            {
                output = `CPU wins the game!`;
            }
            else
            {
                output = `You lose. You chose ${playerChoice} and CPU chose ${cpuChoice}`;
            }
        }
        else
        {
            playerScore = playerScore + 1;

            if (playerScore === 5)
            {
                output = `Player wins the game!`;
            }
            else
            {
                output = `You win! You chose ${playerChoice} and CPU chose ${cpuChoice}`;   
            }
        }
    }
    else if (playerScore === 5)
    {
        output = `Player wins the game!`;
    }
    else if (cpuScore === 5)
    {
        output = `CPU wins the game!`;
    }

    return output;
}

function game()
{
    const rockButton = document.querySelector(".rock-btn");
    const paperButton = document.querySelector(".paper-btn");
    const scissorsButton = document.querySelector(".scissors-btn");

    const container = document.querySelector(".container");

    const text = document.createElement("p");
    text.classList.add("text");
    container.appendChild(text);

    const score = document.createElement("p");
    score.classList.add("score");
    container.appendChild(score);
    
    rockButton.addEventListener("click", () => {
        text.textContent = playRound("Rock", getCpuChoice());
        score.textContent = `Player: ${playerScore}, CPU: ${cpuScore}`;
    });
    
    paperButton.addEventListener("click", () => {
        text.textContent = playRound("Paper", getCpuChoice());
        score.textContent = `Player: ${playerScore}, CPU: ${cpuScore}`;
    });
    
    scissorsButton.addEventListener("click", () => {
        text.textContent = playRound("Scissors", getCpuChoice());
        score.textContent = `Player: ${playerScore}, CPU: ${cpuScore}`;
    });
}

game();