let person = { //La forma en la que se obtiene el objeto.
    name: "Eduardo",
    lastName: "Chacón",
    getName: function () {
        return `${this.name} ${this.lastName}`
    },
    address: { //Objeto dentro de un objeto!
        street: "Av. Universidad #333",
        colonia: "Las Viboras",
        cp: 28000,
        municipio: "Colima",
        getAddress: function () {
            return `Calle: ${this.street} Colonía: ${this.colonia} CP: ${this.cp} Municipio: ${this.municipio}`;
        },
    },

};

console.log(person.getName()); //Jalar desde el objeto un metodo.
console.log(person.address.getAddress());
// console.log(person);
// console.log(person.name);
// console.log(person.lastName);
