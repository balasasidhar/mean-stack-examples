const add = (a = 0, b = 0) => {
  return a + b;
};

const sumAll = (a = 0, b = 0, ...nums) => {
  console.log(nums);
  let sum = 0 + a + b;
  nums.forEach((val) => (sum += val));
  return sum;
};

console.log(add());

console.log(sumAll(1, 2, 3, 4, 5, 6));
