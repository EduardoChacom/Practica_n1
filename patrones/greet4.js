module.exports = function Greetr() {
    this.greeting = "Hello from the constructor function greet 4";
    this.greet = function () {
        console.log(this.greeting);
    }
}