//Any number if args
console.log();

//------------------ Rest Parameters -------------------
function Average(...args: number[]) {
    var sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    if (args.length > 0) {
        return sum / args.length;
    }
    return sum;
}

console.log(Average(2));
console.log(Average(5, 3, 4, 2));
console.log(Average(2, 4, 3, 1, 6));
console.log(Average(2, 6, 7, 8, 9, 3));

// Combine comma separated items into a Array - Rest
// Left hand side of equalTo(=) operator - Rest

// Split Array to comma separated items (...) - Array spread
// Right hand side of equatTo(=) operator - Spread

var numbers = [2, 4, 5, 4, 3, 2, 5, 6, 8, 9];
console.log(Average(...numbers));