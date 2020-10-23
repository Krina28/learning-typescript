// A Decorator is a special kind of declaration that can be attached to a 
// class declaration, method, accessor, property, or parameter. 

// Decorators use the form @expression, where expression must evaluate to a function that 
// will be called at runtime with information about the decorated declaration.

// Types of Decorators
// Class Decorator <T extends Function>(target:T) => T | void
// Property Decorator (target: Object, propertyKey: string | symbol) => void;
// Method Decorator <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// Parameter Decorator (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// function log<T>(target: T, propertyKey: string, descriptor: any) {
//     var originalMethod = descriptor.value;

//     descriptor.value = function (...args: any[]) {
//         var fn_args = args.map(arg => JSON.stringify(arg)).join();
//         console.log(`${propertyKey} is called with the arguments as ${fn_args}`);
//         var result = originalMethod.apply(this, args);
//         return result;
//     }

//     return descriptor;
// }

// class Calculate {
//     @log
//     add(x: number, y: number) {
//         return x + y;
//     }

//     @log
//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// var c = new Calculate();
// console.log(c.add(23, 45));
// console.log(c.sub(2, 4));

// -------------------------------------------------------------------
function CityDecorator(obj: { cityName: string }) {
    return function CityDecorator<T extends { new(...args: any[]): {} }>(target: T) {
        return class extends target {
            city = obj.cityName;
        }
    }
}

@CityDecorator({
    cityName: "Mumbai"
})

class MyPerson {
    name: string;

    constructor(n = "NA") {
        this.name = n;
    }
}

var p: any = new MyPerson("Manish");
console.log(JSON.stringify(p));


// Angular
// Class Decorator  - @Component({}), @NgModule({})
// Property Decorator - @Input()
// Method Decorator - @HostListener()
// Parameter Decorator - @Inject()