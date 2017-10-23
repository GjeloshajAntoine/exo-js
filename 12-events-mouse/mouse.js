var buttonHover=document.getElementsByClassName('hoverMe');
for (button of buttonHover) {
  button.addEventListener("mouseover",function(event){
    this.classList.add("hidden-by-hover");
    console.log(event);
  })
}

var reset=document.getElementById('reset')
reset.addEventListener("click",function () {
  for (button of buttonHover) {
    button.classList.remove("hidden-by-hover");
  }
})

var axeX=document.getElementsByTagName('body');
axeX[0].addEventListener("mousemove",function (event) {
    console.log(event);
    document.getElementById("axe-x").innerHTML="mousemove X:"+event.clientY;
    document.getElementById("axe-y").innerHTML="mousemove Y:"+event.clientX;
})
