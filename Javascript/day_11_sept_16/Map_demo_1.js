const myMap = new Map();

myMap.set('name', 'sanjay'); // Sets a key value pair
myMap.set('add', 'bangalore'); // Sets a key value pair
myMap.set('hobby', 'cycling'); // Sets a key value pair

console.log(myMap.get('add')); // bangalore
console.log(myMap.size); // 3

for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}