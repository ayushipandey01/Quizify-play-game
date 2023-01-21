const readLineSync = require('readline-sync');
let kuler = require("kuler");

let userName = readLineSync.question("Enter your name : ");

console.log(kuler(`Hello ${userName} , Welcome to QUIZIFY !!!`, "#b91c1c"))

let score = 0;
const database = {
  data: [
    {
      question: `let a = {} , b = {} 
    console.log(a==b)
    console.log(a===b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      answer: "a"
    },
    {
      question: `Object.assign(target , source) creates which type of copy ? `,
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference"
      },
      answer: "b"
    },
    {
      question: `Is method chaining possible for forEach() method ?`,
      options: {
        a: "Yes",
        b: "No"
      },
      answer: "b"
    },
  ]
}

const leaderBoard = {
  data: [
    {
      name: "Jyoti",
      score: 1,
    },
    {
      name: "Nidhi",
      score: 0,
    },
    {
      name: "Arnav",
      score: 2,
    },
  ]
}

function playGame(userInput, correctAnswer) {
  if (userInput === correctAnswer) {
    console.log(kuler("\nCorrect Answer !", "#84cc16"));
    score++;
  }
  else {
    console.log(kuler("\nWrong Answer !!!", "#b91c1c"));
    console.log(kuler(`Correct Answer is "${correctAnswer}"`, "#84cc16"))
  }
}

function highScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\n 🙌🙌------- Leader Board Scores ------- 🙌🙌" , "#38bdf8"));
  for (let leader of sortedScoreList) {
    console.log(`${leader.name} , Score : ${leader.score}`);
  }
}


function showQuestionsAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1}- ${database.data[i].question} \n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`)
    }
    let userInput = readLineSync.question("\nWhat is the right answer : ").toLocaleLowerCase();

    playGame(userInput, database.data[i].answer);

    // for(let key in database.data[i].answer)
    // if(userInput === database.data[i].answer){
    //   console.log("\nCorrect Answer !")
    //   score++;
    //   console.log("Score is : " , score);
    // }
    // else{
    //   console.log("\nWrong Answer !!!")
    //   console.log("Score is : " , score);
    // }
  }
}

showQuestionsAndOptions(database);

console.log(kuler("\nYour Score is : ", "#ec4899"),score );

highScorer(leaderBoard);