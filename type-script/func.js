function greet(name) {
    console.log("Hello ".concat(name, ", Good Evening!"));
}
function getMyLuckyNumber() {
    return Math.round(Math.random() * 100);
}
greet('Kundhana');
var luckyNum = getMyLuckyNumber();
console.log("My Lucky number is ".concat(luckyNum));
