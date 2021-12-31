let playerList;
let playerTimer = 10;
let timerLabel = document.querySelector(".timerLabel");
let difficultyLabel = document.querySelector(".difficultyLabel");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const decreaseTimer = document.querySelector(".decreaseBtn");
const increaseTimer = document.querySelector(".increaseBtn");


option1.addEventListener("click", function() {
    playerList = 1;
    alert(playerList);
});

option2.addEventListener("click", function() {
    playerList = 2;
    alert(playerList);
});

option3.addEventListener("click", function() {
    playerList = 3;
    alert(playerList);
});

option4.addEventListener("click", function() {
    playerList = 4;
    alert(playerList);
});

decreaseTimer.addEventListener("click", function() {
    if (playerTimer != 10) {
        playerTimer = playerTimer - 10;
        console.log(playerTimer);
        timerLabel.textContent = `${playerTimer}s`;
        difficultyLabel.textContent = "Novice";
        increaseTimer.style.color = "#0077ff";
        if (playerTimer === 10) {
            decreaseTimer.style.color = "#818181";
            difficultyLabel.textContent = "Master";
        }
    }
})

increaseTimer.addEventListener("click", function() {
    playerTimer = playerTimer + 10;
    console.log(playerTimer);
    timerLabel.textContent = `${playerTimer}s`;
    difficultyLabel.textContent = "Novice";
    decreaseTimer.style.color = "#0077ff";
    if (playerTimer === 30) {
        increaseTimer.style.color = "#818181";
        difficultyLabel.textContent = "Beginner";
    }
})