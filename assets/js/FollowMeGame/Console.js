let gameCenter, radius, mainBtn, gameWidth, gameHeight, settinsConsolePos;

//Start of Clickable objects
const GREEN = new Path2D();
const YELLOW = new Path2D();
const BLUE = new Path2D();
const RED = new Path2D();

//End of clicable objects

export default class Console {
  constructor(canvasWidth, canvasHeight){
    gameWidth = canvasWidth;
    gameHeight = canvasHeight;
    gameCenter = {
      x:canvasWidth/2,
      y:canvasHeight/2
    }
    radius = gameHeight/2 - 20;

    settinsConsolePos = {
      x:gameCenter.x,
      y:gameCenter.y,
      radius: radius/2
    }

    //Loading btn images
    mainBtn = {
      start_normal:new Image(),
      start_pressed:new Image(),
      restart_normal:new Image(),
      restart_pressed:new Image(),
      x:settinsConsolePos.x-50,
      y:settinsConsolePos.y+50,
      w:100,
      h:40
    }
    mainBtn.start_normal.src = "assets/js/FollowMeGame/img/start_btn.png";
    mainBtn.start_pressed.src = "assets/js/FollowMeGame/img/start_btn_pressed.png";
    mainBtn.restart_normal.src = "assets/js/FollowMeGame/img/restart_btb.png";
    mainBtn.restart_pressed.src = "assets/js/FollowMeGame/img/restart_btn_pressed.png";







  }

  draw(ctx){
    this.ctx = ctx;
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    //Outer console ring
    ctx.beginPath();
    ctx.arc(gameCenter.x, gameCenter.y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.closePath();
    ctx.stroke();


    //Green
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc

    GREEN.moveTo(gameCenter.x, gameCenter.y);
    GREEN.arc(gameCenter.x, gameCenter.y, radius-10, 1.5*Math.PI, 0);
    ctx.fillStyle = "green";
    ctx.closePath();
    ctx.fill(GREEN);

    //Yellow
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    YELLOW.moveTo(gameCenter.x, gameCenter.y);
    YELLOW.arc(gameCenter.x, gameCenter.y, radius-10, 0, 0.5*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.closePath();
    ctx.fill(YELLOW);

    //Blue
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(gameCenter.x, gameCenter.y);
    ctx.arc(gameCenter.x, gameCenter.y, radius-10, 0.5*Math.PI, Math.PI );
    ctx.fillStyle = "blue";
    ctx.closePath();
    ctx.fill();

    //Red
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(gameCenter.x, gameCenter.y);
    ctx.arc(gameCenter.x, gameCenter.y, radius-10, Math.PI, 1.5*Math.PI );
    ctx.fillStyle = "red";
    ctx.closePath();
    ctx.fill();

    //Inner(manu) Console
    ctx.beginPath();
    ctx.arc(settinsConsolePos.x, settinsConsolePos.y, settinsConsolePos.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.closePath();
    ctx.fill();

    //Manu buttons
    ctx.drawImage(mainBtn.start_normal, mainBtn.x , mainBtn.y, mainBtn.w, mainBtn.h);




  }

  update(pos){

    if(this.ctx.isPointInPath(GREEN, pos.x, pos.y)){
      debug("GREEN", "")
    }
    if(this.ctx.isPointInPath(YELLOW, pos.x, pos.y)){
      debug("YELLOW", "")
    }

  }


}
