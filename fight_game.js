/**
 * Created by anshaj on 6/28/17.
 */
// Lecture 7 - Prototype

function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " give one life to " + targetPlayer.name)
    }
}

var Anshaj = new User();
var Wendy = new User();

Anshaj.name = "Anshaj";
Wendy.name = "Wendy";

Anshaj.giveLife(Wendy);
console.log("Anshaj" + Anshaj.life);
console.log("Wendy" + Wendy.life);

User.prototype.upperCut = function upperCut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + "just uppercutted " + targetPlayer.name)
};
// You can add fucntoins to all objects
// So using prototype you can add special methods or properties to classes to classes
// Why not do it in the origin function ?


Wendy.upperCut(Anshaj);
console.log("Anshaj " + Anshaj.life);
console.log("Wendy " + Wendy.life);

User.prototype.magic = 60;
console.log(Anshaj.magic);
console.log(Wendy.magic);