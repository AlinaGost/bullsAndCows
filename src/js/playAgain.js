import {removeClass} from "./removeClass";
import {addClass} from "./addClass";

let displayFlex = 'display__flex';
let displayNone = 'display__none';

let play = document.getElementById('play');
let inner = document.getElementById('inner');
let anew = document.getElementById('anew');

anew.onclick = function playAgain() {
  removeClass(play, displayNone);
  removeClass(inner, displayFlex);
  removeClass(anew, displayFlex);

  addClass(play, displayFlex);
  addClass(inner, displayNone);
  addClass(anew, displayNone);
}
