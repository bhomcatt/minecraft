var canvas = new fabric.Canvas("myCanvas");

playerY = 10;
playerX = 10;
catX = 900;
catY = 10;
blockW = 30;
blockH = 30;
var catObject = "";
var playerObject = "";
var blockObject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;

        playerObject.scaleToWidth(159);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function cat_update() {
    fabric.Image.fromURL("cat.png", function (Img) {
        catObject = Img;

        catObject.scaleToWidth(159);
        catObject.scaleToHeight(140);
        catObject.set({
            top: catY,
            left: catX
        });
        canvas.add(catObject);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        blockObject = Img;
        blockObject.scaleToWidth(blockW)
        blockObject.scaleToHeight(blockH)
        blockObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockObject);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("se presiona p y shift al mismo tiempo");
        blockW = blockW + 10;
        blockH = blockH + 10;
        document.getElementById("current_width").innerHTML = blockW;
        document.getElementById("current_height").innerHTML = blockH;
    }
    if (e.shiftKey == true && keyPressed == "79") {
        console.log("se presiona shift y o al mismo tiempo");
        blockW = blockW - 10;
        blockH = blockH - 10;
        document.getElementById("current_width").innerHTML = blockW;
        document.getElementById("current_height").innerHTML = blockH;
    }
    if (keyPressed == "38") {
        up();
        console.log("flecha arriba");
    }
    if (keyPressed == "40") {
        down();
        console.log("flecha abajo");
    }
    if (keyPressed == "37") {
        left();
        console.log("flecha izquierda");
    }
    if (keyPressed == "39") {
        right();
        console.log("flecha derecha");
    }
    //aqui esta el gato
    if (keyPressed == "87") {
        up2();
        console.log("w");
    }
    if (keyPressed == "83") {
        down2();
        console.log("s");
    }
    if (keyPressed == "65") {
        left2();
        console.log("a");
    }
    if (keyPressed == "68") {
        right2();
        console.log("d");
    }
    if (keyPressed == "77") {
        new_image("wall.jpg");
        console.log("m")
    }
    if (keyPressed == "71") {
        new_image("ground.png");
        console.log("g");
    }
    if (keyPressed == "76") {
        new_image("light_green.png");
        console.log("l")
    }
    if (keyPressed == "84") {
        new_image("trunk.jpg");
        console.log("t");
    }
    if (keyPressed == "82") {
        new_image("roof.jpg");
        console.log("r");
    }
    if (keyPressed == "89") {
        new_image("yellow_wall.png");
        console.log("y");
    }
    if (keyPressed == "86") {
        new_image("dark_green.png");
        console.log("v");
    }
    if (keyPressed == "85") {
        new_image("unique.png");
        console.log("u");
    }
    if (keyPressed == "67") {
        new_image("cloud.jpg");
        console.log("c");
    }
    if (keyPressed == "78") {
        new_image("wod plank refined.jpg")
        console.log("n")
    }

}

function up() {
    if (playerY >= 0) {
        playerY = playerY - blockH;
        console.log("altura del bloke = " + blockH);
        console.log("cuando se presiona la flecha hacia arriba, x = " + playerX + ", y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function down() {
    if (playerY <= 500) {
        playerY = playerY + blockH;
        console.log("altura del bloke = " + blockH);
        console.log("cuando se presiona la flecha hacia abajo, x = " + playerX + ", y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function right() {
    if (playerX <= 900) {
        playerX = playerX + blockW;
        console.log("anchura del bloke = " + blockH);
        console.log("cuando se presiona la flecha hacia derecha, x = " + playerX + ", y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}

function left(){
    if(playerX >= 0){
        playerX = playerX - blockW;
        console.log("anchura del bloke = " + blockH);
        console.log("cuando se presiona laflecha izquierda, x = " + playerX + ", y = " + playerY);
        canvas.remove(playerObject);
        player_update();
    }
}
//aqui empieza el gato
function up2() {
    if (catY >= 0) {
        catY = catY - blockH;
        console.log("altura del bloke = " + blockH);
        console.log("cuando se presiona la flecha hacia arriba, x = " + catX + ", y = " + catY);
        canvas.remove(catObject);
        cat_update();
    }
}

function down2() {
    if (catY <= 500) {
        catY = catY + blockH;
        console.log("altura del bloke = " + blockH);
        console.log("cuando se presiona la flecha hacia abajo, x = " + catX + ", y = " + catY);
        canvas.remove(catObject);
        cat_update();
    }
}

function right2() {
    if (catX <= 900) {
        catX = catX + blockW;
        console.log("anchura del bloke = " + blockH);
        console.log("cuando se presiona la flecha hacia derecha, x = " + catX + ", y = " + catY);
        canvas.remove(catObject);
        cat_update();
    }
}

function left2(){
    if(catX >= 0){
        catX = catX - blockW;
        console.log("anchura del bloke = " + blockH);
        console.log("cuando se presiona laflecha izquierda, x = " + catX + ", y = " + catY);
        canvas.remove(catObject);
        cat_update();
    }
}