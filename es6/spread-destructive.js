/**
 * Spread Operator
 */
const cars = ['BMW', 'Audi', 'Benz'];

const newCars = [...cars, 'Suzuki', 'Mahindra'];

const newCars2 = ['Suzuki', 'Mahindra', ...cars];

console.log(newCars);
console.log(newCars2);

/**
 * Destructive Assignment
 */

// const carBMW = cars[0];
// const carAudi = cars[1];

const [carBMW, carAudi] = cars;

console.log(carBMW);
console.log(carAudi);

const personObj = {
  firstName: 'John',
  lastName: 'Doe',
  jobTitle: 'Full Stack Developer',
  company: 'QuestDot Software India Pvt Ltd',
  city: 'Bengaluru',
};

const {
  firstName = '',
  lastName = '',
  city: cityName = '',
  country = 'India',
} = personObj;

console.log(`Hi, I'm ${firstName} ${lastName} from ${cityName}, ${country}.`);
