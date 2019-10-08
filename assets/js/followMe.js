let gameRunning = false;
let gameLvl = 1;
let userTurn = false;
let needPatter = true;
let sequance = [];
//Making sure document has loaded
$(document).ready(function(){
  $("#game_btn_start").on("click", function(){
    console.log("Start btn clicked");
    resetGame();
    startGame();
  });

  //Button click CallBack functions
  $("#game_btn_red").on("click", function(){
    btnGlow(this);
  });
  $("#game_btn_green").on("click", function(){
    btnGlow(this);
  });
  $("#game_btn_yellow").on("click", function(){
    btnGlow(this);
  });
  $("#game_btn_blue").on("click", function(){
    btnGlow(this);
  });
});


//Makes button glow
function btnGlow(btn){
  //DEBUG
  console.log("Cicked on "+btn.id)
  let lastColor = $(btn).attr("fill");
  $(btn).animate({svgFill:"white"}, 100);
  $(btn).animate({svgFill:lastColor}, 100);
}

//Game start method
function startGame(){
  //Fliping the game state
  gameRunning = !gameRunning;
  gameLoop();

}
//Main game loop
function gameLoop(){
  console.log("Game is running:"+gameRunning);
  if(needPatter){
    sequance.push(getRandomBtn());
    needPatter = false;
    console.log("sequance:"+sequance);
  }

  if(gameRunning){
    //This basicly is a while loop, but more stable
    requestAnimationFrame(gameLoop);
  }
}
function getRandomBtn(){
  return Math.floor((Math.random() * 4) + 1);
}

function resetGame(){
  userTurn = false;
  needPatter = true;
  sequance = [];
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
