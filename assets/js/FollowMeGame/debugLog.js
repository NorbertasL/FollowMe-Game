const DEBUG = true;

function debug(text, callerClass){
  if(DEBUG){
    console.log(callerClass+":"+text);
  }
}
function warning(text, callerClass){
  console.log(callerClass+":"+text);
}
function error(text, callerClass){
  console.log(callerClass+":"+text);
}
