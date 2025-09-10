// Function Declaration
add(2, 3);
function add(a, b) {
    console.log(`Addition of ${a} & ${b} is ${a + b}`);
}
add(10, 20);

// Function Expression (anonymous)
let sub = function (a, b) {
    console.log(`Subtraction of ${a} & ${b} is ${a - b}`);
};
sub(30, 10);


// self invoked - IIFE
(function mul(a, b) {
    console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
})(10, 20); // can be invoked only 1


// Arrow Function
let div = (a, b) => {
    console.log(`Division of ${a} & ${b} is ${a / b}`);
};
div(30, 10);