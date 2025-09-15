function add2Nums(a, b) {
    console.log(`Addition of ${a} and ${b} is: ${a + b}`)
}
add2Nums(10, 20);

function add3Nums(a, b, c) {
    console.log(`Addition of ${a} & ${b} & ${c} is: ${a + b + c}`)
}
add3Nums(10, 20, 30);

function addNums(...arr) {
    let sum = arr.reduce((acc, num) => acc + num);
    console.log(`sum is: ${sum}`)
}
addNums(10, 20, 30, 40); // [10, 20, 30, 40]
addNums(10, 20, 30, 40, 50);  // [10, 20, 30, 40,50]