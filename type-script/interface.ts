interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle?: string; // ? --> optional prop
  isLogged?: boolean;
}

let personObj1: IPerson;

personObj1 = {
  firstName: 'Dharani',
  lastName: 'Kola',
  age: 3,
};

class Human implements IPerson {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle?: string | undefined;
  isLogged?: boolean | undefined;
  canWalk?: boolean;
}
