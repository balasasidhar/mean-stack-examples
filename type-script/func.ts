function greet(name: string) {
  console.log(`Hello ${name}, Good Evening!`);
}

function getMyLuckyNumber(): number {
  return Math.round(Math.random() * 100);
}

greet('Kundhana');

const luckyNum: number = getMyLuckyNumber();
console.log(`My Lucky number is ${luckyNum}`);
