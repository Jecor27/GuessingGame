//let value = prompt('testpage')
let words = [{
    answer: "Bird",
    hints:["animal","hint2","hint3"]
},
{
    answer: "dog",
    hints:["animal","hint2","hint3"]
},
{
    answer: "cat",
    hints:["animal","hint2","hint3"]
}
]

let randomNumber = Math.floor(Math.random() * words.length)
let randomword = words[randomNumber];
let correctAnswer = randomword.answer;
let userGuess = "";
//userGuess = prompt("Guess the word!")

for (let i = 1; i < 4; i++){
    userGuess = prompt("Guess the word!")

}


//console.log(correctAnswer)
