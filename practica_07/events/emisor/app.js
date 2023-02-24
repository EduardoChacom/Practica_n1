// const Emitter = require('./emitter');
const Emitter = require('events');
const config = require('../config');
//Exportamos todo lo que tenemos en emitter

const emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('somewhere, someone said hello!');
});

emtr.on(config.events.JUMP, () => {
    console.log('A greeting occurred!'); 
});

emtr.on('jump', () => {
    console.log('someone jumped!');
})

console.log('Hello!');
emtr.emit('greet');
console.log(emtr);
emtr.emit('jump');

// Emit tiene forma de un Array, con todos los eventos.

