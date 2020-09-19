// // classes

// class Invoice {
//   //   readonly client: string;
//   //   private details: string;
//   //   public amount: number;

//   //   // public we can access the the amount for all file
//   //   // private we can access only inside the class
//   //   // readonly artinya kita bisa baca dari luar dan juga didalam   class tapi kita tidak bisa mengubahnya
//   //   //   kita harus membuat constructornya setiap kita buat kelas di ts
//   //   constructor(a: string, b: string, c: number) {
//   //     (this.client = a), (this.details = b), (this.amount = c);
//   //   }

//   // we can make directly from the constructor without make inside the class it will automaticly be added inside the class
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ) {}

//   format() {
//     return `nama ${this.client} ${this.amount} ${this.details}`;
//   }
// }
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// cara memanggilnya
// const invOne = new Invoice("yeremia", "belajar nggak dapat uang", 300);
// const invTwo = new Invoice("sama aja", "keren", 23);
// // console.log(invOne);
// // console.log(invTwo);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yere", "web", 23);
// docTwo = new Payment("jksd", "fsd", 3);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// membuat kedalam array
// artinya hanya Invoice class yang bisa masuk kedalam class itu
// const invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);

// we can change the  value also same as javascript
// invOne.client = "jere";
// invTwo.details = "keren";
// console.log(invOne, invTwo);

// loop
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.client, inv.format());
// });

// input

// // arti dari tanda seru itu adalah
// // di variable itu akan ada value di index.htmlnya dan tidak akan bernilai null jadi tidak usah di buat error nya
// atau simpelnya tanda seru itu berarti bahwa link itu ada di project kita tidak akan null
// const link = document.querySelector("a")!;
// console.log(link.href);

// kita harus mendefiniskan variabel yang kita dom kan itu
// karena ts taunya form itu adalah sebuah element karena kita menangkap menggunakan kelas yang artinya bisa kita letak di mana saja
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// input
const type = document.querySelector("#type") as HTMLSelectElement;
const toForm = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  //   console.log(type.value, toForm.value, details.value, amount.valueAsNumber);

  let values: [string, string, number];
  values = [toForm.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});

// make an interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
// when we make an object that specify the type isPerson the properti also should be match

const me: IsPerson = {
  name: "jsdkl",
  age: 39,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("hallo", person.name);
};

console.log(greetPerson(me));

// rendering html template
// generik
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "yere", age: 2 });

// console.log(docOne.age);
// kalo begitu akan ada eror karena kita tidak menspesifikasikan objectnya secara explicit

// jadi kita bisa menggunakan generik
// jadi artinya itu apapun yang ada di dalam variabel obj itu harus objek
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yere", age: 2 });

console.log(docOne.age);

// interface
// interface Resource {
//   uid: number;
//   resourceName: string;
//   data: object;
// }

// const docThree: Resource = {
//   uid: 1,
//   resourceName: "yere",
//   data: { name: "keren" },
// };

// jadi kita bisa membuat generik agar kita bisa membuat type apapun

// interface
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const docThree: Resource<String> = {
//   uid: 1,
//   resourceName: "yere",
//   data: "keren",
// };

// const docFour: Resource<string[]> = {
//   uid: 1,
//   resourceName: "yere",
//   data: ["satu", "dua"],
// };

// enums
enum resourcesNames {
  BOOK,
  AUTHOR,
}

interface Resource<T> {
  uid: number;
  resourceName: resourcesNames;
  data: T;
}

const docThree: Resource<String> = {
  uid: 1,
  resourceName: resourcesNames.AUTHOR,
  data: "keren",
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: resourcesNames.BOOK,
  data: ["satu", "dua"],
};
