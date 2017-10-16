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

firstUl=document.getElementsByTagName("ul")[0]
