/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
document.querySelector('.dice').style.display = 'none';
//document.querySelector('#name-0::after').style.content = 'none';
let scores = [0, 0];
let current = 0;
let turn = 0;
let winner = -1;

function btn_roll() {
    if(winner !== -1) return;

    let point = Math.floor(Math.random() * 6) +1;
    let diceDom = document.querySelector('.dice');

    diceDom.src = 'dice-' + point + '.png';
    diceDom.style.display = 'block';

    if(point === 1) {
        current = 0;
    } else {
        current += point;  
    }
    document.querySelector('#current-' + turn).textContent = current;
    if(point ===1)
        turn = (turn === 0)?1:0;
}

function btn_hold() {
    if(current === 0 && winner !== -1) return;
    scores[turn] += current;
    document.querySelector('#score-' + turn).textContent = scores[turn];
    current = 0;
    document.querySelector('#current-' + turn).textContent = current;
    if(scores[turn] >= 100 && winner === -1) {
        winner = turn;
        document.querySelector('#name-' + turn).textContent = 'Winner!';
    }
    turn = (turn === 0)?1:0;
    
}

function btn_new() {
    document.querySelector('#name-' + winner).textContent = 'PLAYER ' + (winner + 1);
    winner = -1;
    turn = 0;
    current = 0;
    scores = [0, 0];
    for(let i = 0; i < 2; i++){
    document.querySelector('#current-' + i).textContent = 0;
    document.querySelector('#score-' + i).textContent = 0;
    }
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-roll').addEventListener('click', btn_roll);
document.querySelector('.btn-hold').addEventListener('click', btn_hold);
document.querySelector('.btn-new').addEventListener('click', btn_new);



