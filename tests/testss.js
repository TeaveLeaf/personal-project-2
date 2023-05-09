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