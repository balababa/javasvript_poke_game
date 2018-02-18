var scores, current, turn, winner;

init();

document.querySelector('.btn-roll').addEventListener('click', btn_roll);
document.querySelector('.btn-hold').addEventListener('click', btn_hold);
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    current = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
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
        nextPlayer();
    } else {
        current += point;  
        document.getElementById('current-' + turn).textContent = current;
    }
}

function btn_hold() {
    if(current === 0 || winner !== -1) return;
    scores[turn] += current;
    document.getElementById('score-' + turn).textContent = scores[turn];
    
    if(scores[turn] >= 100 ) {
        winner = turn;
        document.getElementById('name-' + turn).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + turn + '-panel').classList.add('winner');
        document.querySelector('.player-' + turn + '-panel').classList.remove('active');
        
        
    } else {
        nextPlayer();
    }
}

function init () {
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');    
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');  
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    scores = [0, 0];
    current = 0;
    turn = 0;
    winner = -1;
}





