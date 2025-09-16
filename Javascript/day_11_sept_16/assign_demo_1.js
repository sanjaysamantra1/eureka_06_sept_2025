let obj1 = { a: 10, b: 20 }
let obj2 = { b: 25, c: 30 }
let obj3 = { c: 25, d: 30 }

Object.assign(obj3, obj1, obj2);
console.log(obj1, obj2, obj3)