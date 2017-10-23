var body=document.getElementsByTagName("body")[0];
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");

var paragraph=document.getElementById("first-paragraph");
paragraph.classList.remove("bg-lime")
paragraph.classList.remove("gray");
paragraph.classList.add("aqua");

var bgSilvers=document.getElementsByClassName('bg-silver')[0];
bgSilvers.classList.add("bg-teal");
bgSilvers.classList.remove("bg-lime");

var quote =document.getElementsByTagName("blockquote")[0];
quote.classList.add("bg-white");

// part 2
var table = document.querySelector("#my-table");
table.classList.add("bg-purple");

var paragraphes = document.querySelectorAll(".container p");
for (para of paragraphes) {
  para.classList.add("shadow");
}


//part 3

var pretag=document.getElementsByTagName("pre")

for (pre of pretag) {
  pre.style.color="pink";
  pre.style.backgroundColor="cyan";
  pre.style.borderTop="3px solid red";
  pre.style.borderBottom="3px solid red";
}
var h3=document.getElementsByTagName("h3")[0]
h3.innerHTML="<em>Itelic title ! yeah !</em>";

var h2=document.getElementsByTagName("h2")[0]
h2.innerHTML="<strong>HTML doens't work !</strong>";



//part4

firstUl=document.getElementsByTagName("ul")[0];
var li = document.createElement("li");
li.innerHTML="Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
firstUl.append(li);

var lastLi=document.querySelector("ul li:nth-last-child(1)");
var firstA=lastLi.children[0];
firstA.style.color="#EBFF00";

// ex 4
//
// firstOl=document.getElementsByTagName("ol")[0];
// for (var i = 0; i < firstOl.children.length; i++) {
//   firstOl.children[i]
//   console.log(firstOl.children[i]);
//   firstOl.removeChild(firstOl.children[i])
// }

firstOl=document.getElementsByTagName("ol")[0];

while (firstOl.children.length > 0) {
  firstOl.removeChild(firstOl.children[0]);
}


var unTableau=["Silent Teacher","Code Monkey", "CodeCombat"];

for (var i = 0; i < unTableau.length; i++) {
  var unElement=document.createElement("li");
  unElement.innerHTML=unTableau[i];
  firstOl.appendChild(unElement);
}
