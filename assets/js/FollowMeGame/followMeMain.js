
const CANVAS_W = 500;
const CANVAS_H = 500;

class Console {
  //let radius = 0;
  //let consoleRadius = 0;
  constructor(canvasW, canvasH){
    this.radius = CANVAS_H/2 - 20;
    //this.consoleRadius = radius;


  }

  draw(ctx){
    //Outer console ring
    ctx.beginPath();
    ctx.arc(CANVAS_W/2, CANVAS_H/2, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.closePath();
    ctx.stroke();


    //Green
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(CANVAS_W/2, CANVAS_H/2);
    ctx.arc(CANVAS_W/2, CANVAS_H/2, this.radius-10, 1.5*Math.PI, 0);
    ctx.fillStyle = "green";
    ctx.closePath();
    ctx.fill();

    //Yellow
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(CANVAS_W/2, CANVAS_H/2);
    ctx.arc(CANVAS_W/2, CANVAS_H/2, this.radius-10, 0, 0.5*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.closePath();
    ctx.fill();

    //Blue
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(CANVAS_W/2, CANVAS_H/2);
    ctx.arc(CANVAS_W/2, CANVAS_H/2, this.radius-10, 0.5*Math.PI, Math.PI );
    ctx.fillStyle = "blue";
    ctx.closePath();
    ctx.fill();

    //Red
    ctx.beginPath();
    //We have to add this, otherwise, it will fill the minimum area needed to fill the arc
    ctx.moveTo(CANVAS_W/2, CANVAS_H/2);
    ctx.arc(CANVAS_W/2, CANVAS_H/2, this.radius-10, Math.PI, 1.5*Math.PI );
    ctx.fillStyle = "red";
    ctx.closePath();
    ctx.fill();

    //Inner Console
    ctx.beginPath();
    ctx.arc(CANVAS_W/2, CANVAS_H/2, this.radius-110, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.closePath();
    ctx.fill();



  }

}


let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");



let gameConsole = new Console(CANVAS_W, CANVAS_H);
gameConsole.draw(ctx);
