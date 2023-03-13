let personObj: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
  isLogged?: boolean; // ? --> optional prop
};

personObj = {
  firstName: 'Shiva',
  lastName: 'Mani',
  age: 23,
  jobTitle: 'Software Engineer',
};

console.log(personObj);
