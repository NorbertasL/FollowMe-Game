import Console from "/assets/js/FollowMeGame/console.js"

let canvas;
let gameConsole

export default class Input{
  constructor(can, console){
    canvas = can;
    gameConsole = console;
    canvas.addEventListener("mousedown", this.onMouseDown, false)
  }

  onMouseDown(event){
    var normaliseCoordinate = function(event){
      let bounds = canvas.getBoundingClientRect();
      let scaleX = canvas.width / bounds.width;
      let scaleY = canvas.height / bounds.height;
      return {
        x:(event.clientX-bounds.left)*scaleX,
        y:(event.clientY-bounds.top)*scaleY
      }
    }
    var pos = normaliseCoordinate(event);

    gameConsole.update(pos)

  }

}
