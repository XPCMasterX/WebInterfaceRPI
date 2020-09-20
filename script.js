function up() {
    fetch("http://robot20:8080/up");
}

function stop() {
    fetch("http://robot20:8080/stop");
}

function down() {
    fetch("http://robot20:8080/down");
}
function right() {
    fetch("http://robot20:8080/right");
}
function left() {
    fetch("http://robot20:8080/left");
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        left();
        document.getElementById("left").style.backgroundColor = "red";
    } else if (event.keyCode == 39) {
        right();
        document.getElementById("right").style.backgroundColor = "red";
    } else if (event.keyCode == 40) {
        down();
        document.getElementById("down").style.backgroundColor = "red";
    } else if (event.keyCode == 38) {
        up();
        document.getElementById("up").style.backgroundColor = "red";
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 37) {
        stop();
        document.getElementById("left").style.backgroundColor = "greenyellow";
    } else if (event.keyCode == 39) {
        stop();
        document.getElementById("right").style.backgroundColor = "greenyellow";
    } else if (event.keyCode == 40) {
        stop();
        document.getElementById("down").style.backgroundColor = "greenyellow";
    } else if (event.keyCode == 38) {
        stop();
        document.getElementById("up").style.backgroundColor = "greenyellow";
    }
}); 