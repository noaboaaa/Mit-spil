"use strict";
window.addEventListener("load", ready);

//globale variabler
let points = 0;
let lives = 3;

function ready() {
    console.log("JavaScript ready!");
    document.querySelector("#btn_start").addEventListener("click", startGame);
    document.querySelector("#try_again").addEventListener("click", startGame);
    document.querySelector("#try_again1").addEventListener("click", startGame);
}

function startGame() {
  console.log("JavaScript kører!");
  document.querySelector("#start_sound").play();
  document.querySelector("#background_sound").play();
   resetTimer();
   resetLives();
   resetPoint();
   startTimer();

// startskærm skjules 
document.querySelector("#start").classList.add("hidden");
document.querySelector("#game_over").classList.add("hidden");
document.querySelector("#level_complete").classList.add("hidden");

// start alle animationer
document.querySelector("#mushroom1_container").classList.add("flyingm1");
document.querySelector("#mushroom2_container").classList.add("flyingm2");
document.querySelector("#mushroom3_container").classList.add("flyingm3");
document.querySelector("#mushroom4_container").classList.add("flyingm4");
document.querySelector("#mushroom5_container").classList.add("flyingm5");
document.querySelector("#book1_container").classList.add("flyingb1");
document.querySelector("#book2_container").classList.add("flyingb2");
document.querySelector("#book3_container").classList.add("flyingb3");



// Registrer click 
document.querySelector("#mushroom1_container").addEventListener("click", clickMushroom1);
document.querySelector("#mushroom2_container").addEventListener("click", clickMushroom2);
document.querySelector("#mushroom3_container").addEventListener("click", clickMushroom3);
document.querySelector("#mushroom4_container").addEventListener("click", clickMushroom4);
document.querySelector("#mushroom5_container").addEventListener("click", clickMushroom5);
document.querySelector("#book1_container").addEventListener("click", clickBook1);
document.querySelector("#book2_container").addEventListener("click", clickBook2);
document.querySelector("#book3_container").addEventListener("click", clickBook3);
}

function resetLives() {
  lives = 3;
  document.querySelector("#life1").classList.remove("broken_life");
  document.querySelector("#life2").classList.remove("broken_life");
  document.querySelector("#life3").classList.remove("broken_life");
  document.querySelector("#life1").classList.add("active_life");
  document.querySelector("#life2").classList.add("active_life");
  document.querySelector("#life3").classList.add("active_life");
}

function resetPoint() {
  points = 0;
  displayPoints();
}


















// clickBook

function clickBook1(){

    document.querySelector("#book1_container").removeEventListener("click", clickBook1)
    document.querySelector("#book1_container").classList.add("paused");
    document.querySelector("#book1").classList.add("zoom_in");
    document.querySelector("#book1_container").addEventListener("animationend", Book1Gone);
    decrementPoints();
    displayPoints();
}

function clickBook2(){

    document.querySelector("#book2_container").removeEventListener("click",clickBook2)
    document.querySelector("#book2_container").classList.add("paused");
    document.querySelector("#book2").classList.add("zoom_in");
    document.querySelector("#book2_container").addEventListener("animationend", Book2Gone);
    decrementPoints();
    displayPoints();
}


// mushroomGone +point 

function Mushroom1Gone() {
  document.querySelector("#mushroom1_container").removeEventListener("animationend", Mushroom1Gone);
  document.querySelector("#mushroom1_container").classList.remove("zoom_out");
  document.querySelector("#mushroom1_container").classList.remove("paused");
  document.querySelector("#mushroom1_container").classList.remove("flying");
  document.querySelector("#mushroom1_container").offsetWidth;
  document.querySelector("#mushroom1_container").classList.add("flying");
  document.querySelector("#mushroom1_container").addEventListener("click", clickMushroom1); 

}
function Mushroom2Gone() {
  document.querySelector("#mushroom2_container").removeEventListener("animationend", Mushroom2Gone);
  document.querySelector("#mushroom2_container").classList.remove("zoom_out");
  document.querySelector("#mushroom2_container").classList.remove("paused");
  document.querySelector("#mushroom2_container").classList.remove("flying");
  document.querySelector("#mushroom2_container").offsetWidth;
  document.querySelector("#mushroom2_container").classList.add("flying");
  document.querySelector("#mushroom2_container").addEventListener("click", clickMushroom2);
 
 
}

function Mushroom3Gone() {
  document.querySelector("#mushroom3_container").removeEventListener("animationend", Mushroom3Gone);
  document.querySelector("#mushroom3_container").classList.remove("zoom_out");
  document.querySelector("#mushroom3_container").classList.remove("paused");
  document.querySelector("#mushroom3_container").classList.remove("flying");
  document.querySelector("#mushroom3_container").offsetWidth;
  document.querySelector("#mushroom3_container").classList.add("flying");
  document.querySelector("#mushroom3_container").addEventListener("click", clickMushroom3); 
  
}


//dårlig ting: bookGone -point

function Book1Gone() {
  document.querySelector("#book1_container").removeEventListener("animationend", Book1Gone);
  document.querySelector("#book1_container").classList.remove("zoom_in");
  document.querySelector("#book1_container").classList.remove("paused");
  document.querySelector("#book1_container").classList.remove("flying");
  document.querySelector("#book1_container").offsetWidth;
  document.querySelector("#book1_container").classList.add("flying");
  document.querySelector("#book1_container").addEventListener("click", clickBook1); 

}

function Book2Gone() {
  document.querySelector("#book2_container").removeEventListener("animationend", Book2Gone);
  document.querySelector("#book2_container").classList.remove("zoom_in");
  document.querySelector("#book2_container").classList.remove("paused");
  document.querySelector("#book2_container").classList.remove("flying");
  document.querySelector("#book2_container").offsetWidth;
  document.querySelector("#book2_container").classList.add("flying");
  document.querySelector("#book2_container").addEventListener("click", clickBook2); 
}


function clickBook1() {
  document.querySelector("#book1_container").removeEventListener("click", clickBook1);
  document.querySelector("#book1_container").classList.add("paused");
  document.querySelector("#book1_container").classList.add("zoom_in");
  document.querySelector("#book1_container").addEventListener("animationend", Book1Gone);
}

function clickBook2() {
  document.querySelector("#book2_container").removeEventListener("click", clickBook2);
  document.querySelector("#book2_container").classList.add("paused");
  document.querySelector("#book2_container").classList.add("zoom_in");
  document.querySelector("#book2_container").addEventListener("animationend", Book2Gone);

}

// point liv osv
function decrementLives() {
  console.log("mist et liv");

  if (lives <= 1) {
    gameOver();
  }

  showDecrementedLives();
  lives--;
}
function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.remove("active_heart");
}


function incrementPoints(){
  console.log("Giv point");
  points++;
  console.log("har nu" + point + "point");
  displayPoints();

  if (points >= 10){
    levelComplete();
  }
}

function displayPoints(){
  console.log("vis point");
  document.querySelector("#point_count").textContent = points;
}


function incrementLives(){
  console.log("få et liv");
  lives++;
  showIncrementedLives();
}


function showIncrementedLives(){
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.remove("active_heart");

}
function gameOver() {
  console.log("Game Over");
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
}

function levelComplete(){
  console.log("Level Complete");
  document.querySelector("#level_complete").classList.remove("hidden");
}

