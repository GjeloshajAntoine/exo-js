var message="";
var essais=0;
var minVal=20;
var maxVal=80;
var mystère=0;


function randomMinMax(min,max) {
  var rand=Math.random()*100;

  if (rand < min) {
    rand = min;
  }else if (rand > max) {
    rand = max;
  }
  return Math.ceil(rand);
}
function isbon(min,max,mystère){
  console.log(mystère);
  let userInput=prompt("Veilliez entrer un numéro entre ",min," et ",max);
  if (userInput < mystère) {
    essais++;
    alert("C'est plus");
    return false;
  }else if (userInput > mystère) {
    alert("C'est moins");
    essais++;
    return false;
  }else if (userInput == mystère){
    alert("C'est juste tu as trouvé en "+essais+" coups")
    return true;
  }
}

mystère=randomMinMax(minVal,maxVal)
while (!isbon(minVal,maxVal,mystère)) {}
