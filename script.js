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
document.querySelector("#mushroom5_container").addEventListener("click", clickmushroom5);
document.querySelector("#book1_container").addEventListener("click", clickbook1);
document.querySelector("#book2_container").addEventListener("click", clickbook2);
document.querySelector("#book3_container").addEventListener("click", clickbook3);
}

function resetLives() {
  lives = 3;
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoint() {
  points = 0;
  displayPoints();
}

function clickMushroom1(){
 
  document.querySelector("#mushroom1_container").removeEventListener("click", clickMushroom1);
  document.querySelector("#mushroom1_container").classList.add("paused");
  document.querySelector("#mushroom1").classList.add("zoom_in");
  document.querySelector("#mushroom1_container").addEventListener("animationend", mushroom1Gone);
  document.querySelector("#good").currentTime =0;
  document.querySelector("#good").play();
  incrementPoints();
  displayPoints();
}

function clickMushroom2(){
 
  document.querySelector("#mushroom2_container").removeEventListener("click", clickMushroom2);
  document.querySelector("#mushroom2_container").classList.add("paused");
  document.querySelector("#mushroom2").classList.add("zoom_in");
  document.querySelector("#mushroom2_container").addEventListener("animationend", mushroom2Gone);
  document.querySelector("#good").currentTime = 0;
  document.querySelector("#good").play();
  incrementPoints();
  displayPoints();
}

function clickMushroom3(){
 
  document.querySelector("#mushroom3_container").removeEventListener("click", clickMushroom3);
  document.querySelector("#mushroom3_container").classList.add("paused");
  document.querySelector("#mushroom3").classList.add("zoom_in");
  document.querySelector("#mushroom3_container").addEventListener("animationend", mushroom3Gone);
  document.querySelector("#good").currentTime =0;
  document.querySelector("#good").play();
  incrementPoints();
  displayPoints();
}

function clickMushroom4(){
  document.querySelector("#mushroom4_container").removeEventListener("click", clickMushroom4);
  document.querySelector("#mushroom4_container").classList.add("paused");
  document.querySelector("#mushroom4").classList.add("zoom_in");
  document.querySelector("#mushroom4_container").addEventListener("animationend", mushroom4Gone);
  document.querySelector("#good").currentTime = 0;
  document.querySelector("#good").play();
  incrementPoints();
  displayPoints();
}

function clickmushroom5(){
 
  document.querySelector("#mushroom5_container").removeEventListener("click", clickmushroom5);
  document.querySelector("#mushroom5_container").classList.add("paused");
  document.querySelector("#mushroom5").classList.add("zoom_in");
  document.querySelector("#mushroom5_container").addEventListener("animationend", mushroom5Gone);
  document.querySelector("#good").currentTime = 0;
  document.querySelector("#good").play();
  incrementPoints();
  displayPoints();
}


function clickbook1(){
 
  document.querySelector("#book1_container").removeEventListener("click", clickbook1);
  document.querySelector("#book1_container").classList.add("paused");
  document.querySelector("#book1").classList.add("zoom_out");
  document.querySelector("#book1_container").addEventListener("animationend", book1Gone);
  document.querySelector("#bad").currentTime = 0;
  document.querySelector("#bad").play();
  decrementLives();
  displayLives();
  decrementPoints();
  displayPoints();
}

function clickbook2(){
 
  document.querySelector("#book2_container").removeEventListener("click", clickbook2);
  document.querySelector("#book2_container").classList.add("paused");
  document.querySelector("#book2").classList.add("zoom_out");
  document.querySelector("#book2_container").addEventListener("animationend", book2Gone);
  document.querySelector("#bad").currentTime = 0;
  document.querySelector("#bad").play();
  decrementLives();
  displayLives();
  decrementPoints();
  displayPoints();
}

function clickbook3(){
 
  document.querySelector("#book3_container").removeEventListener("click", clickbook3);
  document.querySelector("#book3_container").classList.add("paused");
  document.querySelector("#book3").classList.add("zoom_out");
  document.querySelector("#book3_container").addEventListener("animationend", book3Gone);
  document.querySelector("#bad").currentTime = 0;
  document.querySelector("#bad").play();
  decrementLives();
  displayLives();
  decrementPoints();
  displayPoints();
}

// pint og liv 

function decrementLives() {
  if (lives <= 1) {
    console.log("lost");
    displaygameOver();
  }
  displayDecrementedLives();
  lives -= 1;
}

function displayDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.remove("pulse-heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function incrementPoints() {
  points += 1;
  console.log(points);
  displayPoints();
  if (points >= 10) {
    levelComplete();
  }
}
function displayPoints() {
  console.log("displayPoints");
  document.querySelector("#point_count").textContent = points;
}

function decrementPoints() {
  points -= 1;
  console.log(points);
  displayPoints();
}


// fjern animationer og gør det muligt at klikke på dem igen 

function mushroom1Gone() {
  document.querySelector("#mushroom1_container").removeEventListener("animationend", mushroom1Gone);
  document.querySelector("#mushroom1").classList.remove("zoom_in");
  document.querySelector("#mushroom1_container").classList.remove("paused");
  document.querySelector("#mushroom1_container").classList.remove("flyingm1");
  document.querySelector("#mushroom1_container").offsetWidth;
  document.querySelector("#mushroom1_container").classList.add("flyingm1");
  document.querySelector("#mushroom1_container").addEventListener("click", clickMushroom1);
}


function mushroom2Gone() {
  document.querySelector("#mushroom2_container").removeEventListener("animationend", mushroom2Gone);
  document.querySelector("#mushroom2").classList.remove("zoom_in");
  document.querySelector("#mushroom2_container").classList.remove("paused");
  document.querySelector("#mushroom2_container").classList.remove("flyingm2");
  document.querySelector("#mushroom2_container").offsetWidth;
  document.querySelector("#mushroom2_container").classList.add("flyingm2");
  document.querySelector("#mushroom2_container").addEventListener("click", clickMushroom2);
}


function mushroom3Gone() {
  document.querySelector("#mushroom3_container").removeEventListener("animationend", mushroom3Gone);
  document.querySelector("#mushroom3").classList.remove("zoom_in");
  document.querySelector("#mushroom3_container").classList.remove("paused");
  document.querySelector("#mushroom3_container").classList.remove("flyingm3");
  document.querySelector("#mushroom3_container").offsetWidth;
  document.querySelector("#mushroom3_container").classList.add("flyingm3");
  document.querySelector("#mushroom3_container").addEventListener("click", clickMushroom3);
}


function mushroom4Gone() {
  document.querySelector("#mushroom4_container").removeEventListener("animationend", mushroom4Gone);
  document.querySelector("#mushroom4").classList.remove("zoom_in");
  document.querySelector("#mushroom4_container").classList.remove("paused");
  document.querySelector("#mushroom4_container").classList.remove("flyingm4");
  document.querySelector("#mushroom4_container").offsetWidth;
  document.querySelector("#mushroom4_container").classList.add("flyingm4");
  document.querySelector("#mushroom4_container").addEventListener("click", clickMushroom4);
}


function mushroom5Gone() {
  document.querySelector("#mushroom5_container").removeEventListener("animationend", mushroom5Gone);
  document.querySelector("#mushroom5").classList.remove("zoom_in");
  document.querySelector("#mushroom5_container").classList.remove("paused");
  document.querySelector("#mushroom5_container").classList.remove("flyingm5");
  document.querySelector("#mushroom5_container").offsetWidth;
  document.querySelector("#mushroom5_container").classList.add("flyingm5");
  document.querySelector("#mushroom5_container").addEventListener("click", clickmushroom5);
}

function book1Gone() {
  document.querySelector("#book1_container").removeEventListener("animationend", book1Gone);
  document.querySelector("#book1").classList.remove("zoom_out");
  document.querySelector("#book1_container").classList.remove("paused");
  document.querySelector("#book1_container").classList.remove("flyingb1");
  document.querySelector("#book1_container").offsetWidth;
  document.querySelector("#book1_container").classList.add("flyingb1");
  document.querySelector("#book1_container").addEventListener("click", clickbook1);
}

function book2Gone() {
  document.querySelector("#book2_container").removeEventListener("animationend", book2Gone);
  document.querySelector("#book2").classList.remove("zoom_out");
  document.querySelector("#book2_container").classList.remove("paused");
  document.querySelector("#book2_container").classList.remove("flyingb2");
  document.querySelector("#book2_container").offsetWidth;
  document.querySelector("#book2_container").classList.add("flyingb2");
  document.querySelector("#book2_container").addEventListener("click", clickbook2);
}

function book3Gone() {
  document.querySelector("#book3_container").removeEventListener("animationend", book3Gone);
  document.querySelector("#book3").classList.remove("zoom_out");
  document.querySelector("#book3_container").classList.remove("paused");
  document.querySelector("#book3_container").classList.remove("flyingb3");
  document.querySelector("#book3_container").offsetWidth;
  document.querySelector("#book3_container").classList.add("flyingb3");
  document.querySelector("#book3_container").addEventListener("click", clickbook3);
}

function displaygameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();
}

function startTimer() {
  document.querySelector("#time").classList.add("shrink");
  document.querySelector("#time").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Time is up");

  if (points >= 10) {
    levelComplete();
  } else {
    displaygameOver();
  }
}
function resetTimer() {
  document.querySelector("#time").classList.remove("shrink");
  document.querySelector("#time").offsetWidth;
}



