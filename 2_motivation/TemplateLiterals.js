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
var d1 = "Hello";
var d2 = 'Hello';
var d3 = "Hello";
var fname = "Manish";
var lname = "Sharma";
var numArr1 = [10, 20, 30, 40, 50];
var _a = __read(numArr1), x = _a[0], y = _a[1], z = _a.slice(2);
console.log("x = " + x + ", \ny = " + y + ", \nz = " + z);
//# sourceMappingURL=TemplateLiterals.js.map