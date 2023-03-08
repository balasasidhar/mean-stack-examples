export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

export function addNumbers(a, b) {
  return a + b;
}

export const PI = 3.14;
