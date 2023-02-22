function createPerson(firstName, lastName, age, gender) {
  var obj = new Object();

  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;
  obj.gender = gender;

  obj.greetUser = function () {
    console.log('Hello ' + firstName);
  };

  return obj;
}

var personObj = new createPerson('Shiva', 'Mani', 30, 'Male');
var personObj2 = new createPerson('John', 'Doe', 23, 'Male');

console.log(personObj, personObj2);

personObj.greetUser();
personObj2.greetUser();
