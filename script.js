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

let slideshowCount = 0;
function slideshowPlus() {
    slideshowCount = slideshowCount + 1;
    console.log(slideshowCount)
    if(slideshowCount == 0){
        document.getElementById("carousel").src = "Pics/gameproj.png";
        document.getElementById("webTitle").innerHTML = "Coin Party";
        document.getElementById("webContent").innerHTML = "Coin Party is a game I worked on with a partner for our game project. We were instructed to base our website off of a board game but with a twist in how you played it, so my partner and I decided to create our game as a mix of the board game Monopoly and the video game Pummel Party. The rules for Monopoly were completely replaced with Pummel Party but the mechanics still stayed the same as Monopoly for the most part. The last change we made to the game rules was that the winner would be the player who collected the least amount of coins, hence the name Coin Party. We used Visual Studio Code (VSC), which is the software I usually use for my coding projects, and Netlify for our project. VSC was used for our coding while Netlify uploaded our website to the internet. Of course during our project there were a lot of problems and issues we ran into. Some problems we encountered that were easy to solve were our player sprites cloning themselves on the board, visibility, and getting the players to land in the right spots after rolling the dice. We resolved those problems very quickly but were met with issues that weren’t so easy to fix, especially with the JavaScript. Our card deck function wouldn’t work no matter how much we worked on it and ended up having to scrap it because of how little time we had left. The result is a completely functional game that even has one A.I. player but with the cards gone the game no longer has the entertainment factor. Even if it does not have the cards function and the visuals are not  very nice, I am still extremely happy with this project. I learned a lot about JavaScript during this project and I am excited to use the knowledge I gained from this project for the next one.";
    } else if(slideshowCount == 1){
        document.getElementById("carousel").src = "Pics/mentalhealth.png";
        document.getElementById("webTitle").innerHTML = "Mental Health Awareness";
        document.getElementById("webContent").innerHTML = "This was a project I did earlier in the year based on the topic of mental health. I have a very personal connection to it as I have many friends who struggle with poor mental health and are unable to get immediate help for it due to the lack of understanding and awareness for mental health. During this project, we did something different from our other projects and let other people work on our websites for us. I found this to be very difficult because I would have a certain idea in my head of how I wanted something, but the person working on my website would not do it exactly how I wanted it. What I did end up learning during this project was new coding techniques. I watched as the people who worked on my project code in their own way, it taught me different ways of doing things and it helped me improve my coding. I learn easier visually so seeing people code in front of me helped me hone in my coding skills and problem solving. I learned that I didn’t have to do something just one way and there would always be more than one way to do things.";
    } else if(slideshowCount == 2){
        document.getElementById("carousel").src = "Pics/EECU.png";
        document.getElementById("webTitle").innerHTML = "EECU";
        document.getElementById("webContent").innerHTML = "A while back in the school year an employee from EECU came to our classroom and taught us some things regarding taxes. To thank the speaker for coming all the way to our classroom our teacher assigned us a project to make a calculator that would automatically calculate a person’s taxes for the employee in hopes they could use it for work. For most of the project, I had a relatively easy time programming it as I was now better at coding HTML and CSS. The toughest part I had with this project was coding the JavaScript. This was the first time I was using JavaScript in my project and I was basically lost coding it, but I persevered and programmed a working automatic tax calculator. To use the calculator the user just needs to put their gross annual income and click the calculate button. The JavaScript takes in the data and outputs the results for each box and displays it automatically so the user doesn’t have to do anything else. I’m quite proud of this project as I’m still an inexperienced learning student and I am extremely satisfied to see how much my coding has improved.";
    } else if(slideshowCount == 3){
        document.getElementById("carousel").src = "Pics/zengarden.png";
        document.getElementById("webTitle").innerHTML = "Zen Garden";
        document.getElementById("webContent").innerHTML = "Zen Garden was the first project we did in my Web Applications class. Prior to this I had little to no knowledge of HTML and CSS and struggled during this project. Doing this project was the same as jumping into a pit of snakes, except the snakes weren’t dangerous they just stressed me out on astronomic levels. I got through the HTML relatively fine but the CSS was the bane of my existence. I spent days watching videos, reading articles, and going through lessons to try to figure out how to do the CSS. I eventually got through it and ended up with a simple website. To be honest, I still like how it turned out. It’s not amazing or astonishing but it’s not bad. It’s nice and it was the start of my year of learning. I think the most important thing I learned from this project was to not bite off more than I chew or to overestimate myself. I walked in with too much confidence and came out deeply humbled. I had absolutely no skills and if I wanted to create websites to match my imagination I needed to take the time to learn first. It was an incredibly important learning experience for me and changed how I did my projects.";
    } else if(slideshowCount > 3){
        slideshowCount = 0;
        document.getElementById("carousel").src = "Pics/gameproj.png";
        document.getElementById("webTitle").innerHTML = "Coin Party";
        document.getElementById("webContent").innerHTML = "Coin Party is a game I worked on with a partner for our game project. We were instructed to base our website off of a board game but with a twist in how you played it, so my partner and I decided to create our game as a mix of the board game Monopoly and the video game Pummel Party. The rules for Monopoly were completely replaced with Pummel Party but the mechanics still stayed the same as Monopoly for the most part. The last change we made to the game rules was that the winner would be the player who collected the least amount of coins, hence the name Coin Party. We used Visual Studio Code (VSC), which is the software I usually use for my coding projects, and Netlify for our project. VSC was used for our coding while Netlify uploaded our website to the internet. Of course during our project there were a lot of problems and issues we ran into. Some problems we encountered that were easy to solve were our player sprites cloning themselves on the board, visibility, and getting the players to land in the right spots after rolling the dice. We resolved those problems very quickly but were met with issues that weren’t so easy to fix, especially with the JavaScript. Our card deck function wouldn’t work no matter how much we worked on it and ended up having to scrap it because of how little time we had left. The result is a completely functional game that even has one A.I. player but with the cards gone the game no longer has the entertainment factor. Even if it does not have the cards function and the visuals are not  very nice, I am still extremely happy with this project. I learned a lot about JavaScript during this project and I am excited to use the knowledge I gained from this project for the next one.";
    }
}

function slideshowMinus() {
    slideshowCount = slideshowCount - 1;
    console.log(slideshowCount)
    if(slideshowCount == 0){
        document.getElementById("carousel").src = "Pics/gameproj.png";
        document.getElementById("webTitle").innerHTML = "Coin Party";
        document.getElementById("webContent").innerHTML = "Coin Party is a game I worked on with a partner for our game project. We were instructed to base our website off of a board game but with a twist in how you played it, so my partner and I decided to create our game as a mix of the board game Monopoly and the video game Pummel Party. The rules for Monopoly were completely replaced with Pummel Party but the mechanics still stayed the same as Monopoly for the most part. The last change we made to the game rules was that the winner would be the player who collected the least amount of coins, hence the name Coin Party. We used Visual Studio Code (VSC), which is the software I usually use for my coding projects, and Netlify for our project. VSC was used for our coding while Netlify uploaded our website to the internet. Of course during our project there were a lot of problems and issues we ran into. Some problems we encountered that were easy to solve were our player sprites cloning themselves on the board, visibility, and getting the players to land in the right spots after rolling the dice. We resolved those problems very quickly but were met with issues that weren’t so easy to fix, especially with the JavaScript. Our card deck function wouldn’t work no matter how much we worked on it and ended up having to scrap it because of how little time we had left. The result is a completely functional game that even has one A.I. player but with the cards gone the game no longer has the entertainment factor. Even if it does not have the cards function and the visuals are not  very nice, I am still extremely happy with this project. I learned a lot about JavaScript during this project and I am excited to use the knowledge I gained from this project for the next one.";
    } else if(slideshowCount == 1){
        document.getElementById("carousel").src = "Pics/mentalhealth.png";
        document.getElementById("webTitle").innerHTML = "Mental Health Awareness";
        document.getElementById("webContent").innerHTML = "This was a project I did earlier in the year based on the topic of mental health. I have a very personal connection to it as I have many friends who struggle with poor mental health and are unable to get immediate help for it due to the lack of understanding and awareness for mental health. During this project, we did something different from our other projects and let other people work on our websites for us. I found this to be very difficult because I would have a certain idea in my head of how I wanted something, but the person working on my website would not do it exactly how I wanted it. What I did end up learning during this project was new coding techniques. I watched as the people who worked on my project code in their own way, it taught me different ways of doing things and it helped me improve my coding. I learn easier visually so seeing people code in front of me helped me hone in my coding skills and problem solving. I learned that I didn’t have to do something just one way and there would always be more than one way to do things.";
    } else if(slideshowCount == 2){
        document.getElementById("carousel").src = "Pics/EECU.png";
        document.getElementById("webTitle").innerHTML = "EECU";
        document.getElementById("webContent").innerHTML = "A while back in the school year an employee from EECU came to our classroom and taught us some things regarding taxes. To thank the speaker for coming all the way to our classroom our teacher assigned us a project to make a calculator that would automatically calculate a person’s taxes for the employee in hopes they could use it for work. For most of the project, I had a relatively easy time programming it as I was now better at coding HTML and CSS. The toughest part I had with this project was coding the JavaScript. This was the first time I was using JavaScript in my project and I was basically lost coding it, but I persevered and programmed a working automatic tax calculator. To use the calculator the user just needs to put their gross annual income and click the calculate button. The JavaScript takes in the data and outputs the results for each box and displays it automatically so the user doesn’t have to do anything else. I’m quite proud of this project as I’m still an inexperienced learning student and I am extremely satisfied to see how much my coding has improved.";
    } else if(slideshowCount == 3){
        document.getElementById("carousel").src = "Pics/zengarden.png";
        document.getElementById("webTitle").innerHTML = "Zen Garden";
        document.getElementById("webContent").innerHTML = "Zen Garden was the first project we did in my Web Applications class. Prior to this I had little to no knowledge of HTML and CSS and struggled during this project. Doing this project was the same as jumping into a pit of snakes, except the snakes weren’t dangerous they just stressed me out on astronomic levels. I got through the HTML relatively fine but the CSS was the bane of my existence. I spent days watching videos, reading articles, and going through lessons to try to figure out how to do the CSS. I eventually got through it and ended up with a simple website. To be honest, I still like how it turned out. It’s not amazing or astonishing but it’s not bad. It’s nice and it was the start of my year of learning. I think the most important thing I learned from this project was to not bite off more than I chew or to overestimate myself. I walked in with too much confidence and came out deeply humbled. I had absolutely no skills and if I wanted to create websites to match my imagination I needed to take the time to learn first. It was an incredibly important learning experience for me and changed how I did my projects.";
    } else if(slideshowCount == -1){
        slideshowCount = 3;
        document.getElementById("carousel").src = "Pics/zengarden.png";
        document.getElementById("webTitle").innerHTML = "Zen Garden";
        document.getElementById("webContent").innerHTML = "Zen Garden was the first project we did in my Web Applications class. Prior to this I had little to no knowledge of HTML and CSS and struggled during this project. Doing this project was the same as jumping into a pit of snakes, except the snakes weren’t dangerous they just stressed me out on astronomic levels. I got through the HTML relatively fine but the CSS was the bane of my existence. I spent days watching videos, reading articles, and going through lessons to try to figure out how to do the CSS. I eventually got through it and ended up with a simple website. To be honest, I still like how it turned out. It’s not amazing or astonishing but it’s not bad. It’s nice and it was the start of my year of learning. I think the most important thing I learned from this project was to not bite off more than I chew or to overestimate myself. I walked in with too much confidence and came out deeply humbled. I had absolutely no skills and if I wanted to create websites to match my imagination I needed to take the time to learn first. It was an incredibly important learning experience for me and changed how I did my projects.";
    }
}

let animCounter = 0;
function playAnim1() {
    if(animCounter == 0) {
        document.getElementById("art1").style.animation = "spin 2s";
        console.log("lala");
        animCounter = animCounter + 1;
    } else if (animCounter == 1){
        document.getElementById("art1").style.animation = "spinspin 2s";
        console.log("okok");
        animCounter = animCounter - 1;
    }

}

let animCounter2 = 0;
function playAnim2() {
    if(animCounter2 == 0) {
        document.getElementById("art2").style.animation = "spin 2s";
        console.log("dada");
        animCounter2 = animCounter2 + 1;
    } else if (animCounter2 == 1){
        document.getElementById("art2").style.animation = "spinspin 2s";
        console.log("nknk");
        animCounter2 = animCounter2 - 1;
    }
}

let animCounter3 = 0;
function playAnim3() {
    if(animCounter3 == 0) {
        document.getElementById("art3").style.animation = "spin 2s";
        console.log("sasa");
        animCounter3 = animCounter3 + 1;
    } else if (animCounter3 == 1){
        document.getElementById("art3").style.animation = "spinspin 2s";
        console.log("ekek");
        animCounter3 = animCounter3 - 1;
    }
}