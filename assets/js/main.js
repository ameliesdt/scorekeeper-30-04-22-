//console.log("it works");
//GENERAL
const scoreHomeElem = document.querySelector("#scoreHome");
let scoreHome = 0;
const scoreAwayElem=document.querySelector("#scoreAway");
let scoreAway = 0;
let resetButton =document.querySelector("#reset");

//buttons Home
function plusone() {
    scoreHome += 1;
    scoreHomeElem.innerHTML = scoreHome;
  };

  function plustwo() {
    scoreHome += 2;
    scoreHomeElem.innerHTML = scoreHome;
  };

  function plusthree() {
    scoreHome += 3;
    scoreHomeElem.innerHTML = scoreHome;
  };

  //buttons Away
  function plusOneAway() {
      scoreAway += 1;
      scoreAwayElem.innerHTML = scoreAway;
  };

  function plusTwoAway() {
    scoreAway += 2;
    scoreAwayElem.innerHTML = scoreAway;
};

function plusThreeAway() {
    scoreAway += 3;
    scoreAwayElem.innerHTML = scoreAway;
};


function reset() {
    scoreHome =0;
    scoreAway =0;
    scoreHomeElem.innerHTML = scoreHome;
    scoreAwayElem.innerHTML = scoreAway;
};



