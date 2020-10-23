interface IEmployee {
    name: string;
}

class Manager implements IEmployee {
    name: string;

    constructor() {
        this.name = "Manager";
    }
}

class Developer implements IEmployee {
    name: string;

    constructor() {
        this.name = "Developer";
    }
}

class Tester implements IEmployee {
    name: string;

    constructor() {
        this.name = "Tester";
    }
}

var factory = (function <T extends IEmployee>() {
    return {
        getEmployee: function (arg: { new(): T }): T {
            return new arg();
        }
    };
})();

console.log(factory.getEmployee(Manager));
console.log(factory.getEmployee(Developer));
console.log(factory.getEmployee(Tester));

// console.log(factory.getEmployee(10));           // Compile Time Error
// console.log(factory.getEmployee("abc"));        // Compile Time Error