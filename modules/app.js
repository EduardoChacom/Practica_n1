let greet = require('./greet'); //Inyectamos todo lo de nuestra dependencia.

greet(); /*Referencía de memoria Alojado! es un error escribirlo así
           El codigo dentro de cada modulo es "self contained" 
           y su ámbito de acceso es "protected" ocupas "module.exports*/