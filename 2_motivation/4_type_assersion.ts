// Type assertion is a mechanism which tells the compiler about the type of a variable. 
// Type assertion is explicitly telling the compiler that we want to treat the entity as a different type.

var data1: any = "Hello, I am here";

// console.log(data1);
// console.log(data1.toUppercase());       // Error:  c in case in capital C - toUpperCase()
// console.log((<string>data1).toUpperCase());
// console.log((data1 as string).toUpperCase());

var a1 = data1.length;
console.log(a1);

var a2 = (<string>data1).length;
console.log(a2);

var a3 = (data1 as string).length;
console.log(a3);

// var a4 = (data1 as number).toFixed();
// console.log(a4);