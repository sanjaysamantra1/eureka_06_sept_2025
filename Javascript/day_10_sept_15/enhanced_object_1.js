function makeLaptop(brand, model, price, year) {
    return {
        brand: brand,
        model: model,    // ES_5
        price: price,
        year: year
    }
}
console.log(makeLaptop('HP', 'Probook', 40000, 2023));

function createLaptop(brand, model, price, year) {
    return { brand, model, price, madeYear : year }
}
console.log(createLaptop('HP', 'Probook', 40000, 2023));