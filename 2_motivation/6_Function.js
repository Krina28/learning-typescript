"use strict";
var employees = [
    { id: 1, name: "ABC", city: "Pune" },
    { id: 2, name: "XYZ", city: "Mumbai" },
    { id: 3, name: "PQR", city: "Pune" }
];
var pune_employees = employees.filter(function (item) { return item.city === "Pune"; });
console.log(pune_employees);
//# sourceMappingURL=6_Function.js.map