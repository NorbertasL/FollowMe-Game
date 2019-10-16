let gameLvl = 5;
let userTurn = false;
let sequance = [];
let computerSequance = [];

let stopGameLoop = false;

let timeStamp;

const START_BTN_TXT = ["Start", "Reset"]

//ID's and original colour
const  RED_ID = ["#game_btn_red", "red"];
const  GREEN_ID = ["#game_btn_green", "green"];
const  YELLOW_ID = ["#game_btn_yellow", "yellow"];
const  BLUE_ID = ["#game_btn_blue", "blue"];
//Making sure document has loaded
$(document).ready(function(){
  $("#game_btn_start").mousedown(function(){
    console.log("Start btn clicked");
    let btn_txt = $("#game_btn_start > text").text();

    //Toggle between btn text
    $("#game_btn_start > text").text(
      ()=>(btn_txt == START_BTN_TXT[0] ?  START_BTN_TXT[1] : START_BTN_TXT[0]));

    timeStamp = Date.now();


    //Make the button stant and stop(reset too) the game
    if(btn_txt  == START_BTN_TXT[0]){
      stopGameLoop = false;
      requestAnimationFrame(gameLoop);
    }else{
      stopGameLoop = true;
      resetGame();
    }


  });

  //Button click CallBack functions
  $("#game_btn_red").mousedown(function(){
    if(userTurn){
      pressButton(1)
    }
  });
  $("#game_btn_green").mousedown(function(){
    if(userTurn){
      pressButton(2)
    }
  });
  $("#game_btn_yellow").mousedown(function(){
    if(userTurn){
      pressButton(3)
    }
  });
  $("#game_btn_blue").mousedown(function(){
    if(userTurn){
      pressButton(4)
    }
  });

  //Release function
  $("#game_btn_red").on("mouseup mouseleave", function(){
    releaseButton(1)
  });
  $("#game_btn_green").on("mouseup mouseleave", function(){
    releaseButton(2)
  });
  $("#game_btn_yellow").on("mouseup mouseleave", function(){
    releaseButton(3)
  });
  $("#game_btn_blue").on("mouseup mouseleave", function(){
    releaseButton(4)
  });

});


//Makes button glow
function btnGlow(btnID){
  //DEBUG
  console.log("Glow on "+btnID);
  $(btnID).animate({svgFill:"white"}, 100);

}

function btnReset(btnID, orginialColour){
  //DEBUG
  console.log("Glow off "+btnID);
  $(btnID).animate({svgFill:orginialColour}, 50);
}

//Main game loop
function gameLoop(){
  console.log("Game loop called");

  if(stopGameLoop){
    console.log("Stoping gameLoop");
    return;
  }

  if(sequance.length == 0){
    for(i=sequance.length; i<gameLvl; i++){
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
  sequance = [];
}
function playPattern(){
  if(computerSequance.length == 0 ){
    computerSequance = sequance.slice();
  }
  let ts = Date.now();

  //if 1 sec has pased since last timestamp
  if(ts-timeStamp > 1000){
    //releaseButton("all");
    timeStamp = ts;
    let btn = computerSequance.shift();
    pressButton(btn);

    //Releasing btn after delay
    setTimeout(function(){releaseButton(btn)},700);
    if(computerSequance.length == 0){
      //The sequance has been played, so its the user turn
      userTurn = true;
    }
  }
}

function pressButton(button){
  let redSound = new Audio("assets/sounds/Red.flac");
  let greenSound = new Audio("assets/sounds/Green.flac");
  let yellowSound = new Audio("assets/sounds/Yellow.flac");
  let blueSound = new Audio("assets/sounds/Blue.flac");
  switch(button) {
  case 1://Red
    redSound.play();
    btnGlow(RED_ID[0])
    break;
  case 2://Green
    greenSound.play();
    btnGlow(GREEN_ID[0])
    break;
  case 3://Yello
    yellowSound.play();
    btnGlow(YELLOW_ID[0])
    break;
  case 4://Blue
    blueSound.play();
    btnGlow(BLUE_ID[0])
    break;
  }
}

function releaseButton(button){
  switch(button) {
  case 1://Red
    btnReset(RED_ID[0], RED_ID[1])
    break;
  case 2://Green
    btnReset(GREEN_ID[0],GREEN_ID[1])
    break;
  case 3://Yello
    btnReset(YELLOW_ID[0], YELLOW_ID[1])
    break;
  case 4://Blue
    btnReset(BLUE_ID[0], BLUE_ID[1])
    break;
  }
}
