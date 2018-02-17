/*
    
*/
document.querySelector('.dice').style.display = 'none';

let scores = [0, 0];
let current = 0;
let turn = 0;
let winner = -1;

function nextPlayer() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    turn = (turn === 0)?1:0;
}

function btn_roll() {
    if(winner !== -1) return;

    let point = Math.floor(Math .random() * 6) +1;
    let diceDom = document.querySelector('.dice');

    diceDom.src = 'dice-' + point + '.png';
    diceDom.style.display = 'block';

    if(point === 1) {
        current = 0;
        document.querySelector('.dice').style.display = 'none';
    } else {
        current += point;  
    }
    document.getElementById('current-' + turn).textContent = current;
    if(point ===1)
        nextPlayer();
}

function btn_hold() {
    if(current === 0 && winner !== -1) return;
    scores[turn] += current;
    document.getElementById('score-' + turn).textContent = scores[turn];
    current = 0;
    document.getElementById('current-' + turn).textContent = current;
    if(scores[turn] >= 100 && winner === -1) {
        winner = turn;
        document.getElementById('name-' + turn).textContent = 'Winner!';
    }
    nextPlayer();
}

function btn_new() {
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    winner = -1;
    turn = 0;
    current = 0;
    scores = [0, 0];
    
    
    for(let i = 0; i < 2; i++){
    document.getElementById('current-' + i).textContent = 0;
    document.getElementById('score-' + i).textContent = 0;
    }
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-roll').addEventListener('click', btn_roll);
document.querySelector('.btn-hold').addEventListener('click', btn_hold);
document.querySelector('.btn-new').addEventListener('click', btn_new);



