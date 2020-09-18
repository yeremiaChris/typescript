"use strict";
// explicit type
var character;
var age;
var isLoggedIn;
// so when we create a new value from that variabel,the value with the type of variable should be match
// example:
age = 30;
// error: because the character variable type is string.
// character = 2;
// isLoggedIn = 25;
isLoggedIn = false;
// arrays
var pacar;
// when we add the value the variable value should be string
pacar = ["qq", "sld", "ran", "wd"];
// console.log(pacar);
// when we use a push method we should make a empty array
var language = [];
language.push("english");
// union types or mixed
// let mix: ([] | number | string | {})[] = [];
var mix = [];
// mix.push(["keren"]);
mix.push(90);
// mix.push({ name: "qq" });
mix.push("keren");
mix.push(["keren"]);
mix.push({ name: "qq" });
var uid;
uid = "ke";
uid = 2;
// object
var ninjaOne;
ninjaOne = {
    name: "ke",
    age: 2,
};
var ninjaTwo;
ninjaTwo = {
    name: "jere",
    age: 3,
    beltColour: "black",
};
// any
// so this variable we can use for anytypes of variable eventhough we have defined the value
// example:
var keren = "jere";
// bisa di ubah
keren = 23;
console.log(keren);
keren = "qq";
console.log(keren);
var macam = [];
macam.push("keren");
macam.push(3);
macam.push({ name: "keren" });
macam.push(["keren", 3]);
console.log(macam);
// when we declare the type we should use a colon not an equal
var kura;
kura = {
    name: "keren",
    age: "banget",
};
console.log(kura);
// workflow and  tscconfig
// first we create a public folder for the html and js file
// we create a folder also for typescript name as src
// after that we initialize with command tsc --init
// we change the rootdir: './src'
// we change the outdir: './public'
// jadi apapun yang di compile di src directory akan langsung masuk ke public directory
// cara runnya ketik terminal tsc -w
// tapi kalo kita buat file ts di luar src maka dia akan terikut tercompile
// oleh karena itu kita tambahkan di tsconfig.jsonnya "include": ['src']
// function
var greet;
greet = function (a, b) {
    return a + b;
};
console.log(greet(10, 10));
// make an optional
var func = function (a, b, c) {
    if (c === void 0) { c = 4; }
    console.log(a + b);
    console.log(c);
};
func(10, 8, "keren");
