// ES5 or below
function add(x, y) {
  return x + y;
}

// ES6
const addFunc = (x, y) => x + y;

const result1 = add(10, 20);
const result2 = addFunc(30, 40);

console.log('result1', result1);
console.log('result2', result2);

setInterval(() => {
  const dateObj = new Date();
  console.log(dateObj.toLocaleString());
}, 1000);
