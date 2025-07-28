// let js = "amazing";
// console.log(40+8+23-10);

// // Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Hugo";
// console.log(firstName);


// const country = "Colombia";
// const continent = "America";
// let population = 50000000;
// const isIsland = false;
// const language = "";
// let finlandPopulation = 6000000;
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// console.log(country / 2);

// population++;

/*let finlandPopulation = 6000000;
let population = 50000000;


if (population > finlandPopulation){
    console.log("That is true.")
} else {
    console.log("That is false.")
};
*/


// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x ++; // x = x + 1
// x --; // x = x - 1
// x --; // x = x - 1
// console.log(x);

// Comparison operators
// console.log(ageJones > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; //x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);


// CHALLENGE PART 1
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

/*const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I´m " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I´m ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);*/


// TAKING DECISIONES: IF/ELSE STATEMENTS.

// const age = 15;
// const isOldEnough = 18;

// if (age >= isOldEnough) {
//     console.log(`Sarah is ${age}, and can start driving license 😎`)
// } else {
//     console.log(`Sarah is ${age}, she can´t start driving license 🥲`)
// };


// const favorite = Number(prompt("What´s your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log("Cool! 23 is an amazing number!")
// } else if (favorite === 7) {
//     console.log("7 is a cool number")
// } else if (favorite === 9) {
//     console.log("7 is a cool number")
// } else {
//     console.log("Number si not 23 or 7 or 9")    
// }


// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(shouldDrive) {
// //     console.log(`Sarah is able to drive!`);
// // } else {
// //     console.log(`Somone else should drive...`);
// // }

// const isTired = true; //C
//     console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }


// SWITCH STATEMENT

const day = "oiqwjodi";

// switch(day) {
//     case "monday": //day === "monday"
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");        
// }

// if (day === "monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");

// } else if (day === "tuesday") {
//     console.log ("Prepare theory videos");

// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");

// } else if (day === "friday") {
//     console.log("Record videos");

// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend 😊");

// } else {
//     console.log("Not a valid day.");
// }


// const age = 23;

// age >= 18 ? console.log("I like to drink wine 🍷") : ("I like to drink wine 💧");

// const drink = age >= 18 ? "wine 🍷" : "wine 💧";
// console.log(drink);


// let drink2;
// if(age >= 18) {
//     drink2 = "wine 🍷";
// } else {
//     drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "wine 💧"}`);


// const bill = 400;



// /* Write your code below. Good luck! 🙂 */

// let tip1 = bill*20/100;
// let tip2 = bill*15/100;

// let total = bill >= 50 && bill <= 300 ? `The 15% of the Tip will be ${tip1}` : `The 20% of the Tip will be ${tip2}`;
// console.log(total);


const bill = 275;



/* Write your code below. Good luck! 🙂 */

let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 2.0;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);






