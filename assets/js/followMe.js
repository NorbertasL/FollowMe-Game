let gameLvl = 5;
let userTurn = false;
let sequance = [];
let computerSequance = [];

let timeStamp;

//ID's
const  RED_ID = "#game_btn_red";
const  GREEN_ID = "#game_btn_green";
const  YELLOW_ID = "#game_btn_yellow";
const  BLUE_ID = "#game_btn_blue";
//Making sure document has loaded
$(document).ready(function(){
  $("#game_btn_start").on("click", function(){
    console.log("Start btn clicked");
    timeStamp = Date.now();
    requestAnimationFrame(gameLoop);
  });

  //Button click CallBack functions
  $("#game_btn_red").on("click", function(){
    pressButton(1)
  });
  $("#game_btn_green").on("click", function(){
    pressButton(2)
  });
  $("#game_btn_yellow").on("click", function(){
    pressButton(3)
  });
  $("#game_btn_blue").on("click", function(){
    pressButton(4)
  });
});


//Makes button glow
function btnGlow(btnID){
  //DEBUG
  console.log("Cicked on "+btnID);
  let lastColor = $(btnID).attr("fill");
  $(btnID).animate({svgFill:"white"}, 100);
  $(btnID).animate({svgFill:lastColor}, 100);
}

//Main game loop
function gameLoop(){
  console.log("Game loop called");
  if(sequance.length == 0){
    for(i=sequance.length; i<=gameLvl; i++){
      sequance.push(getRandomBtn());
    }
    console.log("sequance:"+sequance);
  }
  if(!userTurn){
    playPattern();
  }else{
    //User turn
  }

  //Calling iteslef again
  requestAnimationFrame(gameLoop);
}
function getRandomBtn(){
  return Math.floor((Math.random() * 4) + 1);
}

function resetGame(){
  userTurn = false;
  needPatter = true;
  sequance = [];
}
function playPattern(){
  if(computerSequance.length == 0 ){
    computerSequance = sequance.slice();
  }
  let ts = Date.now();
  //if 1 sec has pased since last timestamp
  if(ts-timeStamp > 1000){
    timeStamp = ts;
    pressButton(computerSequance.shift());
    if(computerSequance.length == 0){
      //The sequance has been played, so its the user turn
      userTurn = true;
    }
  }
}

function pressButton(button){
  switch(button) {
  case 1://Red
    btnGlow(RED_ID)
    break;
  case 2://Green
    btnGlow(GREEN_ID)
    break;
  case 3://Yello
    btnGlow(YELLOW_ID)
    break;
  case 4://Blue
    btnGlow(BLUE_ID)
    break;
  }
}
//Thank you https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
