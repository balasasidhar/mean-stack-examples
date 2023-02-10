/**
 * Labeled statements
 * */

print: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 5; j++) {
    console.log('I: ' + i);
    if (j === 4) {
      console.log('J: ' + j);
      break print;
    }
  }
}
