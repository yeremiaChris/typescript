// classes

class Invoice {
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
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `nama ${this.client} ${this.amount} ${this.details}`;
  }
}

// cara memanggilnya
const invOne = new Invoice("yeremia", "belajar nggak dapat uang", 300);
const invTwo = new Invoice("sama aja", "keren", 23);
// console.log(invOne);
// console.log(invTwo);

// membuat kedalam array
// artinya hanya Invoice class yang bisa masuk kedalam class itu
const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);

// we can change the  value also same as javascript
// invOne.client = "jere";
// invTwo.details = "keren";
// console.log(invOne, invTwo);

// loop
invoices.forEach((inv) => {
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
});
