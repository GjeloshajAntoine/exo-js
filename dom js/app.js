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

}
