var color = 1;

function test() {
    if(color == 1){
        document.getElementById("red").style.backgroundColor = "yellow";
        color = color + 1;
        console.log("yellow");
    } else {
        document.getElementById("red").style.backgroundColor = "red";
        color = color - 1;
        console.log("red");
    }
}


let animCounter = 0;
function playAnim1() {
    document.getElementById("art1").style.animation = "spin 2s";
    console.log("lala");
}

function playAnim2() {
    document.getElementById("art2").style.animation = "spin 2s;";
}

function playAnim3() {
    document.getElementById("art3").style.animation = "spin 2s;";
}