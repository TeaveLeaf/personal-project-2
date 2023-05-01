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