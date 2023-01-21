const readLineSync = require('readline-sync');
let kuler = require("kuler");

let userName = readLineSync.question("Enter your name : ");

console.log(kuler(`Hello ${userName} , Welcome to QUIZIFY !!!`, "#b91c1c"))