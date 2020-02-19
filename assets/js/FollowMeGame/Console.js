export default class Console {
  constructor(canvasWidth, canvasHeight){
    this.gameWidth = canvasWidth;
    this.gameHeight = canvasHeight;
    this.radius = this.gameHeight/2 - 20;

    //Loading btn images
    this.mainBtn = {
      start_normal:new Image(),
      start_pressed:new Image(),
      restart_normal:new Image(),
      restart_pressed:new Image()
    }
    this.mainBtn.start_normal.src = "assets/js/FollowMeGame/img/start_btn.png";
    this.mainBtn.start_pressed.src = "assets/js/FollowMeGame/img/start_btn_pressed.png";
    this.mainBtn.restart_normal.src = "assets/js/FollowMeGame/img/restart_btb.png";
    this.mainBtn.restart_pressed.src = "assets/js/FollowMeGame/img/restart_btn_pressed.png";

    //Innitialising btn states
    this.mainBtn = this.mainBtn.start_normal;



  }

  draw(ctx){

    ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    //Outer console ring
    ctx.beginPath();
    ctx.arc(this.gameWidth/2, this.gameHeight/2, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.closePath();
    ctx.stroke();


    //Green
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(this.gameWidth/2, this.gameHeight/2);
    ctx.arc(this.gameWidth/2, this.gameHeight/2, this.radius-10, 1.5*Math.PI, 0);
    ctx.fillStyle = "green";
    ctx.closePath();
    ctx.fill();

    //Yellow
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(this.gameWidth/2, this.gameHeight/2);
    ctx.arc(this.gameWidth/2, this.gameHeight/2, this.radius-10, 0, 0.5*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.closePath();
    ctx.fill();

    //Blue
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(this.gameWidth/2, this.gameHeight/2);
    ctx.arc(this.gameWidth/2, this.gameHeight/2, this.radius-10, 0.5*Math.PI, Math.PI );
    ctx.fillStyle = "blue";
    ctx.closePath();
    ctx.fill();

    //Red
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(this.gameWidth/2, this.gameHeight/2);
    ctx.arc(this.gameWidth/2, this.gameHeight/2, this.radius-10, Math.PI, 1.5*Math.PI );
    ctx.fillStyle = "red";
    ctx.closePath();
    ctx.fill();

    //Inner(manu) Console
    let mainConsolePos = {
      x:this.gameWidth/2,
      y:this.gameHeight/2,
      radius: this.radius/2
    }
    ctx.beginPath();
    ctx.arc(mainConsolePos.x, mainConsolePos.y, mainConsolePos.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.closePath();
    ctx.fill();

    //Manu buttons
    ctx.drawImage(this.mainBtn, mainConsolePos.x-50, mainConsolePos.y+50, 100, 40);




  }

  update(dt){

  }

}
