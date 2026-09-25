var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let answ = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      answ = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answ;
};

let piles = [3, 6, 7, 11];
let h = 8;
console.log(minEatingSpeed(piles,h))