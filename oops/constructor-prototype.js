function Person(name, job, dateOfBirth, gender) {
  this.name = name;
  this.job = job;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;

  // private variable
  var title = 'Hello';

  console.log(title);
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getJob = function () {
  return this.job;
};

var p1 = new Person('Sai', 'Frontend Developer', '31-Jan-2000', 'Male');
var p2 = new Person('Sekhar', 'FullStack Developer', '28-Feb-1996', 'Male');

console.log(p1);
console.log(p2);

console.log(p1.getName());
console.log(p2.getName());
