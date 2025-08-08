"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;

// if(hasDriversLicense) console.log('I can drive :D');

// const interface = "Audio";
// const private = 534;

// function logger() {
//   console.log("My name is Hugo");
// }

// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// // Function declaration
// function calcAge1(birthYear) {
//     // const age = 2037 - birthYear;
//     return 2037 - birthYear;
// }

// const age1 =calcAge1(1993);
// // console.log(age1);

// // Function expression
// const calcAge2 =function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1993);

// console.log(age1, age2);

// // Function declaration
// function calcAge1(birthYear) {
//     // const age = 2037 - birthYear;
//     return 2037 - birthYear;
// }

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 =calcAge3(1993);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Hugo"));
// console.log(yearsUntilRetirement(1980, "Luis"));

//  FUNCTION CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge (birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years 🎉`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🎉`);
//       return -1;
//     }

//     return retirement;
//     // return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1993, "Hugo"));
// console.log(yearsUntilRetirement(1948, "Luis"));

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 =calcAge3(1993);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`;
// }

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 =calcAge3(1993);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`;
// }

// _________________________________________________________________
// const calcAverage = (scoreDolphins, scoreKoalas) => {
//   const checkWinner = (44 + 23 + 71);
//   return calcAverage;
// }
// calcAverage();

// const calcAverage = (scoreDolphins, scoreKoalas) => {
//   const scoreDolphins = (44 + 23 + 71) /3;
//   const scoreKoalas = (85 + 54 + 41) /3;
//   const avgScore = scoreDolphins - scoreKoalas;
//   return avgScore;
// }
// calcAverage();

// function checkWinner() {
//   const avgDolphins = 44 + 23 + 71;
//   const avgKoalas = 85 + 54 + 41
//   return data1;
// }

// Right one

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// let scoreDolphins = calcAverage (44, 23, 71);
// let scoreKoalas = calcAverage (65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if(avgDolphins >= 2 * avgKoalas){
//     console.log(`Dolphins win 🐬 (Dolphins = ${avgDolphins} vs Koalas = ${avgKoalas})`);
//   } else if(avgKoalas >= 2 * avgDolphins){
//     console.log(`Team Koalas win 🐨 (Koalas = ${avgKoalas} vs Dolphins = ${avgDolphins})`);
//   } else {
//     console.log("No team wins..... 😒")
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins2 = calcAverage (85, 54, 41);
// scoreKoalas2 = calcAverage (23, 34, 27);

// checkWinner(scoreDolphins2, scoreKoalas2);

// ARRAYS

/*const friends = ["Michael", "Steven", "Peter"];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];


const firstName = "Hugo";
const jonas = [firstName, "Ramirez", 2037 - 1993, "teacher", friends];
console.log(jonas);

console.log(friends[0])

// Excercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
const friends = ["Michael", "Steven", "Peter"];

// Add Elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
    console.log(`You have a friend called Steven.`);
}*/

// CHALLENGE #2
/*
const calcTip = bills => {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
*/

// OBJECTS AND PROPERTIES
/*
const hugosArray = [
    "Hugo",
    "Ramirez",
    2037 - 1993,
    "teacher",
    ["Michael", "Steven", "Peter"]
];

const hugo = {
    firstName: "Hugo",
    lastName: "Ramirez",
    age: 2037 - 1993,
    job: "teacher",
    friends: ["Michael", "Steven", "Peter"]
};
*/
/*
const hugo = {
    firstName: "Hugo",
    lastName: "Ramirez",
    age: 2037 - 1993,
    job: "teacher",
    friends: ["Michael", "Steven", "Peter"],
    petName: "Canela"
};
// console.log(hugo);
// console.log(hugo.lastName);
// console.log(hugo["lastName"]);

const nameKey = "Name";
// console.log(hugo["first" + nameKey]);
// console.log(hugo["last" + nameKey]);
// console.log(hugo["pet" + nameKey]);

const interestedIn= prompt(`What do you want to know about Jonas? Choose between firstName, lasName, age, job and friends`).toLocaleLowerCase();

console.log(hugo[interestedIn]);

if (hugo[interestedIn]) {
    console.log(hugo[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lasName, age, job, friends and petName");
}

hugo.location = "Colombia";
hugo["Twitter"] = "@hugoramirez";
console.log(hugo);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael."

// const firstName = hugo.firstName;
// const friends = hugo.friends;

console.log(`${hugo.firstName} has ${hugo.friends.length} friends, and his best friend is called ${hugo.friends[0]}.`);
*/

/*

const hugo = {
  firstName: "Hugo",
  lastName: "Ramirez",
  birthYear: 1993,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  // }

  //     calcAge: function () {
  //         // console.log(this);
  //     return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver´s license.`;
  },
};

console.log(hugo.calcAge());

console.log(hugo.age);
console.log(hugo.age);
console.log(hugo.age);

// console.log(hugo["calcAge"](1993));

// CHALLENGE
// "Hugo is a 44-year old teacher, and he has a drivers license."
console.log(hugo.getSummary());

*/

// CHALLENGE #3
/*
let markKgs = 78;
let markHeight = 169 / 100;
let johnKgs = 92;
let johnHeight = 188 / 100;

let markHeightTotal = markHeight * markHeight;
let markBMI = (markKgs / markHeightTotal);

let johnHeightTotal = johnHeight * johnHeight;
let johnBMI = (johnKgs / johnHeightTotal);

console.log ("The BMI of Mark is " + markBMI);
console.log ("The BMI of John is " + johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

if (johnBMI > markBMI) {
    console.log ("Jhon has more BMI than Mark.")
} else {
    console.log ("Mark has more BMI than Jhon.")
}; */
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi
  },
};

mark.calcBMI();
john.calcBMI();

const getSummary = function () {
    if (john.bmi > mark.bmi) {
        return `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`
    } else if (john.bmi < mark.bmi) {
        return `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`
    } else {
        `${john.fullName} and ${mark.fullName} BMI are exactly the same.` 
    }
};


console.log(getSummary());

/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

const getSummary = function () {
  if (mark.bmi > john.bmi) {
    return `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`;
  } else if (john.bmi > mark.bmi) {
    return `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`;
  } else {
    return `${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`;
  }
};

console.log(getSummary());
*/

// const john = {
//   fullName: "John",
//   mass: 27.3,
//   height: 1.88,

//   calcBMIJohn: function () {
//     return this.mass / (this.height * this.height);
//   },

//   getSummary: function () {
//     return `John Smith´s BMI (${this.calcBMIJohn()} is higher than Mark Miller´s (${this.calcBMIMark()}).`
//   },
// };

// console.log(mark.calcBMIMark());
/*
const john = {
    fullName: "John",
    mass: 26,
    height 1.88,
};
*/



// LOOP

// for loop keeps running while condition is TRUE.
// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// const hugo = {
//     firstName: "Hugo",
//     lastName: "Ramirez",
//     age: 2037 - 1993,
//     job: "teacher",
//     friends: ["Michael", "Steven", "Peter"],
//     petName: "Canela"
// };


// const hugo = [
//     "Hugo",
//     "Ramirez",
//     2037 - 1993,
//     "teacher",
//     ["Michael", "Steven", "Peter"],
//     true,    
// ];
/*
const types = []

for (let i = 0; i < hugo.length; i++) {
    // Reading from jonas array
    console.log(hugo[i], typeof hugo[i]);

    // types[i] = typeof hugo[i];

    // filling types array
    // types [0] = "string";
    types.push(typeof hugo[i]);
}

console.log(types);
*/
/*
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);




// CONTINUE AND BREAK
console.log("---- ONLY STRINGS ----")
for (let i = 0; i < hugo.length; i++) {
    if (typeof hugo[i] !== "string") continue;
    console.log(hugo[i], typeof hugo[i]);
}

console.log("---- BREAK WITH NUMBER ----")
for (let i = 0; i < hugo.length; i++) {
    if (typeof hugo[i] === "number") break;
    console.log(hugo[i], typeof hugo[i]);
}
 */

// REVERSE LOOP 
const hugo = [
    "Hugo",
    "Ramirez",
    2037 - 1993,
    "teacher",
    ["Michael", "Steven", "Peter"],
    true,    
];

// for (let i = hugo.length - 1;i >= 0; i--){
//   console.log(i, hugo[i]);
// }

// for (let excercise = 1; excercise <= 3; excercise++){
//   console.log(`-------- Starting excercise ${excercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Excercise ${excercise} Lifting weight repetition ${rep} 🏋️`)
//   }
// }


// WHILE LOOP

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6){
//     console.log(`Loop is about to end...`);
//   }
// };

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const arr = [];

let calcAverage = function(arr) {
  let   
}




