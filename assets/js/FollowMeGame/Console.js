let gameCenter, radius, mainBtn, gameWidth, gameHeight;
export default class Console {
  constructor(canvasWidth, canvasHeight){
    gameWidth = canvasWidth;
    gameHeight = canvasHeight;
    gameCenter = {
      x:canvasWidth/2,
      y:canvasHeight/2
    }
    radius = gameHeight/2 - 20;

    //Loading btn images
    mainBtn = {
      start_normal:new Image(),
      start_pressed:new Image(),
      restart_normal:new Image(),
      restart_pressed:new Image()
    }
    mainBtn.start_normal.src = "assets/js/FollowMeGame/img/start_btn.png";
    mainBtn.start_pressed.src = "assets/js/FollowMeGame/img/start_btn_pressed.png";
    mainBtn.restart_normal.src = "assets/js/FollowMeGame/img/restart_btb.png";
    mainBtn.restart_pressed.src = "assets/js/FollowMeGame/img/restart_btn_pressed.png";

    //Innitialising btn states
    mainBtn = mainBtn.start_normal;





  }

  draw(ctx){

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
    ctx.moveTo(gameCenter.x, gameCenter.y);
    ctx.arc(gameCenter.x, gameCenter.y, radius-10, 1.5*Math.PI, 0);
    ctx.fillStyle = "green";
    ctx.closePath();
    ctx.fill();

    //Yellow
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(gameCenter.x, gameCenter.y);
    ctx.arc(gameCenter.x, gameCenter.y, radius-10, 0, 0.5*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.closePath();
    ctx.fill();

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
    let mainConsolePos = {
      x:gameCenter.x,
      y:gameCenter.y,
      radius: radius/2
    }
    ctx.beginPath();
    ctx.arc(mainConsolePos.x, mainConsolePos.y, mainConsolePos.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.closePath();
    ctx.fill();

    //Manu buttons
    ctx.drawImage(mainBtn, mainConsolePos.x-50, mainConsolePos.y+50, 100, 40);




  }

  update(pos){
    //Checking if we are inside the console

    let dx = pos.x - gameCenter.x;
    let dy = pos.y - gameCenter.y;
    let dist = Math.sqrt(dx*dx+dy*dy)
    if(dist < radius){
      debug("Inside main console", "Console.update")
    }else{
      debug("Outside main console", "Console.update")
    }

  }

}
