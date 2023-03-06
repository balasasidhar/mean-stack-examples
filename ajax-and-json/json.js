const jsonData = {
  name: 'Shiva',
  age: 12,
  isLoggedIn: false,
};

console.log(jsonData);

// JS Obj --> String
const jsonDataStr = JSON.stringify(jsonData);
console.log(jsonDataStr);

// String --> JS Obj
const jsObj = JSON.parse(jsonDataStr);
console.log(jsObj);
