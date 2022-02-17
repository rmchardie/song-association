let trophyMessage = document.querySelector("#trophyMessage");
let trophies = 00;

const trophy = document.querySelector(".trophyIcon");
const trophiesWon = document.querySelector(".trophiesWon");

const restartBtn = document.querySelector(".restart");
const playPauseBtn = document.querySelector(".playPause");
const settingsBtn = document.querySelector(".settings");
const confirmRestartBtn = document.querySelector("#confirmRestart");
const cancelRestartBtn = document.querySelector("#cancelRestart");
const cancelSettingsBtn = document.querySelector("#cancelSettings");
const settingsRestartBtn = document.querySelector("#settingsRestart");
const settingsTimersBtn = document.querySelector("#settingsTimers");
const settingsWordsBtn = document.querySelector("#settingsWords");
const tryAgainBtn = document.querySelector("#tryAgain");

const restartPanel = document.querySelector(".restartPanel");
const settingsPanel = document.querySelector(".settingsPanel");
const timesUpPanel = document.querySelector(".timesUpPanel");
const levelCompletedPanel = document.querySelector(".levelCompletedPanel");

function restartGame() {
    mainMenu.style.transform = "translateX(0%)";
    mainMenu.style.transition = "1000ms";
    mainMenu.style.zIndex = "2";
    timerMenu.style.transform = "translateX(100%)";
    restartPanel.style.transform = "translateY(100vh)";
    restartPanel.style.transition = "500ms";
    restartPanel.style.zIndex = "-1";
    timerMenu.style.zIndex = "-1";
    gamePanel.style.zIndex = "-1";
    resetTimers();
    trophies = 00;
    trophyMessage.textContent = "0" + trophies;
    wordsArr = [];
    clearInterval(timerInterval);
    timeLimit = playerTimer;
    timePassed = 0;
    settingsPanel.style.transform = "translateY(100vh)";
    settingsPanel.style.transition = "500ms";
    settingsPanel.style.zIndex = "-1";
    playPauseBtn.classList.remove("disabled");
    playPauseBtn.style.backgroundColor = "#ff9900";
    playPauseBtn.style.color = "#333";
    playIcon.classList.add("fa-forward");
    playIcon.classList.remove("fa-stop");
}

restartBtn.addEventListener("click", function() {
    clearInterval(timerInterval);
    restartPanel.style.zIndex = "1";
    restartPanel.style.transform = "translateY(0vh)";
    restartPanel.style.transition = "500ms";
})

playPauseBtn.addEventListener("click", function() {
    trophies++;
    trophy.classList.toggle("addTrophy");
    setTimeout(function() {
        trophy.classList.toggle("addTrophy");
    }, 1000);
    clearInterval(timerInterval);
    timeLimit = playerTimer;
    timePassed = 0;
    selectWord();
    startTimer();
    if ((trophies === 10) || (wordContainer.textContent === "<List empty>")) {
        this.classList.add("disabled");
        this.style.backgroundColor = "#FF0000";
        this.style.color = "#FFF";
        playIcon.classList.remove("fa-forward");
        playIcon.classList.add("fa-stop");
        clearInterval(timerInterval);
        levelCompletedPanel.style.transform = "translateY(0vh)";
        levelCompletedPanel.style.transition = "500ms";
        levelCompletedPanel.style.zIndex = "1";
        trophiesWon.textContent = trophies;
    }
    if (trophies < 10) {
        trophyMessage.textContent = "0" + trophies;
    } else {
        trophyMessage.textContent = trophies;
    }
})

settingsBtn.addEventListener("click", function() {
    clearInterval(timerInterval);
    settingsPanel.style.zIndex = "1";
    settingsPanel.style.transform = "translateY(0vh)";
    settingsPanel.style.transition = "500ms";
})

confirmRestartBtn.addEventListener("click", restartGame);

settingsRestartBtn.addEventListener("click", restartGame);

settingsTimersBtn.addEventListener("click", showTimers);

settingsWordsBtn.addEventListener("click", function() {
    mainMenu.style.transform = "translateX(0)";
    mainMenu.style.transition = "1000ms";
    mainMenu.style.zIndex = "2";
    settingsPanel.style.transform = "translateY(100vh)";
    settingsPanel.style.transition = "500ms";
    settingsPanel.style.zIndex = "-1";
})

cancelRestartBtn.addEventListener("click", function() {
    if (timeLeft === 0) {
        //Do nothing
    } else {
        startTimer();
    }
    restartPanel.style.transform = "translateY(100vh)";
    restartPanel.style.transition = "500ms";
    restartPanel.style.zIndex = "-1";
})

cancelSettingsBtn.addEventListener("click", function() {
    if (timeLeft === 0) {
        //Do nothing
    } else {
        startTimer();
    }
    settingsPanel.style.transform = "translateY(100vh)";
    settingsPanel.style.transition = "500ms";
    settingsPanel.style.zIndex = "-1";
})

tryAgainBtn.addEventListener("click", function() {
    timesUpPanel.style.zIndex = "-1";
    timesUpPanel.style.transform = "translateY(100vh)";
    timesUpPanel.style.transition = "500ms";
    playPauseBtn.classList.remove("disabled");
    playPauseBtn.style.backgroundColor = "#ff9900";
    playPauseBtn.style.color = "#333";
    playIcon.classList.add("fa-forward");
    playIcon.classList.remove("fa-stop");
    timeLimit = playerTimer;
    timePassed = 0;
    selectWord();
    startTimer();
})