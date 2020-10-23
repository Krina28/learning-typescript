//Interface Implementations
interface IPerson {
    name: string;
    age: number;
    greet: (message: string) => string;
}

class Person implements IPerson {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(message: string): string {
        return "Hello" + message;
    }
}

let p1: IPerson = new Person("Abhijeet", 38);
console.log(p1.greet("Hi"));

let p2: IPerson = new Person("Ramakant", 39);
console.log(p2.greet("Hi"));

//Multiple Interfaces
// Interface can extend other interfaces


// interface IPerson {
//     name: string;
//     age: number;
//     greet: (message: string) => string;
// }

// interface IWork {
//     doWork(): string;
// }

// class Person implements IPerson, IWork {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(message: string): string {
//         return "Hello";
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }
// }

// let p1: Person = new Person("Abhijeet", 38);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());

// ---------------------------------------------- Interface can extend other Interface

interface IPerson1 {
    name: string;
    age: number;
    greet: (message: string) => string;
}

interface IWork {
    doWork(): string;
}

interface ICustomer extends IPerson1, IWork {
    doShopping(): string;
}

class Person1 implements IPerson1, IWork, ICustomer {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(message: string): string {
        return "Hello";
    }

    doWork(): string {
        return "I am learning TypeScript";
    }

    doShopping(): string {
        return "Let's do it online";
    }
}

// let p1: Person = new Person("Abhijeet", 38);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());
// console.log(p1.doShopping());

// let p1: IPerson = new Person("Abhijeet", 38);
// console.log(p1.greet("Hi"));

// let p1: IWork = new Person("Abhijeet", 38);
// console.log(p1.doWork());

let p4: ICustomer = new Person1("Abhijeet", 38);
console.log(p4.greet("Hi"));
console.log(p4.doWork());
console.log(p4.doShopping());

// -------------------------------------------------------------------------- Interface can extend from Class(s)
class Vehicle {
    constructor(public make: string) { }

    getMake() {
        return this.make;
    }
}

class Engine {
    constructor(public manufacturer: string) { }

    getManufacturer() {
        return this.manufacturer;
    }
}

// interface IVehicle {
//     make: string;
//     manufacturer: string;
//     getMake(): string;
//     getManufacturer(): string;
// }

interface IVehicle extends Vehicle, Engine { }

class FourWheeler implements IVehicle {
    make: string;
    manufacturer: string;

    constructor(make = "NA", manufacturer = "NA") {
        this.make = make;
        this.manufacturer = manufacturer;
    }

    getMake(): string {
        throw new Error("Method not implemented.");
    }

    getManufacturer(): string {
        throw new Error("Method not implemented.");
    }
}
