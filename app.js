const { toCelsius } = require("celsius");
 
console.log(toCelsius(100)); // 38
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

const { toFahrenheit } = require("celsius");
 
console.log(toFahrenheit(36)); // 97
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380

const convertidor = require ("celsius");

console.log(convertidor.toCelsius(20));
console.log(convertidor.toFahrenheit(30));