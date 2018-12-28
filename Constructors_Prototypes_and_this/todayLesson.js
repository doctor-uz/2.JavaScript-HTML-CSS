// var bobik = {
//     name: "Bob",
//     sayHi: function() {
//         return "Hi, I am " + this.name;
//     }
// };
//
// console.log(bobik.sayHi());

// var bobik = { name: "Bob" };
// bobik.sayHi = function() {
//     return "Hi, I am " + this.name;
// };
//
// console.log(bobik.sayHi());

// function Person(name) {
//     this.name = name;
//     this.sayHi = function() {
//         return "Hi, I am " + this.name;
//     };
// }
//
// var bobik = new Person("Bob");
// console.log(bobik.sayHi());

//Person("Bob");

// function Person(name) {
//     this.name = name;
//     return 5;
// }
//
// console.log(new Person("bob"));

// function Person(name) {
//     if (!(this instanceof Person)) return new Person(name);
//     this.name = name;
// }
//
// new Person("bob");

// function Person(name) {
//     this.name = name;
// }
//
// var bob = new Person("Bob");

//Person("Bob");

//console.log(bob instanceof Person);

// function Person(n, a) {
//     this.name = n;
//     this.age = a;
//     this.isAlive = true;
// }
//
// Person.prototype.introduceSelf = function introduceSelf() {
//     console.log("Hi, I am " + this.name);
//
// function Actor(n, a, o) {
//     this.name = n;
//     this.age = a;
//     this.oscar = o;
//
// }
//
// Actor.prototype = new Person;
//
// function act() {
//     console.log("To be or not to be ... " );
// };
//
//

// function Person(n, a) {
//     this.name = n;
//     this.age = a;
//     this.isAlive = true;
//     // this.introduceSelf = function() {
//     //     console.log("Hi, I am " + this.name);
//     // };
// }
//
// Person.prototype.introduceSelf = function introduceSelf() {
//     console.log("Hi " + this.name);
// };
// var p1 = new Person("Leo"); // ...> undefined
// var p2 = new Person("Jey", 43); // ....> 43
//
// console.log(p1.introduceSelf == p2.introduceSelf);

// function fn() {}
//
// console.log(fn.prototype);

// function Person(n, a) {
//     this.name = n;
//     this.age = a;
//     this.isAlive = true;
//     this.introduceSelf = introduceSelf;
// }
//
// function introduceSelf() {
//     console.log("Hi, I am " + this.name);
// }
//
// var p1 = new Person("Leo"); // ...> undefined
// var p2 = new Person("Jey", 43); // ....> 43
//
// p2.introduceSelf();

// function Person(n, a) {
//     this.name = n;
//     this.age = a;
//     this.isAlive = true;
//     this.introduceSelf = function() {
//         console.log("Hi, I am " + this.name);
//     };
// }
//
// var p1 = new Person("Leo"); // ...> undefined
// var p2 = new Person("Jey", 43); // ....> 43
//
// p1.introduceSelf();
//
// console.log(
//     p1.introduceSelf == p2.introduceSelf
// );

// function Person(n, a) {
//     this.name = n;
//     this.age = a;
//     this.isAlive = true;
// }
//
// var p1 = new Person("Leo"); // ...> undefined
// var p2 = new Person("Jey", 43); // ....> 43
//
// console.log(p1.age, p2.age);

// function Person() {
//     this.isAlive = true;
// }
//
// var p1 = new Person; // ...> Without parentasis

// function Person() {
//     this.isAlive = true;
// }
//
// var p1 = new Person();
// var p2 = new Person();
//
// console.log(p1);

// function fn() {
//     return 10; // return [] ...> []
// }
//
// console.log(new fn()); // ...> fn{}
