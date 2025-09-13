let arr = [2, 4, 6, 8, 10];
let everyElementEven = arr.every(ele => ele % 2 === 0);
console.log(everyElementEven);

let arr2 = [1, 3, 5, 7, 10];
let atLeastOneElementEven = arr2.some(ele => ele % 2 === 0);
console.log(atLeastOneElementEven); 