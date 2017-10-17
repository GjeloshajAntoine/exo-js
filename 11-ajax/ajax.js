/*var req = new XMLHttpRequest();
req.onload = function (event) {
  var data=JSON.parse(req.responseText)
  data.forEach(function(element){
    element["score"]=Math.floor(Math.random()*1000);
    console.log(element);
  });
  data.sort(function (a,b) {
    console(a,b);
  });
};
req.open('get', './data.json', true);
req.send();
*/


function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

var nb = [1,2,3,4,5,];
function truc() {
  nb.forEach(function(e){
    console.log(e);
    sleep(2000)
  })
}
truc()

nb.sort(function (a,b) {
  console.log(a,b);
})

console.log("grnbjkdfghkjedgbjejrhkgkh");
