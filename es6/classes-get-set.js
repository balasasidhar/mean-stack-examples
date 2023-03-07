class Rectangle {
  constructor(width, height) {
    this.x = width;
    this.y = height;
  }

  set width(widhtVal) {
    this.x = widhtVal;
  }

  get width() {
    return this.x;
  }

  set height(heightVal) {
    this.y = heightVal;
  }

  get height() {
    return this.y;
  }

  get area() {
    return this.x * this.y;
  }
}

const rectObj = new Rectangle(100, 200);

console.log(`Rect width: ${rectObj.width}`);
console.log(`Rect height: ${rectObj.height}`);
console.log(`Area value: ${rectObj.area}`);

rectObj.width = 10;
rectObj.height = 20;

console.log(`\nRect new width: ${rectObj.width}`);
console.log(`Rect new height: ${rectObj.height}`);
console.log(`React new Area value: ${rectObj.area}`);
