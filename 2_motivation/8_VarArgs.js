"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
console.log();
function Average() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i_1 = 0; i_1 < args.length; i_1++) {
        sum += args[i_1];
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
var numbers = [2, 4, 5, 4, 3, 2, 5, 6, 8, 9];
console.log(Average.apply(void 0, __spread(numbers)));
//# sourceMappingURL=8_VarArgs.js.map