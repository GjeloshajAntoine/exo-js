var langue="es",message="";
if (langue == "fr") {
  message="Bonjour tout le monde";
}
if (langue =="en ") {
  message="Hello world";
}
if (langue =="es") {
  message="hola Mundo";
}
console.log(message);

var score=0,resultat="";
if (score >= 90) {
  resultat="A";
}
if (score<90) {
  resultat="B";
}
if (score <= 50) {
  resultat="C";
}

var truc="machin",amount=2,resultat="";
if (amount >1) {
  resultat=truc+"s";
}else {
  resultat=truc;
}
console.log("je possède ",amount," ",resultat);
