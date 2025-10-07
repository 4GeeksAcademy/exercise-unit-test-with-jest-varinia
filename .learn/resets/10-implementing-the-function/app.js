const sum = (a,b) => {
    return a+b
}
console.log(sum(7,3))
module.exports = { sum };

//ejercicio 8
let oneEurols = {
    "JPY": 156.5, //yenes
    "USD": 1.07, //dolar
    "GBP": 0.87, //libras
}
const fromDollarToYen = (dollars) => {
    return dollars * oneEurols.JPY / oneEurols.USD;
}
const fromEuroToDollar = (euros) => {
    return euros * oneEurols.USD;
}
const fromYenToPound = (yen) => {
    return yen * oneEurols.GBP / oneEurols.JPY;
}
console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));


