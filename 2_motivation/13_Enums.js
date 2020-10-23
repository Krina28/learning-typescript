"use strict";
function Open(mode) {
    console.log("File Opened in " + mode);
}
Open("Read");
Open("Write");
Open("ReadWrite");
var Mode;
(function (Mode) {
    Mode["Read"] = "Read";
    Mode["Write"] = "Write";
    Mode["ReadWrite"] = "ReadWrite";
})(Mode || (Mode = {}));
;
function Open1(mode) {
    console.log("File Opened in " + mode + " mode");
}
Open1(Mode.Read);
Open1(Mode.Write);
Open1(Mode.ReadWrite);
//# sourceMappingURL=13_Enums.js.map