
//Making sure document has loaded
$(document).ready(function(){
  window.requestAnimationFrame(loop);
});

const CLASS_NAME = "followMeMain.js"

//Game Settings
const MAX_GLOW_TIME = 1000;
// TODO: tie it to a btn and make use of it
let soundOn = true;

//Colour button sounds
let redSound = new Audio("assets/sounds/Red.flac");
let greenSound = new Audio("assets/sounds/Green.flac");
let yellowSound = new Audio("assets/sounds/Yellow.flac");
let blueSound = new Audio("assets/sounds/Blue.flac");


let redTimeStamp = -1;
let greenTimeStamp = -1;
let yellowTimeStamp = -1;
let blueTimeStamp = -1;

//ID's and original colour
const  RED_ID = ["#game_btn_red", "red"];
const  GREEN_ID = ["#game_btn_green", "green"];
const  YELLOW_ID = ["#game_btn_yellow", "yellow"];
const  BLUE_ID = ["#game_btn_blue", "blue"];




let userTurn = true;
let lastFrameTimeMs = 0;

function loop(){
  lastFrameTimeMs = Date.now();
  update();
  window.requestAnimationFrame(loop);
}
function update(){
  input();
  stopGlow()
}
//User input
function input(delta){
  $("#game_btn_start").click(function(){
    debug("Start", CLASS_NAME);

  });
  $("#game_btn_sound").click(function(){
    debug("Sound", CLASS_NAME);
  });
  if(userTurn){//Only checking colour click if it's the users turn
    $("#game_btn_red").click(function(){
      debug("RED", CLASS_NAME);
      glow(RED_ID)
      redSound.play();
    });
    $("#game_btn_green").click(function(){
      debug("GREEN", CLASS_NAME);
      glow(GREEN_ID)
      greenSound.play();
    });
    $("#game_btn_yellow").click(function(){
      debug("YELLOW", CLASS_NAME);
      glow(YELLOW_ID)
      yellowSound.play();
    });
    $("#game_btn_blue").click(function(){
      debug("BLUE", CLASS_NAME);
      glow(BLUE_ID)
      blueSound.play();
    });
  }
}
function glow(btn){
  $(btn[0]).css({fill:"white"});
  if(btn === RED_ID){
    redTimeStamp = Date.now();
  }else if (btn === GREEN_ID) {
    greenTimeStamp = Date.now();
  }else if (btn === YELLOW_ID) {
    yellowTimeStamp = Date.now();
  }else if (btn === BLUE_ID) {
    blueTimeStamp = Date.now();
  }

}
function stopGlow(){
  if(redTimeStamp > 0){
    if(lastFrameTimeMs - redTimeStamp > MAX_GLOW_TIME){
      redTimeStamp = -1;
      debug("Reseting red btn", CLASS_NAME)
      $(RED_ID[0]).css({fill:RED_ID[1]});
    }
  }
  if(greenTimeStamp > 0){
    if(lastFrameTimeMs - greenTimeStamp > MAX_GLOW_TIME){
      greenTimeStamp = -1;
      debug("Reseting green btn", CLASS_NAME)
      $(GREEN_ID[0]).css({fill:GREEN_ID[1]});
    }
  }
  if(yellowTimeStamp > 0){
    if(lastFrameTimeMs - yellowTimeStamp > MAX_GLOW_TIME){
      yellowTimeStamp = -1;
      debug("Reseting yellow btn", CLASS_NAME)
      $(YELLOW_ID[0]).css({fill:YELLOW_ID[1]});
    }
  }
  if(blueTimeStamp > 0){
    if(lastFrameTimeMs - blueTimeStamp > MAX_GLOW_TIME){
      blueTimeStamp = -1;
      debug("Reseting blue btn", CLASS_NAME)
      $(BLUE_ID[0]).css({fill:BLUE_ID[1]});
    }
  }

}
