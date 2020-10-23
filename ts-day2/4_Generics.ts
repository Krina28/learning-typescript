// Generics allows you to create a component that can work over a variety of types 
// rather than a single one, without loosing type safety and intellisense

// let arr = new Array<number>();

// class Queue {
//     private _data: number[] = [];

//     push(d: number) {
//         this._data.push(d);
//     }

//     pop(): number | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();

// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// // --------------------------------------------------------- Flexibility, we can use 'any' as a type
// class Queue {
//     private _data: any[] = [];

//     push(d: any) {
//         this._data.push(d);
//     }

//     pop(): any | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();

// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// var namesQ = new Queue();

// namesQ.push("abc");
// namesQ.push("xyz");
// namesQ.push(30);

// console.log(namesQ.pop().toUpperCase());
// console.log(namesQ.pop().toUpperCase());
// console.log(namesQ.pop().toUpperCase());

// --------------------------------------------------------- Generics
// class Queue<T> {
//     private _data: T[] = [];

//     push(d: T) {
//         this._data.push(d);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue<number>();

// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// var namesQ = new Queue<string>();

// namesQ.push("abc");
// namesQ.push("xyz");
// namesQ.push("pqr");

// console.log(namesQ.pop());
// console.log(namesQ.pop());
// console.log(namesQ.pop());

// -------------------------------------------------------------------- Constraints
interface ILength {
    length: number;
}

function getLength<T extends ILength>(arg: T) {
    return arg.length;
}

getLength<string>("Manish");
getLength<string[]>(["Manish"]);
getLength<number[]>([10, 20, 30, 40, 50]);

// getLength<number>(10);