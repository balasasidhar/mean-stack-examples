function Car(name, brand, fuelType) {
  this.name = name;
  this.brand = brand;
  this.fuelType = fuelType;
}

var bmwX1Car = new Car('X1', 'BMW', 'Petrol');
var audiQ3Car = new Car('Q3', 'Audi', 'Petrol');

console.log(bmwX1Car);
console.log(audiQ3Car);
