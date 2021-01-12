"use strict"

import {User} from "./User";
import {Question} from "./Question";
const $userName:string = prompt("What is your name?");
const $user:User=new User($userName);
alert("welcome "+$user);

const question:Question[]=[];
question.push(new Question('Which Operator has the higher priority: * or + ?','*'));

LOOP:while (true){

    let  $query:string= prompt("are you fit enough to start the quiz?[yes/no]")
    if ($query.trim().includes("yes")){
        alert('let´s play dude');
        let $index:number= (Math.random() * question.length);

        let $fightOne:string = prompt(question[$index].question);
        if($fightOne.includes(question[$index].answer)){
            alert("right")
        }
        else
        {
            alert("false");
        }
    }
    else if($query.trim().includes('no')){
        alert('cowardly');
    }
    else{
        $query= prompt('please write yes/no\nif you want to exit the menu [e]');
        if($query.includes('e')){
            break LOOP;
        }
    }
}

