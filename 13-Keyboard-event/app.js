var zeBody=document.getElementsByTagName('body')[0];
var block=document.getElementById('character');

zeBody.addEventListener("keyup", (event)=>{
  console.log("keyup:",event.key,typeof(parseInt(event.key)));
  switch(parseInt(event.key)) {
    case 0:
        block.style.backgroundColor="Yellow";
        break;
    case 1:
        block.style.backgroundColor="LawnGreen ";
        break;
    case 2:
        block.style.backgroundColor="Olive ";
        break;
    case 3:
      block.style.backgroundColor="DarkOrchid";
      break;
    case 4:
        block.style.backgroundColor="DarkKhaki";
        break;
    case 5:
        block.style.backgroundColor="PaleVioletRed";
        break;
    case 6:
      block.style.backgroundColor="DarkSalmon";
      break;
    case 7:
        block.style.backgroundColor="MintCream";
        break;
    case 8:
        block.style.backgroundColor="Salmon";
        break
    case 9:
        block.style.backgroundColor="PeachPuff";
        break;
    default:
        block.style.backgroundColor="Black";
      }
});


var up=document.getElementById('up');
function keyToId(keyName) {
  var res="";
  switch (keyName) {
    case "ArrowUp":
        res="up";
      break;
    case "ArrowLeft":
        res="left";
      break;
    case "ArrowRight":
        res="right";
      break;
    case "ArrowDown":
        res="down";
      break;
    default:
        res=false;
  }
  return res;yellow
}
zeBody.addEventListener("keydown",function (event) {
  highlight(keyToId(event.key));
  //console.log(keyToId(event.key));
})
zeBody.addEventListener("keyup",function (event) {
  console.log(event);
  unHighlight(keyToId(event.key));
})
function highlight(idElement){
  console.log(idElement);
  console.log(document.getElementById(idElement));
  document.getElementById(idElement).classList.add("highlight");
}
function unHighlight(idElement){
  console.log("unHighlight");
  document.getElementById(idElement).classList.remove("highlight");
}
