class Program {
    static main(str: string) {
        console.log('hello', str)
    }

    static check() {
        console.log('checked')
    }
}

//Calling static methods
Program.main("synechron");
Program.check();