import Console from "/assets/js/FollowMeGame/console.js"

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");



let gameConsole = new Console(CANVAS_WIDTH, CANVAS_HEIGHT);
gameConsole.draw(ctx);
