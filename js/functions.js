function sayHello(firstName, lastName) {
  //   function defination

  console.log('Hello ' + firstName + ' ' + lastName + '!');
}

var firstName = 'John';
var lastName = 'Doe';

sayHello(firstName, lastName);

function sumAll() {
  var sum = 0;
  for (var index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  return sum;
}

const results = sumAll(4, 5, 2, 6);
console.log('Result is: ' + results);
