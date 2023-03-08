let carsSet = new Set();

carsSet.add('Audi');
carsSet.add('BMW');
carsSet.add('Benz');
carsSet.add('Volks Wagen');

console.log(`Size of the set is ${carsSet.size}`);

carsSet.forEach((value) => console.log(value));

console.log(carsSet.has('Benz'));

carsSet.delete('Benz');
console.log(carsSet.has('Benz'));
