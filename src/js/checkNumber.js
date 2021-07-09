import {createElem} from "./createElem";


let check__btn = document.getElementById('checkBtn');
let input = document.getElementById('input');


check__btn.onclick = function checkBtn(e) {
  e.preventDefault();
  if (!(input.value === '')) {
    createElem(input.value);
  }
  input.value = '';
};

input.onkeydown = function (e) {
  if (e.keyCode == '13') {
    e.preventDefault();
    if (!(input.value === '')) {
      createElem(input.value);
    }
    input.value = '';
  }
}
