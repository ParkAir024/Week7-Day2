//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const{pizza,tacos,burgers,ice_cream} = person3
console.log(...pizza, tacos,burgers,...ice_cream)
console.log(person3.shakes[0].oberwise, person3.shakes[0].dunkin, person3.shakes[0].culvers, person3.shakes[0].mcDonalds, person3.shakes[0].cupids_candies)
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
  this.name = name;
  this.age = age;

// Use an arrow to create the printInfo method

this.printInfo = () => {
  console.log(`
  name: ${this.name}
  age: ${this.age}
  `)
  }
 

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
this.addAge = (years) => {
  this.age += years;
};
}

const person1 = new Person('Parker', 28);
const person2 = new Person('Alex', 32);

person1.printInfo();
person2.printInfo();



person1.addAge(3);

person1.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkLength(str) {
    if (str.length > 10) {
      console.log("Big word");
    } else {
      console.log("Small Number");
    }
  }

  checkLength("WHATS UP MY G")
  checkLength("YO")