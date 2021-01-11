'use strict';
console.log("Ready to Play");

const questions = [
    'Which country will host the 2022 World Cup?',
    'Which country has won the World Cup 5 times?',
    'last name of the player who has scored more goals in a single world cup?',
    'last name of the player who has scored more goals in world cup competitions?',
    'which country won the first World Cup?',
    'In what year was the world cup hosted by USA?',
    'how many countries have won the World Cup?',
    'Year the first World Cup was held?',
    'how many times has Germany won the World Cup?',
    'nickname of the player that has won more World Cups?'
]
console.log(questions);
const answers = [
    'Qatar',
    'Brazil',
    'Fontaine',
    'Klose',
    'Uruguay',
    '1994',
    '7',
    '1930',
    '4',
    'Pele'
]
console.log(answers);

//Add event listener to display the questions
document.querySelector('#next').addEventListener('click', askQuestion);
let counter = 0;
function askQuestion (e) {
    e.preventDefault();
    console.log(e);
    console.log('inside askQuestion');
      
    document.querySelector('blockquote').textContent = questions[counter];
    counter = counter + 1;
}




