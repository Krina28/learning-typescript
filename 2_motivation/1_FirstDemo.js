"use strict";
var Program = (function () {
    function Program() {
    }
    Program.main = function (str) {
        console.log('hello', str);
    };
    Program.check = function () {
        console.log('checked');
    };
    return Program;
}());
Program.main("synechron");
Program.check();
//# sourceMappingURL=1_FirstDemo.js.map