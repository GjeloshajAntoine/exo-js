Character = {
  name:"Gérard",
  age:86,
  items_to_give:["this","that","the stuff"],
}

for (var key in Character) {
    console.log(Character[key]);
}


var shop=[
  {title:"Roger",physic:12,magic:32,minLevel:32,available:true},
  {title:"Gérard",physic:10,magic:32,minLevel:2,available:true},
  {title:"Perso",physic:10,magic:32,minLevel:52,available:false},
  {title:"L'autre type",physic:10,magic:2,minLevel:10,available:true}
]

function afficherObject(tout) {
  for (var i = 0; i < tout.length; i++) {
    console.log(tout[i]);
  }
}

function objectDispo(tout) {
  for (var i = 0; i < tout.length; i++) {
    if (tout[i].available) {
      console.log(tout[i]);
    }
  }
}
function min10(tout) {
  for (var i = 0; i < tout.length; i++) {
    if (tout[i].minLevel >= 10) {
      console.log(tout[i]);
    }
  }
}

afficherObject(shop);
objectDispo(shop);
min10(shop);



var mainCharacter={
  name:"Le perso principal",
  level:30,
  weapon:{
    name:"hache",
    damage:12,
  },
  attack:function () {
    return {name:this.name,weapon:this.weapon.name,damage:this.weapon.damage*this.level}
  },

}
var character={
  name:"Le perso principal",
  level:30,
  life:10,
  weapon:{
    name:"hache",
    damage:12,
  },
  attack:function (attacked) {
    console.log(this.name,"attaque :",attacked.name);
    console.log("avec l'arme : ",this.weapon.name);
    console.log("et lui inflige :",this.level*this.weapon.damage);
    attacked.life=attacked.life-(this.level*this.weapon.damage);
    console.log(attacked.name,"has now : ",attacked.life," life points")
  },
  receiveDamage:function () {

  }
}
var opponentCharacter={};

for (var key in character) {
  opponentCharacter[key]=character[key];
}

opponentCharacter["name"]="Opposant !!!!";
opponentCharacter["level"]=10;
opponentCharacter["life"]=32;
opponentCharacter["weapon"].name="chat"
opponentCharacter["weapon"].damage=13;

var mainCharacter={};
for (var key in character) {
  mainCharacter[key]=character[key];
}

mainCharacter["name"]="Le perso principal";
mainCharacter["level"]=7;
mainCharacter["life"]=21;
mainCharacter["weapon"].name="L'argent"
mainCharacter["weapon"].damage=14;


mainCharacter.attack(opponentCharacter);
