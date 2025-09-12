let arr1 = [10, 50, 20, 40, 30];
arr1.sort();
console.log(arr1);

let arr2 = [101, 109, 105, 91, 81, 71, 7, 6, 8, 5];
arr2.sort();
console.log(arr2);

arr2.sort((a, b) => a - b);
console.log(arr2)

arr2.sort((a, b) => b - a);
console.log(arr2)