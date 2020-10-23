// var arr1 = [10, 20, 30, 40, 50];

// var arr2: number[];
// arr2 = [10, 20, 30, 40, 50, 60];

// var arr3: Array<number>;
// arr3 = [10, 20, 30, 40, 50, 60, 70];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

var empList: Array<{ id: number, name: string }>;
empList = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Abhijeet" },
    { id: 4, name: "Pravin" },
    { id: 5, name: "Subodh" }
];

// for (let i = 0; i < empList.length; i++) {
//     console.log(`${i}     ${empList[i].name}`);
// }

// for(const key in empList){
//     console.log(`${key}     ${empList[key].name}`);
// }

// empList.forEach((item, index, arr) => {
//     console.log(`${index}     ${item.name}`);
// });

// for (const item of empList) {
//     console.log(item.name);
// }

for (const [index, item] of empList.entries()) {
    console.log(`${index}     ${item.name}`);
}
