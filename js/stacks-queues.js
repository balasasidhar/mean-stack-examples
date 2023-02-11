var stackOfNumbers = [];

stackOfNumbers.push(1);
stackOfNumbers.push(2);
stackOfNumbers.push(3);

// console.log(stackOfNumbers);

// stackOfNumbers.pop();

// console.log(stackOfNumbers);

var queueOfNumbers = [];

queueOfNumbers.push(10);
queueOfNumbers.push(20);
queueOfNumbers.push(30);

// console.log(queueOfNumbers);

// queueOfNumbers.shift();

// console.log(queueOfNumbers);

var results = queueOfNumbers.concat(stackOfNumbers);

// console.log(results);

const index = stackOfNumbers.findIndex((i) => i === 1);

var results = stackOfNumbers.splice(index, 1);

// console.log('results', results);
// console.log('stackOfNumbers', stackOfNumbers);

// console.log(['a', 'b', 'c'].join('-'));

console.log(queueOfNumbers.find((ele) => ele === 40));
console.log(queueOfNumbers.findIndex((ele) => ele === 40));
