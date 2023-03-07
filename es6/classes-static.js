class Math2 {
  static PI = 3.14;
  static printRandomNumber(baseVal) {
    console.log(Math.round(Math.random() * baseVal));
  }
}

// const mathObj = new Math2();
// mathObj.printRandomNumber();
// mathObj.PI;

console.log(Math2.PI);
Math2.printRandomNumber(100);
