window.addEventListener("load",start);

let points = 0;
let lives = 0;

function start(){

// start animations 
document.querySelector("#mushroom1_container").classList.add("flyingm1");
document.querySelector("#mushroom2_container").classList.add("flyingm2");
document.querySelector("#mushroom4_container").classList.add("flyingm4");
document.querySelector("#book2_container").classList.add("flyingb2");
document.querySelector("#book3_container").classList.add("flyingb3");

// click register 

document.querySelector("#mushroom1_container").addEventListener("click", clickMushroom1);
document.querySelector("#mushroom2_container").addEventListener("click", clickMushroom2);
document.querySelector("#mushroom4_container").addEventListener("click", clickMushroom4);
document.querySelector("#book2_container").addEventListener("click", clickBook2);
document.querySelector("#book3_container").addEventListener("click", clickBook3);



// bruger nu function for at : gentagne click,stop container, forsvind animation og efterfulgt af forsvind animation: containerSlut

function clickMushroom1(){

    document.querySelector("#mushroom1_container").removeEventListener("click",clickMushroom1)
    document.querySelector("#mushroom1_container").classList.add("paused");
    document.querySelector("#mushroom1").classList.add("zoom_out");
    document.querySelector("#mushroom1_container").addEventListener("animationend", mushroom1Gone);
    decrementPoints();
    displayPoints();
}

function clickMushroom2(){

    document.querySelector("#mushroom2_container").removeEventListener("click",clickMushroom2)
    document.querySelector("#mushroom2_container").classList.add("paused");
    document.querySelector("#mushroom2").classList.add("zoom_out");
    document.querySelector("#mushroom2_container").addEventListener("animationend", mushroom2Gone);
    decrementPoints();
    displayPoints();

}


function clickMushroom4(){

    document.querySelector("#mushroom4_container").removeEventListener("click",clickMushroom4)
    document.querySelector("#mushroom4_container").classList.add("paused");
    document.querySelector("#mushroom4").classList.add("zoom_out");
    document.querySelector("#mushroom4_container").addEventListener("animationend", mushroom4Gone);
    decrementPoints();
    displayPoints();
}

function clickBook2(){

    document.querySelector("#book2_container").removeEventListener("click",clickBook2)
    document.querySelector("#book2_container").classList.add("paused");
    document.querySelector("#book2").classList.add("zoom_in");
    document.querySelector("#book2_container").addEventListener("animationend", book2Gone);
    decrementPoints();
    displayPoints();
}

function clickBook3(){

    document.querySelector("#book3_container").removeEventListener("click",clickBook3)
    document.querySelector("#book3_container").classList.add("paused");
    document.querySelector("#book3").classList.add("zoom_in");
    document.querySelector("#book3_container").addEventListener("animationend", book3Gone);
    decrementPoints();
    displayPoints();
}


// mushroomGone +point 

function Mushroom1Gone() {
  document.querySelector("#mushroom1_container").removeEventListener("animationend", Mushroom1Gone);
  document.querySelector("#mushroom1_container").classList.remove("zoom_out");
  document.querySelector("#mushroom1_container").classList.remove("paused");
  document.querySelector("#mushroom1_container").classList.remove("falling");
  document.querySelector("#mushroom1_container").offsetWidth;
  document.querySelector("#mushroom1_container").classList.add("falling");
  document.querySelector("#mushroom1_container").addEventListener("click", clickMushroom1); 
}
function Mushroom2Gone() {
  document.querySelector("#mushroom2_container").removeEventListener("animationend", Mushroom2Gone);
  document.querySelector("#mushroom2_container").classList.remove("zoom_out");
  document.querySelector("#mushroom2_container").classList.remove("paused");
  document.querySelector("#mushroom2_container").classList.remove("falling");
  document.querySelector("#mushroom2_container").offsetWidth;
  document.querySelector("#mushroom2_container").classList.add("falling");
  document.querySelector("#mushroom2_container").addEventListener("click", clickMushroom2); 
}

function Mushroom4Gone() {
  document.querySelector("#mushroom4_container").removeEventListener("animationend", Mushroom4Gone);
  document.querySelector("#mushroom4_container").classList.remove("zoom_out");
  document.querySelector("#mushroom4_container").classList.remove("paused");
  document.querySelector("#mushroom4_container").classList.remove("falling");
  document.querySelector("#mushroom4_container").offsetWidth;
  document.querySelector("#mushroom4_container").classList.add("falling");
  document.querySelector("#mushroom4_container").addEventListener("click", clickMushroom4); 
}


//dårlig ting: bookGone -point

function Book2Gone() {
  document.querySelector("#book2_container").removeEventListener("animationend", Book2Gone);
  document.querySelector("#book2_container").classList.remove("zoom_in");
  document.querySelector("#book2_container").classList.remove("paused");
  document.querySelector("#book2_container").classList.remove("falling");
  document.querySelector("#book2_container").offsetWidth;
  document.querySelector("#book2_container").classList.add("falling");
  document.querySelector("#book2_container").addEventListener("click", clickBook2); 
}

function Book3Gone() {
  document.querySelector("#book3_container").removeEventListener("animationend", Book3Gone);
  document.querySelector("#book3_container").classList.remove("zoom_in");
  document.querySelector("#book3_container").classList.remove("paused");
  document.querySelector("#book3_container").classList.remove("falling");
  document.querySelector("#book3_container").offsetWidth;
  document.querySelector("#book3_container").classList.add("falling");
  document.querySelector("#book3_container").addEventListener("click", clickBook3); 
}


function clickBook2() {
  document.querySelector("#book2_container").removeEventListener("click", clickBook2);
  document.querySelector("#book2_container").classList.add("paused");
  document.querySelector("#book2_container").classList.add("zoom_in");
  document.querySelector("#book2_container").addEventListener("animationend", Book2Gone);
  incrementPoints();
  displayPoints();
}

function clickBook3() {
  document.querySelector("#book3_container").removeEventListener("click", clickBook3);
  document.querySelector("#book3_container").classList.add("paused");
  document.querySelector("#book3_container").classList.add("zoom_in");
  document.querySelector("#book3_container").addEventListener("animationend", Book3Gone);
  incrementPoints();
  displayPoints();
}








// point ui 
//Funktioner vi laver som øvelse i timen
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
  document.querySelector("#point_count").textContent =points;
}
function decrementPoints() {
  points -= 1;
  console.log(points);
  displayPoints();
}

} 
