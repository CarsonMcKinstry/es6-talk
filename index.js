// new variable types
// my general suggestion is to use them in this order: const > let > var
// const and let are both block-scoped, rather than global

// const is immutable, with a few exceptions
// objects and arrays can be mutated
const name = 'Carson McKinstry';

// let is mutable
// again, block level scoped
let age = 24;

// this will fail
// name = "Patrick McKinstry";

// this will not
foo = 25;

// enhanced object literals
// declaring object properties just got easier
const carson = {
  name, // new property shorthand, with an already declared variable
  age,
  sayName: function () {
    return this.name; // new method shorthand
  },
};

// console.log(carson.sayName());

// template strings / interpolated strings
// use back-ticks `
// anything in ${} is evaluated
const greeting = `Hello, my name is ${carson.sayName()} and I am ${carson.age} years old.`;

// console.log(greeting);

// descructuring! My favorite
// you can now, pluck off individual values from objects and arrays
const myObject = {
  val1: 1,
  val2: 2,
};
const myArray = [3, 4];

const {
  val1,
  val2
} = myObject;
const [val3, val4] = myArray;

// console.log(val1, val2, val3, val4);

// Javascript classes

class Bird {
  constructor(legs, color) {
    this.legs = legs;
    this.color = color;
  }
}

// This is the equivalent of

function bird(legs, color) {
  this.legs = legs;
  this.color = color;
}

// default, rest, and spread

// defaults
function add(x, y = 1) { // this is a default, if y is not passed, or is undefined, it will default to 1
  return x + y;
}

// console.log(add(1));

// rest
function moreThanTwoArgument(x, ...y) { // this passes any additional arguments besides the first, as an array
  // console.log("y", y);
  // console.log("y is an array", y.length);

  return x + y.reduce(function (acc, n) {
    return acc + n;
  }, 0);
}

// console.log(moreThanTwoArgument(1, 2, 3, 4, 5, 6));

//spread
const myOtherObject = {
  foo: "bar",
  hello: "world"
}

// you can create a new object that contains the values of the original object
// unfortunately, this isn't fully supported yet. In node, it will fail in versions less than 8.5

// const myNewObject = {
//   ...myOtherObject,
//   newProperty: "new value"
// }

// console.log(myNewObject);

// This luckily does not force the new object to have a reference to the old object
// that is a much more advanced topic for this talk

// the same works for arrays!

const myOtherArray = ["a", "b", "c", "d"];

const myNewArray = [...myOtherArray, "e", "f", "g", "h"];

// console.log(myNewArray);

// Lets talk about functions

// traditionally functions can be created like this:

function squared(n) {
  return n * n;
}

// however, with ES6, you can now use "arrow" functions
// you've got a couple different ways to declare them
// with parentheses and curly braces
const cubed = (n) => {
  return n * n * n;
}

// or without either
const doubled = n => 2 * n; // this is called implicitly returning a value

// This is best seen as anonymous / callback functions

const sum = [1, 2, 3, 4, 5].reduce((acc, n) => acc + n, 0); // returns 15

// some gotchas, the "this" keyword is not bound to a function declared as an arrow function
// instead, it is bound to the context in which the function was written