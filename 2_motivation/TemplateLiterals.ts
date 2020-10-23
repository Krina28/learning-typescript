var d1 = "Hello";
var d2 = 'Hello';
var d3 = `Hello`;

// console.log(d1);
// console.log(typeof d1);

// console.log(d2);
// console.log(typeof d2);

// console.log(d3);
// console.log(typeof d3);

// var d4 = "H\n\te\n\t\tl\n\t\t\tl\n\t\t\t\to";
// console.log(d4);

// var d5 = `H
//     e
//         l
//             l
//                 o`
// console.log(d5);

// String Concat

var fname = "Manish";
var lname = "Sharma";

// var message = "Hello, " + fname + " " + lname;
// console.log(message);

// var message1 = `Hello, ${fname} ${lname}`;
// console.log(message1);

// var message = "Hello, " + fname.toUpperCase() + " " + lname.toUpperCase();
// console.log(message);

// var message1 = `Hello, ${fname.toUpperCase()} ${lname.toUpperCase()}`;
// console.log(message1);

var numArr1 = [10, 20, 30, 40, 50];
var [x, y, ...z] = numArr1;

// console.log("x = " + x + ", \ny = " + y + ", \nz = " + z);
// console.log(`x = ${x}, y = ${y}, z = ${z}`);
console.log(`x = ${x}, 
y = ${y}, 
z = ${z}`);