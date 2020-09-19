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
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// input
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //   console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// when we make an object that specify the type isPerson the properti also should be match
const me = {
    name: "jsdkl",
    age: 39,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hallo", person.name);
};
console.log(greetPerson(me));
