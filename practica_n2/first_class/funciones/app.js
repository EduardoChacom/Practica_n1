// function greet( ) {
//     console.log("Hello");
// }

let greet = () => { //la sintaxis de la funcion  
    console.log("Hello"); //cambia completamente
}

greet() //invoke.

//Functions as parameters
// function logGreeting(fn) {
//     fn();
// }

let logGreeting = fn => { //cuando se tiene solo un parametro
    fn(); //se ahorran los parentesis, pero normalmente se meten ahí.
}

logGreeting(greet);
/* Estamos pasando la función greet
como parametro e invocandola con el
nombre del argumento fn*/

//Function expression
// let greetMe = function () {
//     console.log('Hello from the function expression');
// }

let greetMe = () => console.log('Hello from the function expression');

greetMe();

//fuctions are first class, pass it as a parameter.
logGreeting(greetMe);
