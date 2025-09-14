let arr1 = [10, 20];
let arr2 = arr1;    // reference / address
// a new array is not being created, address of the array is stored in another variable
arr2.push(30, 40);
console.log(arr1, arr2);

let arr3 = [10, 20, [30, 31]];
let arr4 = [...arr3]; // Spread Operator : Value  : Shallow copy
arr4.push(40, 50);
arr4[2].push(32, 33);
console.log(arr3, arr4);
// Shallow Copy :6only top level elements are copied by value, nested elements are copied by address

let arr5 = [10, 20, [30, 31]];
let arr6 = structuredClone(arr5) // structuredClone : Value  : Deep copy
arr6.push(40, 50);
arr6[2].push(32, 33);
console.log(arr5, arr6)