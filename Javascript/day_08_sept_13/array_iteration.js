let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];

// 1. loop
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log("================")

// 2. for-in ES_6 2015
for (ind in cars) {
    console.log(cars[ind]);
}
console.log("================")

// for-of ES_6
for (car of cars) {
    console.log(car);
}
console.log("================");

// 4. forEach
cars.forEach((val, ind, arr) => {
    console.log(val, ind, arr)
})