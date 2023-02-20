var number = 10;

console.log(number);
console.log(String(number));
console.log(number.toString());
console.log('' + number);

var randomFloatingNum = Math.random();

console.log(randomFloatingNum);
console.log(typeof randomFloatingNum.toFixed(2));
console.log(randomFloatingNum.toFixed(2));

var floatingNumStr = '24.8034';

console.log(floatingNumStr);
console.log(Number(floatingNumStr));
console.log(parseInt(floatingNumStr));
console.log(parseFloat(floatingNumStr));

var floatingNum = +floatingNumStr;
console.log(floatingNum);

console.log(Number('myNumber'));
console.log(Number('1234myNumber'));
console.log(parseInt('1234myNumber'));

console.log(Number(''));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(false));
console.log(Number(true));

console.log(Boolean(''));
console.log(Boolean('John'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(1));

console.log('Negative:', Boolean(-14));
