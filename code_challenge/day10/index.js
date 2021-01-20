const main = document.querySelector(".js-main"),
    header = main.querySelector(".js-main__header"),
    range = main.querySelector(".js-main__range"),
    guess = main.querySelector(".js-main__guess"),
    choice = main.querySelector(".js-main__choice");

const yourChoice = document.createElement("span");
const machineChoice = document.createElement("span");
const result = document.createElement("div");

let maxNumber = 10;
let randomNumber = 0;

function changeHandle() {
    maxNumber = parseInt(range.value);
    header.innerText = `Generate a number between 0 and ${maxNumber}`;
}
function clickHandle() {
    randomNumber = genRandom();
    paintChoice();
}

function paintChoice() {
    const input = guess.querySelector("input");
    const yourNumber = input.value;
    yourChoice.innerText = `You chose : ${yourNumber}, `;
    machineChoice.innerText = `the machine chose: ${randomNumber}`;
    if (parseInt(yourNumber) === randomNumber) {
        result.innerHTML = '<strong>You win!</strong>'
    } else {
        result.innerHTML = '<strong>You lost!</strong>'
    }

    choice.appendChild(yourChoice);
    choice.appendChild(machineChoice);
    choice.appendChild(result);
}
function paintGuess() {
    const play = guess.querySelector("button");
    play.addEventListener("click", clickHandle);
}

function paintHeader() {
    range.addEventListener("change", changeHandle);
}
function genRandom() {
    const number = Math.floor(Math.random() * (maxNumber+1));
    return number;
}

function init() {
    paintHeader();
    paintGuess();
}
init();