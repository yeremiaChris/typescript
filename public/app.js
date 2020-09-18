"use strict";
// classes
var Invoice = /** @class */ (function () {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    //   // public we can access the the amount for all file
    //   // private we can access only inside the class
    //   // readonly artinya kita bisa baca dari luar dan juga didalam   class tapi kita tidak bisa mengubahnya
    //   //   kita harus membuat constructornya setiap kita buat kelas di ts
    //   constructor(a: string, b: string, c: number) {
    //     (this.client = a), (this.details = b), (this.amount = c);
    //   }
    // we can make directly from the constructor without make inside the class it will automaticly be added inside the class
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "nama " + this.client + " " + this.amount + " " + this.details;
    };
    return Invoice;
}());
// cara memanggilnya
var invOne = new Invoice("yeremia", "belajar nggak dapat uang", 300);
var invTwo = new Invoice("sama aja", "keren", 23);
// console.log(invOne);
// console.log(invTwo);
// membuat kedalam array
// artinya hanya Invoice class yang bisa masuk kedalam class itu
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
// we can change the  value also same as javascript
// invOne.client = "jere";
// invTwo.details = "keren";
// console.log(invOne, invTwo);
// loop
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.client, inv.format());
});
// input
// // arti dari tanda seru itu adalah
// // di variable itu akan ada value di index.htmlnya dan tidak akan bernilai null jadi tidak usah di buat error nya
// atau simpelnya tanda seru itu berarti bahwa link itu ada di project kita tidak akan null
// const link = document.querySelector("a")!;
// console.log(link.href);
// kita harus mendefiniskan variabel yang kita dom kan itu
// karena ts taunya form itu adalah sebuah element karena kita menangkap menggunakan kelas yang artinya bisa kita letak di mana saja
var form = document.querySelector(".new-item-form");
// console.log(form.children);
// input
var type = document.querySelector("#type");
var toForm = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //   console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
