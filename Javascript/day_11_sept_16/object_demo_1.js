let user = { name: 'sachin', age: 35, add: 'mumbai', 'full name': 'tendulkar' }

console.log(user.name); // sachin
console.log(user['age']); // 35

// console.log(user.full name);
console.log(user['full name']);


let a = 'age';
console.log(user.a); // looks for 'a' inside user object
console.log(user[a]); // looks for 'age' inside user object

for (let key in user) {
    console.log(key + " ======= " + user[key])
}

console.log(Object.keys(user).length); // 4

