export default class Console {
  constructor(canvasWidth, canvasHeight){
    this.gameWidth = canvasWidth;
    this.gameHeight = canvasHeight;
    this.radius = this.gameHeight/2 - 20;

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

    //Inner Console
    ctx.beginPath();
    ctx.arc(this.gameWidth/2, this.gameHeight/2, this.radius-110, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.closePath();
    ctx.fill();



  }

}
