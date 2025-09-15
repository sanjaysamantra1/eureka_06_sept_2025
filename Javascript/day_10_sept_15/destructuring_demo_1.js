// Object De-Structuring
let user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
let a = user.name;
let b = user.address.city;
let c = user.address.geo.lng; // ES_5
let d = user.phone;
console.log(`Name:${a} , city:${b}, Lng: ${c}, phone:${d}`);

let { name, phone, address: { city, geo: { lng } } } = user; // ES_6
console.log(`Name:${name} , city:${city}, Lng: ${lng}, phone:${phone}`);