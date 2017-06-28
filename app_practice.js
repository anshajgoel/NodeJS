/**
 * Created by anshaj on 6/28/17.
 */
function placeAnOrder(orderNumber) {
    console.log("customer order:", orderNumber);
    cookAndDeliverFood(function () {
        console.log("devivered oder number:", orderNumber);
    })
}

function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

// reference not copy
var anshaj = {
    favGame: "chess",
    favTimePass: "reading"
}

var person  = anshaj;
person.favGame = "foosball";
console.log(anshaj.favGame)

//important question
console.log(19 == '19') //true
console.log(19 === '19') // false as it compares the type along with value.


// This Keyword
// This is a reference to whatever thing is calling it.
var this_anshaj = {
    printFirstName: function () {
        console.log("\nMy name is Anshaj");
        console.log(this === this_anshaj);
    }
};

this_anshaj.printFirstName();

// Here the default context is global
function doSomethingWorthless(){
        console.log("\nI am Worthless");
        console.log(this === global);
}

doSomethingWorthless();