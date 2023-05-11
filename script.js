let count = 0;

function openNav() {
    if(count == 0) {
        document.getElementById("navstuff").style.width = "250px";
        document.getElementById("openclose").style.marginLeft = "250px";
        count = count + 1;
        console.log("Opened the nav");
    } else if (count == 1) {
        document.getElementById("navstuff").style.width = "0";
        document.getElementById("openclose").style.marginLeft = "0";
        count = count - 1;
        console.log("Closed the nav");
    }
}


let imgcount = 0;
function left() {
    if (imgcount == 0){
        console.log(imgcount);
        imgcount = 4;
        imgcount = imgcount - 1;
        console.log(imgcount);
    } else {
        console.log(imgcount);
        imgcount = imgcount - 1;
        console.log(imgcount);
    }
}

let lantern = document.getElementById("lantern");

let lanterncount = 0;
function lanternclick() {
    if (lanterncount == 0) {
        document.getElementById("lanternbg").src = "Pics/lantern-on.png";
        lanterncount = lanterncount + 1;
        console.log("Lantern is on!");
    } else if (lanterncount == 1) {
        document.getElementById("lanternbg").src = "Pics/lantern-off.png";
        lanterncount = lanterncount - 1;
        console.log("Lantern is off!");
    }
}