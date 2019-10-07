
//Making sure document has loaded
$(document).ready(function(){
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
  $(btn).animate({svgFill:"white"}, 200);
  $(btn).animate({svgFill:lastColor}, 100);

}
