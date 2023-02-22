let greet = require('./greet1');
// let greet2 = require('/greet2').greet;
let greet2a = require('./greet2');

let greet3 = require('./greet3'); //Objeto construido/instanciado

greet();

greet2a.greet();

greet3.greet();
greet3.greeting = "Hello from the App"

let greet3b = require('./greet3'); //vuelvo a inyectar la dependencia
greet3b.greet();                   // Se invoca de nuevo desdé la app.

//No es un nuevo objeto, es el mismo, genera una nueva instancia, el objeto
//ya esta en la memoria. 

//Por eso no es muy recomendada, ya que es un mismo objeto y cambia todo.

const Greet4 = require('./greet4'); //constructor.
let myGreet = new (Greet4); //Cada vez que la app principal, se genera
myGreet.greet();  //una nueva referencia a la memoria diferente, no afecta.

const greet5 = require('./greet5');
greet5.greet();
greet5.jump();
greet5.zelda();

//Este último patron es el que se encuentra más en los equipos de trabajo.
//lo que hace greet5 es: Que no puedes cambiar el contenido, pues es 
//independiente.

//si yo tengo una llave cuyo valor es el mismo, puede quedar solo greet.
