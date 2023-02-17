const Emitter = require('./emitter');
//Exportamos todo lo que tenemos en emitter

const emtr = new Emitter();

emtr.on('greet', () => {
    console.log('somewhere, someone said hello!');
});

emtr.on('greet', () => {
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
