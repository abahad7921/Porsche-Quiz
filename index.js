
console.log("Welcome to Ultimate Porsche quiz")
console.log("")
console.log("")

console.log("enter a: for 1st option, b: for 2nd question, c: for 3rd option")
console.log("")
console.log("")


const chalk = require('chalk');
 
// console.log(chalk.blue('Hello world!'));
var readlineSync = require('readline-sync')


var score = 0;
var highscore = 0;  //highscore will be updated by the admin manually
var previousHighscorer = "null"


var currrentUser = readlineSync.question("What is your name? ")
var questions = [{
  que:"Who is the founder of Porsche? ",
  op1: "Ferdinand Porsche",
  op2: "Andrew K Porsche",
  op3: "Adolf M Porsche"
},{
  que:"When was Porsche founded? ",
  op1: "1931",
  op2: "1930",
  op3: "1932"
},{
  que:"Origin place of Porssche? ",
  op1: "Stuttgart, Germany",
  op2: "Hamburg",
  op3: "Mecklenburg-Vorpommern"
  
},{
  que:"Which company owns Porsche currently? ",
  op1: "Volkswagen AG",
  op2: "BMW",
  op3: "Mclaren Automobiles"
},{
  que:"Most popular Porsche? ",
  op1:"911",
  op2:"Taycan",
  op3:"718 Boxter"
}]

// for(var i = 0; i<questions.length; i++) 
//   console.log(questions[i])

function askQuestions(question,desiredAnswer,index)
{
  // var userAnswer = readlineSync.question(question);
  console.log(chalk.blue(question))
  
  console.log(chalk.green("a. "+ questions[i].op1))
  console.log(chalk.green("b. "+ questions[i].op2))
  console.log(chalk.green("c. "+ questions[i].op3))

  var userAnswer = readlineSync.question();
  if(userAnswer === desiredAnswer)
  {
    score++;
  }

  console.log("")


}

for(var i = 0 ; i<questions.length; i++)
{
  askQuestions(questions[i].que,'a',i)
}
// console.log("previous highscore is: "+ highscore)
if(score > highscore)
{
  console.log("Congrats!!! you have beaten the highscore")
  console.log("Please ask admin to update the highscore and the previous highscorer to yours <3")
  highscore = score 
  previousHighscorer = currrentUser
  console.log("your score is: "+ score)
}
else{
    if(previousHighscorer!="null")
    {
        console.log("Current highscorer is "+ previousHighscorer)
    }
    console.log("your score is: "+ score);
}
