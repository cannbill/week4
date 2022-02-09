
//Linked to node2.js const's using module.exports

const someFunctions = require("./node2");

const {add} = require("./node2");
const osObj = require("os");
const fsObj = require("fs");

const _ = require("lodash");
const { random } = require("lodash");

let array = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

let first, second, third, everythingElse;

[first, second, third, ...everythingElse] = array;

console.log(first)

console.log(someFunctions);
console.log(someFunctions.add(1, 2));

console.log(add(2, 5));

console.log(osObj);
console.log(fsObj);

let userData = osObj.userInfo().username;

fsObj.appendFile("example.txt", `The username is ${userData}`, (error) => {
    if(error) {
        console.log("Oh Shit!")
    }
})

console.log(userData);

// lodash shiz below

let myRandom = _.random(1, 60);

console.log(myRandom);

