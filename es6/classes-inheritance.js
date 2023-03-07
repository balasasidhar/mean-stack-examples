class Flower {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getName() {
    return this.name;
  }
}

class RoseFlower extends Flower {
  constructor(name, color, isAlive) {
    super(name, color);
    this.isAlive = isAlive;
  }
}

class LillyFlower extends Flower {
  constructor(name, color, isAlive) {
    super(name, color);
    this.isAlive = isAlive;
  }
}

const roseObj = new RoseFlower('Red Rose', 'Red', true);
const lillyObj = new LillyFlower('Small Lillies', 'White', false);

console.log(roseObj);
console.log(roseObj.getName());

console.log(lillyObj);
