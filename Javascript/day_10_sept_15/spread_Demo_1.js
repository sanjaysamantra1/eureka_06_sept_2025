let arr1 = [10, 20, 30];
let arr2 = [...arr1];  // spread : breaks an array/object into individual values

let numsArr = [10, 20, 50, 40, 30];
console.log(Math.max(10, 20, 30, 40, 50)); // 50
console.log(Math.max(numsArr)); // NaN
console.log(Math.max(...numsArr)); 
// breaks numsArr to individual values & passe as arg to max()