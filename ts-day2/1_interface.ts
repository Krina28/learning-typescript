// const area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1 = { h: 20, w: 10 }
// console.log(area(s1))

// let s2 = { h: 20 }
// console.log(area(s2))

// let s3 = { h: 20, w: 10, d: 30 }
// console.log(area(s3))

//Interface acts as a contract between two parties. 

// ------------------with interface

interface Rectangle {
    h: number;
    w?: number;
}

const area = function (rect: Rectangle) {
    rect.w = rect.w || rect.h;
    return rect.h * rect.w;
}

let s1: Rectangle = { h: 20, w: 20 }
console.log(area(s1))

let s2: Rectangle = { h: 20 }
console.log(area(s2))

// let s3: Rectangle = { h: 20, w: 10, d: 30 }
// console.log(area(s3))   //Error

//Interface can also have methods inside it. Only declarations
//No need of class to implement interface, you can directly do with object.
//------Interface with methods

// interface IPerson {
//     name: string;
//     age: number;
//     greet: (message: string) => string;
// }

// let p1: IPerson = {
//     name: "Krina",
//     age: 25,
//     greet: function (msg) {
//         return "Hello" + msg;
//     }
// }

// console.log(p1.greet("World"))

// -------------------------- interface declaration merging

interface IShape {
    height: number;
}

// let s4: IShape = {
//     height: 20 //Gives error because width is mandatory and not given as it got merged. 
//}

interface IShape {
    width: number;
}
//It merges the two interfaces with same name.
//console.log(s4)