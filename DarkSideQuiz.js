"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Question_1 = require("./Question");
const $userName = prompt("What is your name?");
const $user = new User_1.User($userName);
alert("welcome " + $user);
const question = [];
question.push(new Question_1.Question('Which Operator has the higher priority: * or + ?', '*'));
LOOP: while (true) {
    let $query = prompt("are you fit enough to start the quiz?[yes/no]");
    if ($query.trim().includes("yes")) {
        alert('let´s play dude');
        let $index = (Math.random() * question.length);
        let $fightOne = prompt(question[$index].question);
        if ($fightOne.includes(question[$index].answer)) {
            alert("right");
        }
        else {
            alert("false");
        }
    }
    else if ($query.trim().includes('no')) {
        alert('cowardly');
    }
    else {
        $query = prompt('please write yes/no\nif you want to exit the menu [e]');
        if ($query.includes('e')) {
            break LOOP;
        }
    }
}
//# sourceMappingURL=DarkSideQuiz.js.map