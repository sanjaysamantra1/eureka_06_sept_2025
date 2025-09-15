function add(a, b, c = 0) {
    console.log(a + b + c); // 10 20 undefined
}
add(10, 20); // 10 20 0
add(10, 20, 30); // 10 20 30

function greet(userName = 'user') {
    console.log(`Hello ${userName}, Welcome to Flipkart`)
}
greet();
greet('Sanjay');
greet('Rasheed');