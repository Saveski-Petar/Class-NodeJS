"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// boolean
const isDone = false;
// string
const firstName = "Petar";
// number
const number = 8;
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
var Weekdays;
(function (Weekdays) {
    Weekdays["monday"] = "Monday";
    Weekdays["tuesday"] = "Tuesday";
    Weekdays["wednesday"] = "Wednesday";
    Weekdays["thursday"] = "Thursday";
    Weekdays["friday"] = "Friday";
    Weekdays["saturday"] = "Saturday";
    Weekdays["sunday"] = "Sunday";
})(Weekdays || (Weekdays = {}));
// log(Weekdays.monday);
var Colors;
(function (Colors) {
    Colors[Colors["white"] = 0] = "white";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["yellow"] = 2] = "yellow";
    Colors[Colors["red"] = 3] = "red";
})(Colors || (Colors = {}));
// log(Colors);
// log(Colors.green === Colors.green);
// option 1
const numbers = [1, 2, 3];
// option 2
const numbersTwo = [1, 2, 3];
//tuple
const employees = [1, "Petar"];
// any TRY NOT TO USE ANY
const randomStuff = [true, [], "string", 8];
const emptyObject = {};
const newEmployee = {
    name: "John",
    age: 29,
    job: "Smth",
};
// Others
let anything = "asds";
let mistery;
// void
const func = () => {
    console.log("Smth");
};
const func2 = () => {
    throw new Error("Some Error");
};
const sumOfTwo = (num1, num2) => {
    return num1 + num2;
};
// console.log(sumOfTwo(1, 2));
const somOfItems = (item1, item2) => {
    if (typeof item1 === "number" && typeof item2 === "number") {
        return item1 + item2;
    }
    return `${item1}  ${item2}`;
};
console.log(somOfItems(1, 2));
const someMap = {
    asdasdsadasdas: "Mockingbird",
};
function flatten(array, result = []) {
    Object.keys(array).forEach((key) => {
        const element = array[key];
        if (Array.isArray(element)) {
            flatten(element, result);
        }
        else {
            result.push(element);
        }
    });
    return result;
}
const array1 = [];
console.log(flatten(array1));
