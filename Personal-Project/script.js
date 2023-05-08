let count = 0;

function openNav() {
    if(count == 0) {
        document.getElementById("navstuff").style.width = "250px";
        document.getElementById("openclose").style.marginLeft = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        count = count + 1;
    } else if (count == 1) {
        document.getElementById("navstuff").style.width = "0";
        document.getElementById("openclose").style.marginLeft = "0";
        // document.getElementById("main").style.marginLeft= "0";
        count = count - 1;
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