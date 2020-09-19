// we can define a type to be alias
type objNumString = string | number;
let obj: {
  name: objNumString;
  age: number;
};

obj = {
  name: "09",
  age: 2,
};

// FUNCTION
// example 1
let greet: (a: number, b: string) => void;

greet = (age = 2, name = "yere") => {
  console.log(`my name ${name} im ${age} old`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

let logDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };

// logDetails = (language: { name: string; age: number }) => {
logDetails = (language: person) => {
  console.log(`i speak ${language.name} im ${language.age} years old`);
};

// saat kita mau memisahkan file
// kita harus mengatur tsconfig module ke es2015 dan targetnya es6
// di index.htmlnya script tagnya kita beri properti type="module"

// kita juga bisa membuat interface dengan file terpisah
