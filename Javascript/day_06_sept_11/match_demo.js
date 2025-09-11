let str = 'rain in spain mAinly stays in the plain';

let result1 = str.match(/ain/); // returns the first occurance
console.log(result1)

let result2 = str.match(/ain/g);
console.log(result2)

let result3 = str.match(/ain/gi);
console.log(result3)