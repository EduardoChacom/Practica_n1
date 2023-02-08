const { toCelsius } = require("celsius"); //Inyectar todo lo que vamos a usar.
 
console.log(toCelsius(100)); // 38
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

const { toFahrenheit } = require("celsius");
 
console.log(toFahrenheit(36)); // 97
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380

const convertidor = require ("celsius"); //trae todo lo que tiene el modulo.

console.log(convertidor.toCelsius(20)); //el convertidor trae todo 
console.log(convertidor.toFahrenheit(30)); //puedes usar todo lo que tiene.

//npm init -y para instalar
//npm install celsius - ejemplo, para instalar
//npm i celcius