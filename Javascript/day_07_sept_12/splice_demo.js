let arr = [10, 20, 30, 40, 50];

// splice(index , #elements to delete , elements to insert)
// 1. only delete  2. only insert  3. both delete& insert
arr.splice(1, 2); // only delete
console.log(arr);

arr.splice(1, 0, 20, 30); //only insert
console.log(arr)

arr.splice(1, 2, 25,35, 38 ) // both delete and  insert
console.log(arr)