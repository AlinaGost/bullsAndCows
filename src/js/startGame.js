import {removeClass} from "./removeClass";
import {addClass} from "./addClass";
import {randomNumber} from "./randomNumber";

let displayFlex = 'display__flex';
let displayNone = 'display__none';

let play = document.getElementById('play');
let inner = document.getElementById('inner');
let anew = document.getElementById('anew');

play.onclick =  function startGame() {
  removeClass(play, displayFlex);
  removeClass(inner, displayNone);
  removeClass(anew, displayNone);

  addClass(play, displayNone);
  addClass(inner, displayFlex);
  addClass(anew, displayFlex);

  randomNumber();
}
