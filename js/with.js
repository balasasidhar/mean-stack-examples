var car = {
  name: 'Q3',
  manufacturer: 'Audi',
  color: 'Red',
};

// car.name;
// car.manufacturer;
// car.color;

with (car) {
  console.log('Name: ' + name);
  console.log('Manufacturer: ' + manufacturer);
  console.log('Color: ' + color);
}
