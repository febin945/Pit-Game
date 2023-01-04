`use strict`
//selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0el = document.getElementById(`current--0`);
const current1el = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnHold = document.querySelector(`.btn--hold`);
const btnRoll = document.querySelector(`.btn--roll`);
let scores, currentscore, activePlayer, playing;
//starting conditions


const init = function(){
    playing = true;
     scores = [0,0];
     currentscore = 0;
     activePlayer = 0;

  
    score0El.textContent = `0`;
    score1El.textContent = `0`;
    current0el.textContent = `0`;
    current1el.textContent = `0`;
    diceEl.classList.add('hidden');

    player0El.classList.remove(`player--winner`);
    player1El.classList.remove(`player--winner`);
    player0El.classList.add(`player--active`);
    player1El.classList.remove(`player--active`);

}
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0 
    currentscore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
}
//roling dice functionality

btnRoll.addEventListener(`click`,function(){
if(playing){
    //1.Generate a random number.
let dice = Math.trunc(Math.random()*6+1);
console.log(dice)
    //2.Display dice.
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png` 
 //3.Check wether the number is one if (true) switch the player
 if(dice !== 1){
currentscore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentscore
 } else{
    //switch the user
switchPlayer()
} 
}
});
btnHold.addEventListener(`click`,function(){
    if(playing){
    //1.add the score to active player hold score.
    scores[activePlayer] += currentscore;
    // scores[1] = scores[1] + currentscore
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    //2.check the score<=100
    if(scores[activePlayer]>=100){

        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`)
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`)
    }
    //3.if  <100 player win
    else{
    switchPlayer();
    }
    }
});
btnNew.addEventListener(`click`,init())


   