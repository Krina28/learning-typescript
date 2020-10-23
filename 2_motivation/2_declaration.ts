//Variables are created type safe. 
//You can not change value of type once variable is created.

//Implicitly typed variables
var data = 10;


//Explicitly types variables
var age: number;
age = 12;

//this will throw error as we set implicit any as true in config.
//you have to define type for args.
// function getVal(x, y) {

// }

function getVal(x: number, y: number) {

}

//Supported types
//number, string, boolean, undefined, Array, Object, Date, RegExp, Function. void

//if want to access others like promise

// any / never / Tuple / Interface / Enum / Class (TypeScript Keywords)
//these are also types but not accessible due to keywords
