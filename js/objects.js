/* 
 Using new keyword 
*/
var car = new Object();

car.name = 'Q3';
car.manufacturer = 'Audi';
car.color = 'Black';
car.fuelType = 'Petrol';

car.getName = function () {
  return 'Car Name :' + car.name;
};

car.setName = function (newValue) {
  car.name = newValue;
  return 'Car Name :' + car.name;
};

car.getColor = function () {
  return 'Car color: ' + car.color;
};

delete car.fuelType;

console.log(car);

// console.log('Car Name: ' + car.name);
// console.log('Car Manufacturer: ' + car.manufacturer);
// console.log('Car Color: ' + car.color);

// console.log(car.getName());

/* 
 Using object literal notation
*/

var rose = {
  name: 'rose',
  color: 'red',

  getName: function () {
    return 'This is a ' + this.color + ' ' + this.name;
  },
};

// console.log(rose.getName());
