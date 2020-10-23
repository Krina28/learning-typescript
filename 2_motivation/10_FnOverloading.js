"use strict";
function hello() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length == 0)
        console.log("Hello World!");
    else
        console.log("Hello, " + args[0]);
}
hello();
hello("Manish");
//# sourceMappingURL=10_FnOverloading.js.map