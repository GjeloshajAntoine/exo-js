var req = new XMLHttpRequest();
var a=[],b=[],c=[];
var bahrainNbr=0
req.onload = function (event) {
  var data=JSON.parse(req.responseText)
  data.forEach(function(element){
    element["score"]=Math.floor(Math.random()*1000);
  });
  data.sort(function (a,b) {
    return a.score-b.score;
  });
  console.log(data);
  data.forEach(function (j) {
    if (j.score >750) {
      a.push(j);
    }else if (j.score >500) {
      b.push(j);
    }else if (j.score <500) {
      c.push(j);
    }
  });
  data.forEach(function (j) {
    if (j.country =="Bahrain") {
      bahrainNbr++;
    }
  });
  console.log("le plus grand score : ",data[data.length-1].score);
};
req.open('get', 'data.json', true);
req.send();
