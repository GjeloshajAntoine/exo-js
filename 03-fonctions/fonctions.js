var sous=function(a,b) {
  return a+b;
};
var div =function (a,b) {
  return a/b;
}
var multi =function (a,b) {
  return a*b;
}
var pourcent =function (valeur,pourcentage) {
  return (pourcentage/100)*valeur;
}
var vitesse=function (distance,temps) {
  return distance/temps;
}

console.log("resulat:",vitesse(10,2),"km/h");
