// In TypeScript, Rest and Spread can be used with Array and Object type

// In ECMASCript  Array Rest and Spread, came in ES 2015
// In ECMASCript  Object Rest and Spread, came in ES 2018

// -------------------------------------------------------- Array Spread

// var numArr1 = [10, 20, 30, 40, 50];

// Reference Copy
// var numArr2 = numArr1;

// Shallow Copy
// var numArr2 = numArr1.slice();
// var numArr2 = [...numArr1];

// numArr2[0] = 1000;

// console.log("Array 1: ", numArr1);
// console.log("Array 2: ", numArr2);

// var numArr1 = [10, 20];
// var numArr2 = [30, 40, 50];

// // var numArr3 = [].concat(numArr1, numArr2);
// // var numArr3 = numArr1.concat(numArr2);
// var numArr3 = [...numArr1, ...numArr2];

// console.log("Array 1: ", numArr1);
// console.log("Array 2: ", numArr2);
// console.log("Array 3: ", numArr3);

// -------------------------------------------------------- Array Rest

// var numArr1 = [10, 20, 30, 40, 50];

// Destructuring Array
// var x = numArr1[0];
// var y = numArr1[1];

// Destructuring Array
// var [x, y] = numArr1;
// var [x, , y] = numArr1;

// Destructuring Array with Rest
// var [x, y, ...z] = numArr1;

// console.log("x = " + x + ", y = " + y);
// console.log("z = " + z);

// -------------------------------------------------------- Object Spread

// var emp1 = { id: 1, name: "Manish", address: { city: "Pune" } };

// Reference Copy
// var emp2 = emp1;

// Shallow Copy
// var emp2 = Object.assign({}, emp1);
// var emp2 = { ...emp1 };

// Deep Copy
// var emp2 = JSON.parse(JSON.stringify(emp1));

// emp2.id = 1000;
// emp2.address.city = "Mumbai";

// console.log("Employee 1 - ", emp1);
// console.log("Employee 2 - ", emp2);

// -------------------------------------------------------- Object Rest

var emp = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411021 };

// Object Destructuring
// var id = emp.id;
// var ename = emp.ename;

// // Object Destructuring
// var { id, ename } = emp;

// Object Destructuring with Rest
var { id, ename, ...address } = emp;

console.log("Id: ", id);
console.log("Name: ", ename);
console.log("Address: ", address);