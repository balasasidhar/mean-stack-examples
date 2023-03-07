class Person {
  constructor(name, age, jobTitle) {
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
  }
}

const personObj1 = new Person('Shiva', 26, 'JavaScript Developer');

console.log(personObj1);

personObj1.name = 'Sasidhar';
console.log(personObj1.name);
console.log(personObj1.jobTitle);
console.log(personObj1.age);
