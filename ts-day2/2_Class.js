"use strict";
var Employee = (function () {
    function Employee() {
        this._name = "Krina";
    }
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.setName = function (name) {
        return this._name = name;
    };
    return Employee;
}());
var emp = new Employee();
console.log(emp.getName());
var Employee1 = (function () {
    function Employee1(name, age) {
        if (name === void 0) { name = "NA"; }
        if (age === void 0) { age = 0; }
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Employee1.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee1.prototype, "Age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee1;
}());
var e1 = new Employee1("Krina");
console.log(e1.Name);
console.log(e1.Age);
e1.Name = "Jaymin";
e1.Age = 38;
console.log(e1.Name);
console.log(e1.Age);
var Employee2 = (function () {
    function Employee2(_name, age) {
        if (_name === void 0) { _name = "NA"; }
        if (age === void 0) { age = 0; }
        this._name = _name;
        this.age = age;
    }
    return Employee2;
}());
var BankAccount = (function () {
    function BankAccount(_accName) {
        this._accName = _accName;
    }
    Object.defineProperty(BankAccount.prototype, "BankName", {
        get: function () {
            return BankAccount._bankName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount, "BankName", {
        set: function (value) {
            BankAccount._bankName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "AccountHolderName", {
        get: function () {
            return this._accName;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount._bankName = "HDFC";
    return BankAccount;
}());
var a1 = new BankAccount("Manish");
console.log(a1);
console.log("Bank Name:", a1.BankName);
console.log("Account Holder Name:", a1.AccountHolderName);
var a2 = new BankAccount("Abhijeet");
console.log(a2);
console.log("Bank Name:", a2.BankName);
console.log("Account Holder Name:", a2.AccountHolderName);
var BankAccount1 = (function () {
    function BankAccount1(_accNumber, _accName) {
        this._accNumber = _accNumber;
        this._accName = _accName;
    }
    Object.defineProperty(BankAccount1.prototype, "BankName", {
        get: function () {
            return BankAccount1._bankName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount1, "BankName", {
        set: function (value) {
            BankAccount1._bankName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount1.prototype, "AccountHolderName", {
        get: function () {
            return this._accName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount1.prototype, "AccountNumber", {
        get: function () {
            return this._accNumber;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount1._bankName = "HDFC";
    return BankAccount1;
}());
BankAccount1.BankName = "ICICI";
var a3 = new BankAccount1(1, "Krina");
console.log("Bank Name:", a3.BankName);
console.log("Account Number:", a3.AccountNumber);
console.log("Account Holder Name:", a3.AccountHolderName);
var a4 = new BankAccount1(2, "Jaymin");
console.log("Bank Name:", a4.BankName);
console.log("Account Number:", a4.AccountNumber);
console.log("Account Holder Name:", a4.AccountHolderName);
