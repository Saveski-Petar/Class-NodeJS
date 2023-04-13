import { log } from "console";

// boolean
const isDone: boolean = false;
// string
const firstName: string = "Petar";
// number
const number: number = 8;

// Enum
const weekdays = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

// console.log(weekdays);

enum Weekdays {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}
// log(Weekdays.monday);

enum Colors {
  white, // 0
  green, // 1
  yellow, // 2
  red, // 3
}

// log(Colors);
// log(Colors.green === Colors.green);

// option 1
const numbers: number[] = [1, 2, 3];

// option 2
const numbersTwo: Array<number> = [1, 2, 3];

//tuple

const employees: [number, string] = [1, "Petar"];

// any TRY NOT TO USE ANY
const randomStuff: any[] = [true, [], "string", 8];

// Object & interfaces

// interface Animal {
//   name: string;
//   age: number;
// }

// const animal: Animal = {
//   name: "Smth",
//   age: 29,
// };

// const newAnimal = {
//   name: "SmthTwo",
//   age: 29,
// } satisfies Animal;

// types

// type Animal = {
//   name: "SmthThree";
//   age: 29;
// };

// custom types
// type Nullish = undefined | null;

// const nothing: Nullish = null;

// Objects
interface Person {
  name: string;
  age: number;
}

const emptyObject = {} as Person;

//! Dont use this its kinda of workaround
// const test = "black" as any as Person;

interface Employee extends Person {
  job: string;
}

const newEmployee: Employee = {
  name: "John",
  age: 29,
  job: "Smth",
};

// Others

let anything: any = "asds";
let mistery: unknown;

// void
const func = (): void => {
  console.log("Smth");
};

const func2 = (): never => {
  throw new Error("Some Error");
};

const sumOfTwo = (num1: number, num2: number): number => {
  return num1 + num2;
};
// console.log(sumOfTwo(1, 2));

const somOfItems = (
  item1: number | string,
  item2: number | string
): string | number => {
  if (typeof item1 === "number" && typeof item2 === "number") {
    return item1 + item2;
  }
  return `${item1}  ${item2}`;
};
console.log(somOfItems(1, 2));

const someMap: { [key: string]: string } = {
  asdasdsadasdas: "Mockingbird",
};

interface MultiDimensionArray<T> {
  [key: string]: T | MultiDimensionArray<T>;
  length: T;
}

function flatten<T extends number>(
  array: MultiDimensionArray<T>,
  result: T[] = []
): T[] {
  Object.keys(array).forEach((key) => {
    const element = array[key];
    if (Array.isArray(element)) {
      flatten(element as MultiDimensionArray<T>, result);
    } else {
      result.push(element as T);
    }
  });

  return result;
}
const array1: MultiDimensionArray<number> = [];
console.log(flatten(array1));
