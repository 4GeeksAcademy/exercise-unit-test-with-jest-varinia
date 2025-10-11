const sum = (a,b) => {
     return a+b
 }
 console.log(sum(7,3))
 module.exports = { sum };

//ejercicio 8
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libres
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en libras
    return valueInPound;
}
let oneEurols = {
    "JPY": 156.5, //yenes
    "USD": 1.07, //dolar
    "GBP": 0.87, //libras
}
//const fromDollarToYen = (dollars) => {
//    return dollars * oneEurols.JPY / oneEurols.USD;
//}
//const fromEuroToDollar = (euros) => {
  //  return euros * oneEurols.USD;
//}
//const fromYenToPound = (yen) => {
//    return yen * oneEurols.GBP / oneEurols.JPY;
//}
console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));
module.exports = { sum, fromEuroToDollar}


