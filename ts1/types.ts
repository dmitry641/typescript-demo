const str: string = "hello";
const isLoading: boolean = false; // true
let int: number = 155; // 15.155, 3e10
// int = 'qwe' // Type 'string' is not assignable to type 'number'

// array
const numArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]; // generics

// tuple
const contact: [string, number] = ["john", 321321];

// any
let testVar: any = 25;
testVar = "string";
testVar = [];

// === funcitons

function sayPhrase(phrase: string): void {
  console.log(phrase);
}

function throwError(msg: string): never {
  throw new Error(msg);
}

function infinite(): never {
  let i = 0;
  while (true) {
    i++;
  }
}

// === Type
type Login = string;
const login: Login = "user";
// const login2: Login = 2;

type ID = string | number;
const id1: ID = 123;
const id2: ID = "123";
// const id3: ID = true

type SomeType = string | null | undefined;
