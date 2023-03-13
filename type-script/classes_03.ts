class Employee {
  firstName: string = 'Kundhana';
  private lastName: string = 'Sree';
  protected age: number = 3;
  public isLoggedIn: boolean = true;

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    return this.age;
  }
}

const empObj = new Employee();

console.log(empObj.getFullName());
console.log(empObj.getAge());

// static members

class Base {
  protected static x: number = 10;

  constructor() {
    console.log(Base.x);
  }
}

// console.log(Base.x);
