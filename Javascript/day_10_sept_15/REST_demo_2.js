function test(a, b, ...c) {
    console.log(a, b, c);
}
test(10, 20);  // 10 20 []
test(10, 20, 30, 40, 50);  // 10 20 [30, 40, 50]
// Note : A rest parameter must be last in a parameter list.
