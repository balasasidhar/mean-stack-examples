function Person() {}

Person.prototype.name = 'Shiva Mani';
Person.prototype.greet = function () {
  console.log('Hello ', this.name);
};

var p1 = new Person();
var p2 = new Person();
var p3 = new Person();

console.log(p1.name);
console.log(p2.name);
console.log(p3.name);

p1.name = 'John Doe';
p2.name = 'Sai Ram';
p3.name = 'Sekhar';

console.log(p1.name);
console.log(p2.name);
console.log(p3.name);
