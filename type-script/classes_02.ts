class Person {
  firstName: string = 'Shiva';
  readonly lastName: string = 'Mani';
  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  }
}

const personObj = new Person('Kundhana', 'Sree');

// personObj.lastName = 'Dharani'; --> readonly prop

console.log(personObj);
