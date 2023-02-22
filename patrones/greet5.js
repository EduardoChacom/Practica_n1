let greeting = "Hello from greet 5"; //variable
let jumping = "Jump right now!";
let listening = "Hey listen!";

let greet = () => { //function, estan separados, pero cuando se exportan 
    console.log(greeting); //los meto en un objeto
}

let jump = () => {
    console.log(jumping);
}


let zelda = () => {
    console.log(listening);
}

//es una llave y es un valor!
module.exports = {
    greet,
    jump,
    zelda
}

//Se usan las comis y un dato expecifico.