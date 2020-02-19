import Console from "/assets/js/FollowMeGame/console.js"
import Input from "/assets/js/FollowMeGame/input.js"

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

//canvas size
const CANVAS_SIZE = 500;
//setting size in css
canvas.style.width = CANVAS_SIZE + "px";
canvas.style.height = CANVAS_SIZE + "px";


//If i dont do this the images/lines and text are blurry
//Got this solution https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
// Set actual size in memory (scaled to account for extra pixel density).
 var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
 canvas.width = CANVAS_SIZE * scale;
 canvas.height = CANVAS_SIZE * scale;


let gameConsole = new Console(canvas.width, canvas.height, ctx);
debug(canvas, "");
let input = new Input(canvas, gameConsole);

let lastTime = 0;
function gameLoop(timeStamp){
  let dt = timeStamp -lastTime;
  lastTime = timeStamp;

  //gameConsole.update(dt);
  gameConsole.draw(ctx);




  requestAnimationFrame(gameLoop);
}
gameLoop();
