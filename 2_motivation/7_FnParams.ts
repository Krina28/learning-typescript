function hello1(name: string) {
    console.log("hello", name)
}

hello1("Krina");
// hello(); //Expected 1 arguments, but got 0.
// hello("Krina", "jaymin"); //Expected 1 arguments, but got 2.


//ioptional parameter 
//prefix : sign with number
// function add(x?: number, y?: number): number {
//     return x + y;
// }

// console.log(add(2, 3))
// add();
// add(3);

//Default pareameter
function add1(x = 0, y = 0) {
    return x + y;
}

add1(4);
