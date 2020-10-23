"use strict";
var Person = (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.greet = function (message) {
        return "Hello" + message;
    };
    return Person;
}());
var p1 = new Person("Abhijeet", 38);
console.log(p1.greet("Hi"));
var p2 = new Person("Ramakant", 39);
console.log(p2.greet("Hi"));
var Person1 = (function () {
    function Person1(n, a) {
        this.name = n;
        this.age = a;
    }
    Person1.prototype.greet = function (message) {
        return "Hello";
    };
    Person1.prototype.doWork = function () {
        return "I am learning TypeScript";
    };
    Person1.prototype.doShopping = function () {
        return "Let's do it online";
    };
    return Person1;
}());
var p4 = new Person1("Abhijeet", 38);
console.log(p4.greet("Hi"));
console.log(p4.doWork());
console.log(p4.doShopping());
var Vehicle = (function () {
    function Vehicle(make) {
        this.make = make;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    return Vehicle;
}());
var Engine = (function () {
    function Engine(manufacturer) {
        this.manufacturer = manufacturer;
    }
    Engine.prototype.getManufacturer = function () {
        return this.manufacturer;
    };
    return Engine;
}());
var FourWheeler = (function () {
    function FourWheeler(make, manufacturer) {
        if (make === void 0) { make = "NA"; }
        if (manufacturer === void 0) { manufacturer = "NA"; }
        this.make = make;
        this.manufacturer = manufacturer;
    }
    FourWheeler.prototype.getMake = function () {
        throw new Error("Method not implemented.");
    };
    FourWheeler.prototype.getManufacturer = function () {
        throw new Error("Method not implemented.");
    };
    return FourWheeler;
}());
