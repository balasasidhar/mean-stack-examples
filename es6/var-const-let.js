// var --> global scope or functional scope
// let --> block scope
// const --> block scope

var globalName = 'This is from globalScope';

function testFunc() {
  //   function scope ends here
  var funcName = 'This is from functionalScope';
  let funcName2 = 'This is from functionalScope 2';

  if (true) {
    //   block scope begins here
    let blockName = 'This is from blockScope';
    const constBlockScope = 'This is a constant from blockScope';

    blockName = " It's My Name";

    constBlockScope = "You can't change this";

    console.log('if: ', globalName);
    console.log('if: ', funcName);
    console.log('if: ', blockName);
    console.log('if: ', constBlockScope);
    //   block scope ends here
  }
  console.log('testFunc: ', globalName);
  console.log('testFunc: ', funcName);
  //   console.log('testFunc: ', blockName);
  //   console.log('testFunc: ', constBlockScope);

  //   function scope ends here
}

testFunc();

console.log(globalName);
// console.log(funcName);
// console.log(blockName);
// console.log(constBlockScope);
