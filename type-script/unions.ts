let studentId: number | string = 1;
let isLoggedIn: boolean | number;

studentId = '1A';

isLoggedIn = 1;
isLoggedIn = false;

type Box = {
  width: number;
  height: number;
};

let myBox: Box | number | string | null;

myBox = {
  width: 10,
  height: 1,
};

myBox = 235;

myBox = 'My Box';

myBox = null;
// null
// undefined
