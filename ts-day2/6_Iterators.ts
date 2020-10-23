// class Queue<T> {
//     private _data: T[] = [];

//     push(d: T) {
//         this._data.push(d);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }

//     [Symbol.iterator]() {
//         const self = this;
//         let i = 0;

//         return {
//             next: function () {
//                 let v, d = true;

//                 if (self._data[i] !== undefined) {
//                     v = self._data[i];
//                     d = false;
//                     i += 1;
//                 }

//                 return {
//                     value: v,
//                     done: d
//                 };
//             }
//         };
//     }
// }

// var numbersQ = new Queue<number>();

// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// for (const item of numbersQ) {
//     console.log(item);
// }

// ----------------------------------------------------------------------------
// class Queue<T> implements Iterator<T> {
//     private _data: T[] = [];
//     private i = 0;

//     push(d: T) {
//         this._data.push(d);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }

//     public next(): IteratorResult<T> {
//         var self = this;
//         let v, d = true;

//         if (self._data[this.i] !== undefined) {
//             v = self._data[this.i];
//             d = false;
//             this.i += 1;
//         }

//         return {
//             done: d,
//             value: v
//         };
//     }
// }

// var numbersQ = new Queue<number>();

// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// // for (const item of numbersQ) {
// //     console.log(item);
// // }

// // console.log(numbersQ.next().value);

// ------------------------------------------------------------------ Generators

// function* idGenerator(){
//     yield 10;
//     yield 20;
//     yield 30;
// }

// console.log(idGenerator());

// for (const item of idGenerator()) {
//     console.log(item);   
// }

// class Queue<T> {
//     private _data: T[] = [];

//     push(d: T) {
//         this._data.push(d);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }

//     *[Symbol.iterator]() {
//         for (let i = 0; i < this._data.length; i++) {
//             yield this._data[i];
//         }
//     }
// }

// var numbersQ = new Queue<number>();

// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// for (const item of numbersQ) {
//     console.log(item);
// }

class Queue<T> {
    private _data: T[] = [];

    push(d: T) {
        this._data.push(d);
    }

    pop(): T | undefined {
        return this._data.shift();
    }

    *[Symbol.iterator]() {
        yield* this._data;
    }
}

var numbersQ = new Queue<number>();

numbersQ.push(10);
numbersQ.push(20);
numbersQ.push(30);

for (const item of numbersQ) {
    console.log(item);
}