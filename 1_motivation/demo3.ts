class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }
}

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Pravin");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());