class Employee {
    private _name: string;

    constructor() {
        this._name = "Krina";
    }

    getName() {
        return this._name;
    }

    setName(name: string) {
        return this._name = name;
    }
}

let emp = new Employee();
console.log(emp.getName());
//console.log(emp.name) //If it is private, will not be accessible.

//in ts, you can not create multiple constructors implementation .Not allowed

//Never use function syntax or arrow func in typescript.

// arrow - Lambda syntax or fun expression increase memory utilization.
// getName = () => {
//     return this._name;
//}


// --------------------------------------------------------------------- Property

class Employee1 {
    private _name: string;
    private _age: number;

    constructor(name = "NA", age = 0) {
        this._name = name;
        this._age = age;
    }

    get Name() {
        return this._name;
    }

    set Name(value: string) {
        this._name = value;
    }

    get Age() {
        return this._age;
    }

    set Age(value: number) {
        this._age = value;
    }
}

let e1 = new Employee1("Krina");
console.log(e1.Name);
console.log(e1.Age);
e1.Name = "Jaymin";
e1.Age = 38;
console.log(e1.Name);
console.log(e1.Age);

//Parameter property/Parameter Member let us create and initialize member variables in one place. 
//It is a shorthand for creating member variables

//angular uses this syntax for dependency injection.
class Employee2 {
    // private _name: string;
    // private _age: number;

    // constructor(name = "NA", age = 0) {
    //     this._name = name;
    //     this._age = age;
    // }

    constructor(private _name = "NA", private age = 0) { }
}

//---------------------------------- Static Members
//Static is shared all across. not accessible using this. 
//it is accessible using class only.
//there is no0 static constructor available. 
//  static data members - sharing data across all instances. instead of storing with all instances. 
//it reduces memory utilization as value will be stored at one place only - class level, not with all instances. 

// class BankAccount {
//     constructor(private _accName: string, private _bankName: string) { }

//     get BankName(): string {
//         return this._bankName;
//     }

//     set BankName(value: string) {
//         this._bankName = value;
//     }

//     get AccountHolderName(): string {
//         return this._accName;
//     }
// }

// var a1 = new BankAccount("Manish", "ICICI");
// console.log(a1);
// console.log("Bank Name:", a1.BankName);
// console.log("Account Holder Name:", a1.AccountHolderName);

// var a2 = new BankAccount("Abhijeet", "ICICI");
// console.log(a2);
// console.log("Bank Name:", a2.BankName);
// console.log("Account Holder Name:", a2.AccountHolderName);

class BankAccount {
    // private static _bankName: string
    private static _bankName = "HDFC";

    constructor(private _accName: string) { }

    get BankName(): string {
        return BankAccount._bankName;
    }

    static set BankName(value: string) {
        BankAccount._bankName = value;
    }

    get AccountHolderName(): string {
        return this._accName;
    }
}

// BankAccount.BankName = "ICICI";

var a1 = new BankAccount("Manish");
console.log(a1);
console.log("Bank Name:", a1.BankName);
console.log("Account Holder Name:", a1.AccountHolderName);

var a2 = new BankAccount("Abhijeet");
console.log(a2);
console.log("Bank Name:", a2.BankName);
console.log("Account Holder Name:", a2.AccountHolderName);

//------------------------------------------- readOnly 
class BankAccount1 {
    // private static _bankName: string
    private static _bankName = "HDFC";

    constructor(private readonly _accNumber: number, private _accName: string) { }
    //accnum assignment will not be allowed as it is read only property.

    get BankName(): string {
        return BankAccount1._bankName;
    }

    static set BankName(value: string) {
        BankAccount1._bankName = value;
    }

    get AccountHolderName(): string {
        return this._accName;
    }

    get AccountNumber(): number {
        // this._accNumber = 100;  // Error: Cannot assign to '_accNumber' because it is a read-only property.
        return this._accNumber;
    }
}

BankAccount1.BankName = "ICICI";

var a3 = new BankAccount1(1, "Krina");
console.log("Bank Name:", a3.BankName);
console.log("Account Number:", a3.AccountNumber);
console.log("Account Holder Name:", a3.AccountHolderName);

var a4 = new BankAccount1(2, "Jaymin");
console.log("Bank Name:", a4.BankName);
console.log("Account Number:", a4.AccountNumber);
console.log("Account Holder Name:", a4.AccountHolderName);