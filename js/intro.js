window.addEventListener("load", function () {
    if (window.localStorage.getItem("name") === null) {
        document.querySelector(".intro").style.zIndex = "1";
        document.getElementById("playerName").focus();
    } else {
        document.querySelector(".mainMenu").style.zIndex = "1";
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