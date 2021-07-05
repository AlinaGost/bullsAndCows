import '../css/main.scss';

let displayFlex = 'display__flex';
let displayNone = 'display__none';

let inner = document.getElementById('inner');
let input = document.getElementById('input');
let button = document.getElementById('button');
let play = document.getElementById('play');
let anew = document.getElementById('anew');

button.onclick =  function eventButton() {
   return console.log(input.value);
}

play.onclick =  function startGame() {
  removeClass(play, displayFlex);
  removeClass(inner, displayNone);
  removeClass(anew, displayNone);

  addClass(play, displayNone);
  addClass(inner, displayFlex);
  addClass(anew, displayFlex);
}

anew.onclick = function playAgain() {
  removeClass(play, displayNone);
  removeClass(inner, displayFlex);
  removeClass(anew, displayFlex);

  addClass(play, displayFlex);
  addClass(inner, displayNone);
  addClass(anew, displayNone);
}

function removeClass(el, removeClass) {
  el.classList.remove(removeClass);
}

function addClass(el, addClass) {
  el.classList.add(addClass);
}
