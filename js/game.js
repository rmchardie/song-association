let trophyMessage = document.querySelector("#trophyMessage");
let trophies = 00;

const restartBtn = document.querySelector(".restart");
const playPauseBtn = document.querySelector(".playPause");
const settingsBtn = document.querySelector(".settings");
const confirmRestartBtn = document.querySelector("#confirmRestart");
const cancelRestartBtn = document.querySelector("#cancelRestart");

const restartPanel = document.querySelector(".restartPanel");

restartBtn.addEventListener("click", function() {
    restartPanel.style.zIndex = "1";
    restartPanel.style.transform = "translateY(0vh)";
    restartPanel.style.transition = "500ms";
})

playPauseBtn.addEventListener("click", function() {
    trophies++;
    if (trophies === 10) {
        this.classList.add("disabled");
    }
    if (trophies < 10) {
        trophyMessage.textContent = "0" + trophies;
    } else {
        trophyMessage.textContent = trophies;
    }
    selectWord();
})

settingsBtn.addEventListener("click", function() {
    console.log("Game Settings!");
})

confirmRestartBtn.addEventListener("click", function() {
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
})

cancelRestartBtn.addEventListener("click", function() {
    restartPanel.style.transform = "translateY(100vh)";
    restartPanel.style.transition = "500ms";
    restartPanel.style.zIndex = "-1";
})