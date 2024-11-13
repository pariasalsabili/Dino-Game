var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom")); 
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); 

    if (blockLeft < 50 && blockLeft > 0 && characterTop < 60) { 
        block.style.animation = "none"; 
        block.style.display = "none"; 
        alert("Game Over. Try again!"); 
        location.reload(); 
    }

}, 10);
