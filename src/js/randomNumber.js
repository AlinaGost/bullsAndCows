
export function randomNumber(num) {
  let array = [];
  const number = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 1; i <= num; i++) {
    let randomNum = Math.floor(Math.random() *  number .length);
    array.push(number.splice(randomNum, 1).join(''));
  }
  return array;
}
