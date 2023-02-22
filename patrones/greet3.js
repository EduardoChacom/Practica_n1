function Greetr() {
    this.greeting = "Hello from the constructor function";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr;