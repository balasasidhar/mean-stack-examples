const studentSame = 'Shiva';
const collegeName = 'Sasi Edu. Inst.';

const sayHello = () => {
  //   return 'Hello, ' + studentSame + '  welcome to ' + collegeName + '!';
  return `
    Hello ${studentSame},
    Welcome to ${collegeName}!
  `;
};

const message = sayHello();

console.log(message);
