for (var i = 0; i < 21; i++) {
  if ((i%2) == 0) {
    console.log(i,"est pair");
  }
}

for (var i = 0; i < 11; i++) {
  console.log(i,"*",9,"=",i*9);
}
for (var i = 0; i < 101; i++) {
  var grade="";
  if (i>90) {
    grade="A";
  }else if (i>80) {
    grade="B";
  }else if (i>70) {
    grade="C";
  }else if (i>65) {
    grade="D";
  }else {
    grade="F";
  }
  console.log("Pour",i,"points vous avez le grade ",grade);
}
function doPoints(i) {
  var points="";
  while (i>0) {
    points=points+"*";
    i--
  }
  return points;
}

for (var i = 0; i <= 5; i++) {
  console.log(doPoints(i));
 }
