let str = 'Jatin & Kavya are 2 friends, jatin is 21 & kavya is 22 years old';

let result = str.match(/\d{1,2}/g);
console.log(result)

let creditcardNum = '1111222233334444';
let formatedCreditCard = creditcardNum.match(/\d{1,4}/g);
console.log(formatedCreditCard.join('-'))