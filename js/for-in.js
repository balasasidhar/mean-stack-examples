var car = {
  name: 'Q3',
  manufacturer: 'Audi',
  color: 'Red',
};

for (const key in car) {
  // to print key
  console.log('Key : ' + key);
  // to print value
  console.log('Value : ' + car[key]);
  console.log('--------------');
}
