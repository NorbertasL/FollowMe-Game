export default class Input{
  constructor(canvas){
    this.canvas = canvas;
    this.canvas.addEventListener("mousedown", this.onMouseDown, false)
  }

  onMouseDown(){
    debug("Mouse is down", "Input")
  }

}
