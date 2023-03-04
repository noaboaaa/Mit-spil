"use strict";
window.addEventListener("load", ready);

//globale variabler
let points = 0;
let lives = 0;

function ready() {
    console.log("JavaScript ready!");
    document.querySelector("#btn_start").addEventListener("click", startGame);
    document.querySelector("#try_again").addEventListener("click", startGame);
    document.querySelector("#try_again1").addEventListener("click", startGame);
}

function startGame() {
// point og liv nulstilles 
  points = 0;
  lives = 3;
  //document.querySelector("#start_lyd").play();
  //document.querySelector("#background_lyd").play();

// startskærm skjules 
document.querySelector("#start").classList.add("hidden");
document.querySelector("#game_over").classList.add("hidden");
document.querySelector("#level_complete").classList.add("hidden");

// start alle animationer
document.querySelector("#mushroom1_container").classList.add("flying");
document.querySelector("#mushroom2_container").classList.add("flying");
document.querySelector("#mushroom3_container").classList.add("flying");
document.querySelector("#book1_container").classList.add("flying");
document.querySelector("#book2_container").classList.add("flying");

// indsæt poitions klasser
document.querySelector("#mushroom1_container").classList.add("position1");
document.querySelector("#mushroom2_container").classList.add("position2");
document.querySelector("#mushroom3_container").classList.add("position3");
document.querySelector("#book1_container").classList.add("position4");
document.querySelector("#book2_container").classList.add("position5");

// Registrer click 
document.querySelector("#mushroom1_container").addEventListener("click", clickMushroom1);
document.querySelector("#mushroom2_container").addEventListener("click", clickMushroom2);
document.querySelector("#mushroom3_container").addEventListener("click", clickMushroom3);
document.querySelector("#book1_container").addEventListener("click", clickBook1);
document.querySelector("#book2_container").addEventListener("click", clickBook2);
}



function clickMushroom1(){

    document.querySelector("#mushroom1_container").removeEventListener("click",clickMushroom1)
    document.querySelector("#mushroom1_container").classList.add("paused");
    document.querySelector("#mushroom1").classList.add("zoom_out");
    document.querySelector("#mushroom1_container").addEventListener("animationend", Mushroom1Gone);
    incrementPoints();
    displayPoints();
}

function clickMushroom2(){

    document.querySelector("#mushroom2_container").removeEventListener("click",clickMushroom2)
    document.querySelector("#mushroom2_container").classList.add("paused");
    document.querySelector("#mushroom2").classList.add("zoom_out");
    document.querySelector("#mushroom2_container").addEventListener("animationend", Mushroom2Gone);
    incrementPoints();
    displayPoints();

}


function clickMushroom3(){

    document.querySelector("#mushroom3_container").removeEventListener("click",clickMushroom3)
    document.querySelector("#mushroom3_container").classList.add("paused");
    document.querySelector("#mushroom3").classList.add("zoom_out");
    document.querySelector("#mushroom3_container").addEventListener("animationend", Mushroom3Gone);
    incrementPoints();
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

