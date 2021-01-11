'use strict';
console.log("Ready to Play");

const trivia = [
    {question: 'Which country will host the 2022 World Cup? \n(a)Spain \n(b)Italy \n(c)Qatar',
    answer: 'c'},
    {question: 'Which country has won the World Cup 5 times? \n(a)Germany \n(b)Brazil, \n(c)Italy',
    answer: 'b'},
    {question: 'last name of the player who has scored more goals in a single world cup? \n(a)Fontaine \n(b)Maradona \n(c)Beckenbauer',
    answer: 'a'},
    {question: 'last name of the player who has scored more goals in world cup competitions? \n(a)Pele \n(b)Messi \n(c)Klose',
    answer: 'c'},
    {question: 'which country won the first World Cup? \n(a)England \n(b)Brazil \n(c)Uruguay',
    answer: 'c'},
    {question: 'In what year was the world cup hosted by USA? \n(a)1990 \n(b)1994 \n(c)1998',
    answer: 'b'},
    {question: 'how many countries have won the World Cup? \n(a)7 \n(b)8 \n(c)10',
    answer: 'a'},
    {question: 'Year the first World Cup was held? \n(a)1918 \n(b)1930 \n(c) 1942',
    answer: 'b'},
    {question: 'how many times has Germany won the World Cup? \n(a)2 \n(b)3 \n(c)4',
    answer: 'c'},
    {question: 'nickname of the player that has won more World Cups? \n(a)Ronaldo \n(b)Messi \n(c)Pele',
    answer: 'c'}
]
console.log(trivia);
// const answers = [
//     'Qatar',
//     'Brazil',
//     'Fontaine',
//     'Klose',
//     'Uruguay',
//     '1994',
//     '7',
//     '1930',
//     '4',
//     'Pele'
// ]
// console.log(answers);


//Add event listener to display the questions
document.querySelector('#next').addEventListener('click', askQuestion);
let counter = 0;
function askQuestion (e) {
    e.preventDefault();
    console.log(e);
    console.log('inside askQuestion');
      
    document.querySelector('blockquote').textContent = trivia[counter].question;
    counter = counter + 1;
}
//Add event listener to manage correct and incorret answers
document.querySelector('#submit').addEventListener('click', answerHandler);

function answerHandler(e) {
    console.log('inside answerHandler');
    const response = document.querySelector('#answer').value;
    console.log(response, typeof response);
    const resp = response.toLowerCase();
    console.log(resp);
    console.log(trivia[counter].answer, typeof trivia[counter].answer);
    if (resp == trivia[counter].answer) {
        console.log('Correct Answer');
    } else {
        console.log('wrong answer');
    }

}
//Add function to start the game

document.querySelector('#start').addEventListener('click', startGame);

function startGame(e) {

}


// add event listener to buil reset button functionality
document.querySelector('#reset').addEventListener('click', resetButton);
function resetButton (e) {
    console.log('inside reset');
    counter = 0;
}


