const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 220, change: 1.5, sector: "Technology", volume: 1000000 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 340, change: -2.1, sector: "Technology", volume: 800000 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 260, change: 3.8, sector: "Automobile", volume: 1200000 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 190, change: -1.2, sector: "E-Commerce", volume: 600000 },
    { symbol: "NFLX", name: "Netflix Inc.", price: 400, change: 2.3, sector: "Entertainment", volume: 500000 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 2800, change: -0.5, sector: "Technology", volume: 300000 }
];
//Get an array of stock prices increased by 10%
stocks.map(stock=>{
    stock.price = stock.price + (stock.price*0.1);
    return stock;
})
console.log(stocks)

stocks.map(stock=>{
    stock.profit = stock.change > 0 ? true : false;
    return stock;
})
console.log(stocks)