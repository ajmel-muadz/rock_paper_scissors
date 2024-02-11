let playerScore = 0;
let cpuScore = 0;
let gameWinSound = new Audio("game-win.wav")

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

function getCpuChoice()
{
    let randomInt = getRandomInt(1, 4);

    let result = "";
    if (randomInt === 1)
    {
        result = "🪨";
    }
    else if (randomInt === 2)
    {
        result = "📜";
    }
    else
    {
        result = "✂️";
    }

    return result;
}

function playRound(playerChoice, cpuChoice)
{
    let output = "";

    let r = "🪨";
    let p = "📜";
    let s = "✂️";

    if (playerChoice === cpuChoice)
    {
        cpuScore = cpuScore;
        playerScore = playerScore;
    }
    else if ((playerChoice === r && cpuChoice === p) || 
    (playerChoice === p && cpuChoice === s) || 
    (playerChoice === s && cpuChoice === r))
    {
        cpuScore = cpuScore + 1;
    }
    else
    {
        playerScore = playerScore + 1;
    }
    

    return cpuChoice;
}

function game()
{
    const rockButton = document.querySelector(".rock-btn");
    const paperButton = document.querySelector(".paper-btn");
    const scissorsButton = document.querySelector(".scissors-btn");

    const playerSymbol = document.querySelector(".player-symbol");
    const cpuSymbol = document.querySelector(".cpu-symbol");
    const scorePlayer = document.querySelector(".player-score");
    const scoreCPU = document.querySelector(".cpu-score");

    rockButton.addEventListener("click", () => {
        if (playerScore < 5 && cpuScore < 5)
        {
            playerSymbol.textContent = "🪨";
            cpuSymbol.textContent = playRound("🪨", getCpuChoice());
            scorePlayer.textContent = `${playerScore}`;
            scoreCPU.textContent = `${cpuScore}`;
            
            if (playerScore >= 5 || cpuScore >= 5)
            {
                gameWinSound.play();
            }
        }
    });
    
    paperButton.addEventListener("click", () => {
        if (playerScore < 5 && cpuScore < 5)
        {
            playerSymbol.textContent = "📜";
            cpuSymbol.textContent = playRound("📜", getCpuChoice());
            scorePlayer.textContent = `${playerScore}`;
            scoreCPU.textContent = `${cpuScore}`;

            if (playerScore >= 5 || cpuScore >= 5)
            {
                gameWinSound.play();
            }
        }
    });
    
    scissorsButton.addEventListener("click", () => {
        if (playerScore < 5 && cpuScore < 5)
        {
            playerSymbol.textContent = "✂️";
            cpuSymbol.textContent = playRound("✂️", getCpuChoice());
            scorePlayer.textContent = `${playerScore}`;
            scoreCPU.textContent = `${cpuScore}`;

            if (playerScore >= 5 || cpuScore >= 5)
            {
                gameWinSound.play();
            }
        }
    });
    
}

game();