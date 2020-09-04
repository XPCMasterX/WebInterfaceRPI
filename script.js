async function up() {
    var x = await fetch("http://robot20:8080/api/v1/up");
    var y = await x.json();
    console.log(y.message);
}
async function down() {
    var x = await fetch("http://robot20:8080/api/v1/down");
    var y = await x.json();
    console.log(y.message);
}
async function right() {
    var x = await fetch("http://robot20:8080/api/v1/right");
    var y = await x.json();
    console.log(y.message);
}
async function left() {
    var x = await fetch("http://robot20:8080/api/v1/left");
    var y = await x.json();
    console.log(y.message);
}

async function trigger(direction) {
    if (direction === "left") {
        left();
        document.getElementById("left").style.backgroundColor = "red";
        var x = await new Promise(r => setTimeout(r, 100));
        document.getElementById("left").style.backgroundColor = "greenyellow";
    } else if (direction === "right") {
        right();
        document.getElementById("right").style.backgroundColor = "red";
        var x = await new Promise(r => setTimeout(r, 100));
        document.getElementById("right").style.backgroundColor = "greenyellow";
    } else if (direction === "down") {
        down();
        document.getElementById("down").style.backgroundColor = "red";
        var x = await new Promise(r => setTimeout(r, 100));
        document.getElementById("down").style.backgroundColor = "greenyellow";
    } else if (direction === "up") {
        up();
        document.getElementById("up").style.backgroundColor = "red";
        var x = await new Promise(r => setTimeout(r, 100));
        document.getElementById("up").style.backgroundColor = "greenyellow";
    }
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
        document.getElementById("left").style.backgroundColor = "greenyellow";
    } else if (event.keyCode == 39) {
        document.getElementById("right").style.backgroundColor = "greenyellow";
    } else if (event.keyCode == 40) {
        document.getElementById("down").style.backgroundColor = "greenyellow";
    } else if (event.keyCode == 38) {
        document.getElementById("up").style.backgroundColor = "greenyellow";
    }
}); 