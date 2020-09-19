// classes
export class Invoice {
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
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `nama ${this.client} ${this.amount} ${this.details}`;
    }
}
