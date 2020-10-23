// Function Declaration
// function hello() {
//     console.log("Hello World!");
// }

// hello();

// Function Expression
// const hello = function () {
//     console.log("Hello World!");
// }

// hello();

// var r = hello();
// console.log(r);
// console.log(typeof r);

// var r1: undefined;
// // r1 = 10;        // Error
// r1 = undefined;
// console.log(r1);

// var r2: void;
// // r2 = 10;        // Error
// r2 = undefined;
// console.log(r2);

// var r3: never;
// // r3 = 10;            // Error
// // r3 = undefined;     // Error
// console.log(r3);

// var r = (function(){

// })();

// var r1 = (function(){
//     return 10;
// })();

// var r2 = (function(){
//     throw new Error("Test");
// })();

// ----------------------------------------------------

// function add1(x: number, y: number): number {
//     return x + y;
// }

// let add2 = function (x: number, y: number): number {
//     return x + y;
// }

// // let add3: () => void;
// let add3: (a: number, b: number) => number;
// add3 = function (x: number, y: number): number {
//     return x + y;
// }

// // var k: number;
// // k = 10;

// let add4: (a: number, b: number) => number;
// add4 = function (x, y) {
//     return x + y;
// }

// let add5: (a: number, b: number) => number;
// add5 = (x, y) => {
//     return x + y;
// }

// let add6: (a: number, b: number) => number;
// add6 = (x, y) => x + y;

// console.log(add1(2, 3));
// console.log(add2(2, 3));
// console.log(add3(2, 3));
// console.log(add4(2, 3));
// console.log(add5(2, 3));
// console.log(add6(2, 3));

// ----------------------------------------------------- Lambdas as Callback

var employees = [
    { id: 1, name: "ABC", city: "Pune" },
    { id: 2, name: "XYZ", city: "Mumbai" },
    { id: 3, name: "PQR", city: "Pune" }
];

// ----------------------------------------------------
// var pune_employees = [];

// function filterFn(item: { id: number, name: string, city: string }) {
//     return item.city === "Pune";
// }

// for (let i = 0; i < employees.length; i++) {
//     if (filterFn(employees[i])) {
//         pune_employees.push(employees[i]);
//     }
// }

// ----------------------------------------------------

// function filterFn(item: { id: number, name: string, city: string }) {
//     return item.city === "Pune";
// }

// var pune_employees = employees.filter(filterFn);

// ----------------------------------------------------

// var pune_employees = employees.filter(function (item) {
//     return item.city === "Pune";
// });

// ---------------------------------------------------- Lambda

// var pune_employees = employees.filter((item) => {
//     return item.city === "Pune";
// });

// ---------------------------------------------------- Single Line Lambda

var pune_employees = employees.filter(item => item.city === "Pune");

console.log(pune_employees);