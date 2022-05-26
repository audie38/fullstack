let x = 0;
let y = 1;
let numOfFiboSeq = 10;
let arrOfFibo = [];

for (let i = 0; i < numOfFiboSeq; i++) {
  if (arrOfFibo.length < 2) {
    arrOfFibo.push(i);
  } else {
    arrOfFibo.push(arrOfFibo[x] + arrOfFibo[y]);
    x += 1;
    y += 1;
  }
}
