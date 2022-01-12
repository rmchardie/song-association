window.addEventListener("load", function () {
    if (window.localStorage.getItem("name") === null) {
        playerDetails.style.display = "none";
        document.querySelector(".intro").style.zIndex = "1";
        document.getElementById("playerName").focus();
    } else {
        document.querySelector(".mainMenu").style.zIndex = "1";
        playerDetails.style.display = "flex";
    }
});

const instructions = document.querySelector(".instructions");

showInstructions.addEventListener('click', function() {
    instructions.style.transform = "translateY(0)";
    instructions.style.transition = "500ms";
    instructions.style.zIndex = "1";
});

hideInstructions.addEventListener('click', function() {
    instructions.style.transform = "translateY(530px)";
    instructions.style.transition = "500ms";
    instructions.style.zIndex = "-1";
});