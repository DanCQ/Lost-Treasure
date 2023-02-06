const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");
const box9 = document.getElementById("9");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

const ocean = new Audio("assets/ocean.mp3"); //ocean sounds
ocean.volume = 0.8;
const bonfire = new Audio("assets/bonfire.mp3"); //music
bonfire.loop = true;
bonfire.volume = 0.8;

let treasure = randomRange(1,9); //this is where the treasure is hidden

let correctCount = 0;
let wrongCount = 0;
correct.innerHTML = correctCount;
wrong.innerHTML = wrongCount;


box1.onclick = function() { selection(1) };
box2.onclick = function() { selection(2) };
box3.onclick = function() { selection(3) };
box4.onclick = function() { selection(4) };
box5.onclick = function() { selection(5) };
box6.onclick = function() { selection(6) };
box7.onclick = function() { selection(7) };
box8.onclick = function() { selection(8) };
box9.onclick = function() { selection(9) };


//Returns a random number within a chosen range
function randomRange(min, max) { 

    return Math.floor(Math.random() * (max - min + 1)) + min;
//Math.random() returns a random decimal between 0 - 0.99
//Math.floor() rounds down to the nearest whole number  e.i. 10 = 0 - 9  
}

//compares the user's treasure selection to the randomly chosen selection
function selection(box) { 
    
    let lose = document.querySelector(".lose");
    let win = document.querySelector(".win");

    let open = new Audio("assets/open-chest.mp3");
    let treasureChest = new Audio("assets/treasure-chest.mp3");

    //updates guessing score
    function score(guess) {

        if (guess == "win") {
            correctCount++; 
            correct.innerHTML = correctCount;

        } else if (guess == "lose") {
            wrongCount++;
            wrong.innerHTML = wrongCount;
        }   
    }
    
    if (box == treasure) {

        bonfire.volume = 0.4;
        treasureChest.play(); //plays sound
        win.style.visibility = "visible"; //shows message

        score("win"); //updates score

        setTimeout(function() { 

            bonfire.volume = 0.8;
            win.style.visibility = "hidden"; 

        }, 10000); //Gives time to celebrate, hides again
        
        treasure = randomRange(1,9); //after win asigns a different random number to treasure

    } else {

        open.play(); //plays sound
        lose.style.visibility = "visible";  //shows message

        setTimeout(function() { 

            score("lose"); 

        }, 500 );  //updates score with suspense

        setTimeout(function() { 

            lose.style.visibility = "hidden"; //hides again

        }, 1750 ); //waits 1.75 seconds
    }
}

window.onclick = function() {

    ocean.play(); //plays ocean sounds
    bonfire.play(); //plays music
};
