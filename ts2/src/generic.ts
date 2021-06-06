const cars1: string[] = ["Ford", "Audi"];
const cars2: Array<string> = ["Ford", "Audi"];

///// const promise: Promise<number> = new Promise()
// const promise = new Promise<string>((resolve) => {
//   setTimeout(() => {
//     resolve("resolved");
//   }, 2000);
// });
// promise.then((data) => {
//   console.log(data.toUpperCase());
// });

// =================

function mergeObjects(a: object, b: object) {
  return Object.assign({}, a, b);
}
// const merged = mergeObjects({ name: "John" }, { age: 30 });
// console.log(merged.name); // Property 'name' does not exist on type '{} & object'.

function mergeObjects2<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b);
}
// const merged = mergeObjects2({ name: "John" }, { age: 30 });
// console.log(merged.name);

// =================

interface ILength {
  length: number;
}
function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `Length = ${value.length}`,
  };
}
// console.log(withCount("hello world"));
// console.log(withCount([1, 2, 3, 4, 5, 6]));
// //// console.log(withCount(25)); // Argument of type 'number' is not assignable to parameter of type 'ILength'.
// console.log(withCount({ length: 150 }));

// =================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: "John",
  age: 25,
};

// console.log(getObjectValue(person, "name"));
// console.log(getObjectValue(person, "age"));
// console.log(getObjectValue(person, "job"));
// // Argument of type '"job"' is not assignable to parameter of type '"name" | "age"'.

// =================

class Collection<T extends number | string | boolean> {
  // private _items: T[] = [];
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item);
  }

  get items(): T[] {
    return this._items;
  }
}

// const strings = new Collection<string>(["q", "w", "e"]);
// strings.add("r");
// strings.remove("w");
// console.log(strings.items);

// const numbers = new Collection<number>([1, 2, 3]);
// numbers.add(4);
// numbers.remove(2);
// console.log(numbers.items);

// // const objs = new Collection<object>([{ a: 1 }, { b: 2 }]);
// // objs.remove({ b: 2 }); // won't be removed
// // console.log(objs.items);

// =================

interface Car {
  model: string;
  year: number;
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {};

  if (model.length > 3) {
    car.model = model;
  }

  if (year > 2000) {
    car.year = year;
  }

  return car as Car;
}

// =================

const cars: Readonly<string[]> = ["Ford", "Audi"];
// cars.shift();

const ford: Readonly<Car> = {
  model: "Ford",
  year: 2020,
};
// ford.model = "Ferrari";
