let count = 0;

function openNav() {
    if(count == 0) {
        document.getElementById("navstuff").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("grass").style.width = "87.43%";
        document.getElementById("picnic").style.marginLeft = "250px"; //WIP
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        count = count + 1;
    } else if (count == 1) {
        document.getElementById("navstuff").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.getElementById("grass").style.width = "100%";
        document.getElementById("picnic").style.marginLeft = "0";
        // document.body.style.backgroundColor = "white";
        count = count - 1;
    }
  }
  
//   function closeNav() {
//     document.getElementById("navstuff").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//     document.body.style.backgroundColor = "white";
//   }