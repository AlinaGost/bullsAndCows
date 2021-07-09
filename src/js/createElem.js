

let list = document.getElementById('list');

export function createElem(text) {
  let newElem = document.createElement('li');
  newElem.className = 'list__item';
  newElem.textContent = text;

  list.append(newElem);
}

