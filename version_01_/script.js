
/*

 RESET OUTCOME RECORD BUTTON NEEDS MANAGING...

*/
const appName = [
    "ROCK, PAPER, SCISSORS", 
    "rock, paper, scissors"
];
document.title = appName[0];

let siteTitleAppNameRef = document.getElementById("s_t_s_h1");
siteTitleAppNameRef.innerHTML = appName[1];

const weapons = ["rock", "paper", "scissors"];

let weaponsTotal = weapons.length;

let botDecision = Math.floor(Math.random() * weaponsTotal);
let botWeapon = weapons[botDecision];

let yourPick = document.getElementById("clientPick");
let automated = document.getElementById("botPick");
let finalResult = document.getElementById("finalOutcome");

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

let battlePraiseRef = document.getElementById("battle_praise");
let battleGroundRef = document.getElementById("battle_ground");

const scores = {
    win : 0, 
    lose : 0, 
    tie : 0
};
const resultOptions = [
    "You Win...", 
    "You Lose...", 
    "It\'s a Tie..."
];
let clientWinTurnsRef = document.getElementById("winTurns");
let clientLooseTurnsRef = document.getElementById("looseTurns");
let clientTaggedTurnsRef = document.getElementById("taggedTurns");

let battleOverPraiseRef = document.getElementById("b_o_p_p");
let battleOverPraisePRef = document.getElementById("c_b_i_g_o_p");
battleGroundRef.style.display = "none";
battleOverPraisePRef.style.display = "none";

function pickWeapon(weapon){
    battlePraiseRef.style.display = "none";
    battleGroundRef.style.display = "flex";
    battleOverPraisePRef.style.display = "flex";

    let result = "";

    if(weapon === "rock"){
        if(botWeapon === "rock"){
            yourPick.innerHTML = "a rock";
            automated.innerHTML = "a rock";
            result = "It\'s a Tie...";
            battleOverPraiseRef.innerHTML = "The battle was cursed";
        }else if(botWeapon === "paper"){
            yourPick.innerHTML = "a rock";
            automated.innerHTML = "a piece of paper";
            result = "You Lose...";
            battleOverPraiseRef.innerHTML = "The battle was a feet for my side";
        }else{
            yourPick.innerHTML = "a rock";
            automated.innerHTML = "scissors";
            result = "You Win...";
            battleOverPraiseRef.innerHTML = "Opponent went home with blisters";
        };
    }else if(weapon === "paper"){
        if(botWeapon === "paper"){
            yourPick.innerHTML = "a piece of paper";
            automated.innerHTML = "a piece of paper";
            result = "It\'s a Tie...";
            battleOverPraiseRef.innerHTML = "The battles planning draft was shared";
        }else if(botWeapon === "rock"){
            yourPick.innerHTML = "a piece of paper";
            automated.innerHTML = "a rock";
            result = "You Win...";
            battleOverPraiseRef.innerHTML = "I flew as it happened";
        }else{
            yourPick.innerHTML = "a piece of paper";
            automated.innerHTML = "scissors";
            result = "You Lose...";
            battleOverPraiseRef.innerHTML = "I was sliced man";           
        };
    }else{
        if(botWeapon === "scissors"){
            yourPick.innerHTML = "scissors";
            automated.innerHTML = "scissors";
            result = "Its\'s a Tie...";
            battleOverPraiseRef.innerHTML = "What the F@*K..";
        }else if(botWeapon === "rock"){
            yourPick.innerHTML = "scissors";
            automated.innerHTML = "a rock";
            result = "You Lose...";
            battleOverPraiseRef.innerHTML = "That\'s not fair at all";
        }else{
            yourPick.innerHTML = "scissors";
            automated.innerHTML = "a piece of paper";
            result = "You Win...";
            battleOverPraiseRef.innerHTML = "Slice this be@ch*s";
        };
    };

    if(result === resultOptions[0]){
        scores.win += 1;
    }else if(result === resultOptions[1]){
        scores.lose += 1;
    }else{
        scores.tie += 1;
    };

    clientWinTurnsRef.innerHTML = scores.win;
    clientLooseTurnsRef.innerHTML = scores.lose;
    clientTaggedTurnsRef.innerHTML = scores.tie;
    finalResult.innerHTML = result;
};