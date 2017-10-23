var but=['B','O','N','J','O','U','R'];
var guessedletters=['','','','','','',''];
var remainingletter=but.length;
var previouslyWrong=[];
var tentativesRatée=0;

var guessLetter=function () {
    var userInput=prompt("Veillez entrer une lettre");
    if (but.includes(userInput)) {
      if (! guessedletters.includes(userInput)) {
        for (var i = 0; i < but.length; i++) {
          if (but[i]==userInput) {
            guessedletters[i]=userInput;
            remainingletter--;
          }
        }
      }else{
        console.log("vous l'avez déjà trouvée celle la !");
      }
    }else if(previouslyWrong.includes(userInput)){
      console.log("Vous êtes con, vous l'avez déjà essayé celle là , elle marche pas");
      tentativesRatée+=2;
      console.log("et deux tentatives ratée de plus , parce que vous êtes con");
      console.log("ça vous en fait ",tentativesRatée," désormais");
    }else{
      console.log("Oh la lettre n'y est pas :o");
      previouslyWrong.push(userInput);
      tentativesRatée++;
    }

    console.log(guessedletters);
    console.log("remainingletter: ",remainingletter);

    if (remainingletter>0) {
      guessLetter();
    }else{
      alert("Vous avez gagné","<br>","tentativesRatée:",tentativesRatée)
    }
}
