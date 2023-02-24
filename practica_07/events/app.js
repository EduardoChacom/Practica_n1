let obj = {
    nombre: 'Eduardo',
    edad: 21,
    apellido: 'Chacón',
    keypress: function () {
        return 'Se ha presionado una tecla'
    },
    mouseOver: function () {
        return 'El puntero del mouse esta arriba'
    }
}

// console.log(obj.nombre);
// console.log(obj['nombre']);

let myKey = 'nombre';
console.log(obj[myKey]);

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    return "hola desdé el Array";
});
console.log(myArray);

let funcArray = [];

funcArray.push( () => {
    console.log("function 1");
});


funcArray.push( () => {
    console.log("function 2");
});

funcArray.push( () => {
    console.log("function 3");
});

funcArray.forEach((item) => {
    item();
})  //Se imprime en consola cada "funcArray"