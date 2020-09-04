async function up() {
    var x = await fetch("http://robot20:8080/up");
    var y = await x.json();
    console.log(y.message);
}

async function upstop() {
    var x = await fetch("http://robot20:8080/upstop");
    var y = await x.json();
    console.log(y.message);
}

async function down() {
    var x = await fetch("http://robot20:8080/down");
    var y = await x.json();
    console.log(y.message);
}
async function right() {
    var x = await fetch("http://robot20:8080/right");
    var y = await x.json();
    console.log(y.message);
}
async function left() {
    var x = await fetch("http://robot20:8080/left");
    var y = await x.json();
    console.log(y.message);
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
        upstop();
        document.getElementById("up").style.backgroundColor = "greenyellow";
    }
}); 