"use strict";
const cars1 = ["Ford", "Audi"];
const cars2 = ["Ford", "Audi"];
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
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
// const merged = mergeObjects({ name: "John" }, { age: 30 });
// console.log(merged.name); // Property 'name' does not exist on type '{} & object'.
function mergeObjects2(a, b) {
    return Object.assign({}, a, b);
}
function withCount(value) {
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
function getObjectValue(obj, key) {
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
class Collection {
    // private _items: T[] = [];
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((i) => i !== item);
    }
    get items() {
        return this._items;
    }
}
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
// =================
const cars = ["Ford", "Audi"];
// cars.shift();
const ford = {
    model: "Ford",
    year: 2020,
};
// ford.model = "Ferrari";
//# sourceMappingURL=generic.js.map