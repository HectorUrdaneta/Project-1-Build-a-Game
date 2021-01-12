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
    {question: 'name of the player that has won more World Cups? \n(a)Ronaldo \n(b)Messi \n(c)Pele',
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
                                                              
//Add event listener to manage correct and incorret answers
let counter = 0;
let score = 0;
document.querySelector('#submit').addEventListener('click', answerHandler);

function answerHandler(e) {
    e.preventDefault();
    //console.log('inside answerHandler');
    const response = document.querySelector('#answer').value;
    const resp = response.toLowerCase();
    
    if (resp == trivia[counter].answer && counter < trivia.length) {
        score = score + 1;
        counter = counter + 1;
        console.log(score, counter);
        document.querySelector('h2').textContent = `Score: ${score} out of 10`;
        if (counter < trivia.length) {
        document.querySelector('blockquote').textContent = trivia[counter].question;
        }
        console.log('Correct Answer');
    } else {   
        counter = counter + 1;
        console.log('Wrong answer');
        if (counter < trivia.length) {
        document.querySelector('blockquote').textContent = trivia[counter].question;
        }
    }
    if (counter === trivia.length) {
        if (score >= 9) {
        document.querySelector('blockquote').textContent = `GAME OVER! You're an expert with a scored ${score} out 10`;
        } else if (score <= 8 && score >=5) {
            document.querySelector('blockquote').textContent = `GAME OVER! You're pretty good with a scored ${score} out 10`;    
        } else if (score < 5) {
            document.querySelector('blockquote').textContent = `GAME OVER! Need to read more soccer trivia, you scored ${score} out 10`;
        }
        return;
    }

}
//Add function to start the game

document.querySelector('#start').addEventListener('click', startGame);

function startGame(e) {
    document.querySelector('blockquote').textContent = trivia[counter].question;
    //askQuestion(e);
    document.querySelector('#start').style.display = 'none';
    //document.querySelector('form').style.display = 'block';
    // document.querySelector('#next').style.display = 'none';
}


// add event listener and build reset button functionality
document.querySelector('#reset').addEventListener('click', resetButton);
function resetButton (e) {
    console.log('inside reset');
    score = 0;
    counter = 0;
    document.querySelector('#start').style.display = 'block';
    document.querySelector('blockquote').textContent = 'Game On!'
    document.querySelector('h2').textContent = `Score: ${score} out of 10`;
    //reset visuals
    //document.querySelector('form').style.display = 'none';
    //document.querySelector('#next').style.display = 'none';

}


