var mot=['B','O','N','J','O','U','R'];
var guessedletters=['','','','','','',''];
var remainingletter=mot.length;

function guessLetter() {
    while (remainingletter > 0) {
      var userInput=prompt("Entrez une lettre");//demande à l'utilisateur d'entrer une lettre et stoque le résultat dans userInput
      userInput=userInput[0];//on prends uniquement la 1ére lettre, on peux utiliser les index sur des String et des Array
      var lettrebonne=false
      for (var i = 0; i < mot.length; i++) {
        if (mot[i]==userInput) {
          remainingletter = remainingletter -1;
          guessedletters[i] = userInput;
          mot[i]='*';
          lettrebonne=true;
        }
      }
      if (lettrebonne) {
        alert("Bonne lettre")
      }else if (isAlreadyGuessed(userInput)) {
        alert("Vous l'avez déjà trouvé celle là ")
      }else{
        alert("mauvaise lettre")
      }
    }
}
guessLetter();

function isAlreadyGuessed(letter) {
  var already=false;
  for (var i = 0; i < guessedletters.length; i++) {
    if (letter == guessedletters[i]) {
      already=true;
    }
  }
  return  already;
}
