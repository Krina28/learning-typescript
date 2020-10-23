// Enums allow us to define set of named constants.
// Using enums can make it easier to document intent, or create a set of distict cases
// Improves readibility.
// Restrict the input.

function Open(mode: string) {
    console.log(`File Opened in ${mode}`)
}

Open("Read");
Open("Write");
Open("ReadWrite");


enum Mode { Read = "Read", Write = "Write", ReadWrite = "ReadWrite" };

function Open1(mode: Mode) {
    console.log(`File Opened in ${mode} mode`)
}

Open1(Mode.Read);
Open1(Mode.Write);
Open1(Mode.ReadWrite);