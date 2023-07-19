const readline = require('readline');

const questionBank = {
    0: 'What\'s your name?',
    1: 'What\'s an activity you like doing?',
    2: 'What do you listen to while doing that?',
    3: 'Which meal is your favourite?',
    4: 'What\'s your favourite thing to eat for that meal?',
    5: 'Which sport is your absolute favourite?',
    6: 'What is your superpower? In a few words, tell us what you are amazing at!'
}

const answerBank = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: ""
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let x = 0;

const questions = function() {
    if (x < 7) {
        rl.question(`${questionBank[x]}: `, (answer) => {
            answerBank[x] = answer;
            x++;
            console.log();
            questions()
        });
    }
    else {
        rl.close()
        console.log("This is your new profile: ");
        setTimeout(() => {
            console.log(`${answerBank[0]} likes ${answerBank[1]}, and likes to listen to ${answerBank[2]} while doing activities. ${answerBank[0]} likes eating ${answerBank[4]} after their favourite meal ${answerBank[3]}. ${answerBank[0]} likes to play ${answerBank[5]}, and their superpower is ${answerBank[6]}.`)
        }, 1500);
    }
}
questions();
