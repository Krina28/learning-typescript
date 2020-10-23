abstract class Vehicle1 {
    private _id: number;
    protected _make: string;

    constructor(id: number, make?: string) {
        this._id = id;
        this._make = make;
    }

    start(): string {
        return `Vehicle with id: ${this._id}, make as ${this._make} stated..`;
    }

    abstract move(): string;
}

// class FourWheeler extends Vehicle implements IEmployee{
class FourWheeler1 extends Vehicle1 {
    private _model: string;

    constructor(id: number, make = "Honda", model = "Civic") {
        super(id);
        this._make = make;
        this._model = model;
    }

    start(): string {
        var bResult = super.start();
        return `${bResult}, model is ${this._model}`;
    }

    move(): string {
        return `Moving like a car`;
    }
}

// Cannot create an instance of an abstract class.
// let v = new Vehicle(1, "Ford");
// console.log(v.start());

// let v = new FourWheeler(1, "Ford", "Mustang");
// console.log(v.start());
// console.log(v.move());