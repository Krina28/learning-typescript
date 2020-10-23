// function hello() {
//     console.log("Hello World!");
// }

// function hello(name: string) {
//     console.log(`Hello, ${name}`);
// }

// hello();
// hello("Manish");

// ------------------------------------------------

function hello(): void;
function hello(name: string): void;

function hello(...args: string[]) {
    if (args.length == 0)
        console.log("Hello World!");
    else
        console.log(`Hello, ${args[0]}`);
}

hello();
hello("Manish");
// hello("Manish", "Pune");

// function Reverse(...args: string[]) {
//     if (args.length == 0) {
//         console.log("No args")
//     } else {
//         var swap: Array[];
//         swap = [];
//         for (let i = args.length; i <= args.length; i--) {
//             swap.push(args[i])
//         }
//         console.log('>>>swap', swap)
//     }
// }

// console.log(Reverse("Manish"));                 // [ 'h', 's', 'i', 'n', 'a', 'M' ]
// console.log(Reverse(["PQR", "XYZ", "ABC"]));    // [ 'ABC', 'XYZ', 'PQR' ]
// console.log(Reverse(10));                       // Error