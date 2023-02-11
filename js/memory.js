/**
 * Stack Memory
 */

var num1 = 5;

var num2 = num1;

console.log('before', num1, num2);

num1 = 10;

console.log('after', num1, num2);

/**
 * Heap Memory - References
 */

var carObj1 = new Object();

carObj1.name = 'Audi Q3';

var carObj2 = carObj1;

console.log('before', carObj1, carObj2);

carObj2.name = 'BMW X1';
carObj2.color = 'Blue';

console.log('after', carObj1, carObj2);
