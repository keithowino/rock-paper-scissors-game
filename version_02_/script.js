
"use strict";

const appName = [
    "ROCK, PAPER, SCISSORS", 
    "rock, paper, scissors"
];
document.title = appName[0];

let siteTitleAppNameRef = document.getElementById("s_t_s_h1");
siteTitleAppNameRef.innerHTML = appName[1];

let clientWeaponPickRef = document.getElementById("clientPick");
let botWeaponPickRef = document.getElementById("botPick");
let battleOutcomeRef = document.getElementById("finalOutcome");

let battleGroundRef = document.getElementById("battle_ground");
battleGroundRef.style.display = "none";
let battlePraiseRef = document.getElementById("battle_praise");

const battlePraiseOptions = [
    "Justice was written on paper.", 
    "Slice that bandit.", 
    "Hail will rain."
];

let battlePraiseOptionsTotal = battlePraiseOptions.length;
let battlePraiseOption = Math.floor(Math.random() * battlePraiseOptionsTotal);
let battlePraiseDecision = battlePraiseOptions[battlePraiseOption];

let battlePraisePRef = document.getElementById("b_p_p");
battlePraisePRef.innerHTML = battlePraiseDecision;

let battleOverPraisePRef = document.getElementById("bragText");
battleOverPraisePRef.style.display = "none";
let battleOverPraiseRef = document.getElementById("bragText_s");

let clientWinTurns = document.getElementById("winTurns");
let clientLoosingTurns = document.getElementById("looseTurns");
let clientTagTurns = document.getElementById("taggedTurns");

const outcomeOptions = [
    "You Won...", 
    "You Loosed...", 
    "It\'s a Tie..."
];

const battleOverPraiseOptions = [
    "That\'s not fair at all", 
    "Slice this be@ch*s", 
    "What the F@*K..", 
    "I flew as it happened", 
    "The battles planning draft was shared", 
    "I was sliced man", 
    "The battle was cursed", 
    "The battle was a feet for my side", 
    "Opponent went home with blisters"
];

// HERE WE'VE USED THE TRUTHY AND FALSY SHORTCUT METHOD

let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0, 
    losses : 0, 
    tie : 0
};

/*
    FOR REFERENCE if score = null

if(score === null){
    score = {
        wins : 0, 
        losses : 0, 
        tie : 0
    };
};

*/

function playGame(playerMove){
    battleGroundRef.style.display = "flex";
    battlePraiseRef.style.display = "none";
    battleOverPraisePRef.style.display = "flex";

    const computerMove = pickComputerMove();

    let result = '';
    let battleOverPraiseOption = "";

    if(playerMove === "scissors"){
        if(computerMove === 'a rock'){
            result = outcomeOptions[1];
            battleOverPraiseOption = battleOverPraiseOptions[0];
        }else if(computerMove === 'a piece of paper'){
            result = outcomeOptions[0];
            battleOverPraiseOption = battleOverPraiseOptions[1];
        }else{
            result = outcomeOptions[2];
            battleOverPraiseOption = battleOverPraiseOptions[2];
        };
    }else if(playerMove === "a piece of paper"){
        if(computerMove === 'a rock'){
            result = outcomeOptions[0];
            battleOverPraiseOption = battleOverPraiseOptions[3];
        }else if(computerMove === 'a piece of paper'){
            result = outcomeOptions[2];
            battleOverPraiseOption = battleOverPraiseOptions[4];
        }else{
            result = outcomeOptions[1];
            battleOverPraiseOption = battleOverPraiseOptions[5];
        };
    }else{
        if(computerMove === 'a rock'){
            result = outcomeOptions[2];
            battleOverPraiseOption = battleOverPraiseOptions[6];
        }else if(computerMove === 'a piece of paper'){
            result = outcomeOptions[1];
            battleOverPraiseOption = battleOverPraiseOptions[7];
        }else{
            result = outcomeOptions[0];
            battleOverPraiseOption = battleOverPraiseOptions[8];
        };
    };

    if(result === outcomeOptions[0]){
        score.wins += 1;
    }else if(result === outcomeOptions[1]){
        score.losses += 1;
    }else{
        score.tie += 1;
    };

    let scoreToJson = JSON.stringify(score);

    localStorage.setItem('score', scoreToJson);

    clientWeaponPickRef.innerHTML = playerMove;
    botWeaponPickRef.innerHTML = computerMove;
    battleOutcomeRef.innerHTML = result;
    battleOverPraiseRef.innerHTML = battleOverPraiseOption;
    clientWinTurns.innerHTML = score.wins;
    clientLoosingTurns.innerHTML = score.losses;
    clientTagTurns.innerHTML = score.tie;
};

function pickComputerMove(){
    const weapons = ["a rock", "a piece of paper", "scissors"];
    let weaponsTotal = weapons.length;
    let randomWeaponDecision = Math.floor(Math.random() * weaponsTotal);
    let computerMove = weapons[randomWeaponDecision];
    return computerMove;
};