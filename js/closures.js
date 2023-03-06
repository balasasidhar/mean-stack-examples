function create() {
  var counter = 0;

  function increment() {
    counter++;
  }

  function decrement() {
    counter--;
  }

  function print() {
    console.log(counter);
  }

  return { increment, decrement, print };
}

var c = create();

c.increment();

c.print();

c.increment();
c.increment();
c.increment();
c.print();

c.decrement();

c.print();
