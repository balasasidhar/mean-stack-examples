enum EXAM_RESULTS {
  PASS = 1,
  FAIL = 0,
}

const student1 = EXAM_RESULTS.PASS;
const student2 = EXAM_RESULTS.FAIL;
const student3 = EXAM_RESULTS.FAIL;
const student4 = EXAM_RESULTS.PASS;

const student5 = 1;

if (student5 === EXAM_RESULTS.PASS) {
  console.log('student5 passed in the exams');
} else if (student5 === EXAM_RESULTS.FAIL) {
  console.log('student5 failed in the exams');
}

console.log(student1);
console.log(student2);
