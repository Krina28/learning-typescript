"use strict";
var Manager = (function () {
    function Manager() {
        this.name = "Manager";
    }
    return Manager;
}());
var Developer = (function () {
    function Developer() {
        this.name = "Developer";
    }
    return Developer;
}());
var Tester = (function () {
    function Tester() {
        this.name = "Tester";
    }
    return Tester;
}());
var factory = (function () {
    return {
        getEmployee: function (arg) {
            return new arg();
        }
    };
})();
console.log(factory.getEmployee(Manager));
console.log(factory.getEmployee(Developer));
console.log(factory.getEmployee(Tester));
