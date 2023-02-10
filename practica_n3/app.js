//Arrow function
let greet = () => console.log('Hello');

// Function created on the fly
let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    console.log('Hello from a function created on the fly')
})

//Interpolacion de stings "Clasica"
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hello" + miNombre + "Good morning! your skin color is" + miColor);
}

logGreeting1(" Jorge ", " brown skin ");

//Interpolacion de strings con template strings.
let color = "rojo";
let talla = "M";
let modelo = "Clasico";

let logGreeting0 = (talla, color, modelo) => console.log(`Juan tiene una playera
talla ${talla}
de color ${color}
modelo ${modelo}`);

logGreeting0(talla, color, modelo);

// console.log(`Juan tiene una playera
// talla ${talla}
// de color ${color}
// modelo ${modelo}`);



