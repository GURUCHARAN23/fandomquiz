var readlineSync = require("readline-sync");

const chalk = require('chalk');
const ry = chalk.bold.blueBright;
const wr = chalk.bold.redBright;

var score=0;

var userName = readlineSync.question(chalk.bgRed("welcome Buddy, May I know your name ?"));

console.log(chalk.bgBlue("Hi " + userName + " this is a short quiz"));
console.log(chalk.yellow("please select a category...and note that the input is case sensitive"));

var cateGory = readlineSync.question("select a category from cricket, football, history, environment    ::")

if(cateGory!=="cricket"||"football"||"history"||"environment"){
  console.log("enter valid category")
  var cateGory = readlineSync.question("select a category from cricket, football, history, environment    ::")
}


if(cateGory==="cricket"){
    function play(question, answer){
    var userAnswer = readlineSync.question(question);

    if(userAnswer===answer){
      console.log(ry("right!"));
      score=score+1;
    }else{
      console.log(wr("wrong"));
    }
    console.log("------------------");
  }
  var questions =[ {
    question:chalk.white.bgBlue( "what is the distance between the popping crease and the bowling crease in feet  ? "),
    answer:"4"
  },{
    question:chalk.yellow("what was the official name of first world cup  ?"),
    answer:"prudential world cup"
  },{
    question:chalk.blue( "who won the max sixes award in 2008 IPL ? "),
    answer:"sanath jayasuriya"
  },{
    question: chalk.green("which national team are called as Baggy Greens  ? "),
    answer:"australia"
  },{
    question: chalk.cyan("In which year was overarm bowling first accepted as legal ? "),
    answer:"1864"
  }];

  for (var x=0;x<questions.length;x++){
    var cQ=questions[x];
    play(cQ.question,cQ.answer);
  }
}else if(cateGory==="football"){
    function play(question, answer){
    var userAnswer = readlineSync.question(question);

    if(userAnswer===answer){
      console.log(ry("right!"));
      score=score+1;
    }else{
      console.log(wr("wrong"));
    }
    console.log("------------------");
  }
  var questions =[ {
    question: chalk.red("who were liverpool's first opponents in the football league  ? "),
    answer:"middlesbrough ironopolis"
  },{
    question:chalk.green("where was the 2006 champions league final held  ?"),
    answer:"paris"
  },{
    question: chalk.yellow("what is the highest no of goals that FC Barcelona has scored in a league season  ? "),
    answer:"116"
  },{
    question:chalk.blue( "who won the premier league 2012-13 season  ? "),
    answer:"manchester united"
  },{
    question: chalk.magenta("who were the first host nation to go out in the first round of the world cup ? "),
    answer:"south africa"
  }];

  for (var x=0;x<questions.length;x++){
    var cQ=questions[x];
    play(cQ.question,cQ.answer);
  }
}else if(cateGory==="history"){
    function play(question, answer){
    var userAnswer = readlineSync.question(question);

    if(userAnswer===answer){
      console.log(chalk.red("right!"));
      score=score+1;
    }else{
      console.log(wr("wrong"));
    }
    console.log("------------------");
  }
  var questions =[ {
    question: chalk.cyan("which nation was neutral in WW1  ? "),
    answer:"norway"
  },{
    question:chalk.redBright("which weapon was first used at the battle of the somme in WW1  ?"),
    answer:"tank"
  },{
    question: chalk.greenBright("How many republics made the former soviet union ? "),
    answer:"15"
  },{
    question: chalk.yellowBright("when was the first noble prize in economics awarded? "),
    answer:"1969"
  },{
    question: chalk.blueBright("Of what country was Simon Bolivar president ? "),
    answer:"peru"
  }];

  for (var x=0;x<questions.length;x++){
    var cQ=questions[x];
    play(cQ.question,cQ.answer);
  }
}else if(cateGory==="environment"){
    function play(question, answer){
    var userAnswer = readlineSync.question(question);

    if(userAnswer===answer){
      console.log(ry("right!"));
      score=score+1;
    }else{
      console.log(wr("wrong"));
    }
    console.log("------------------");
  }
  var questions =[ {
    question:chalk.cyanBright(" which day of April is earth day ? "),
    answer:"22"
  },{
    question:chalk.whiteBright("The first world environment ay was held in which year  ?"),
    answer:"1974"
  },{
    question:chalk.blue( " which country hosted the Environment day in 2020 ? "),
    answer:"colombia"
  },{
    question: chalk.red("Under which theme ,India in 2018 hosted the celebration of world environment day  ? "),
    answer:"beat plastic pollution"
  },{
    question: chalk.yellow(" what is the theme of world environment day in 2020? "),
    answer:"biodiversity"
  }];

  for (var x=0;x<questions.length;x++){
    var cQ=questions[x];
    play(cQ.question,cQ.answer);
  }
}


  
var hScore=5;
if(score>=hScore){
  console.log("you are the highest scorer with score of ",score);
  console.log("send me a screenshot for updating the score");
}else{
  console.log(chalk.bold("YOUR score is ", score ));
}
