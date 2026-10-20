var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  }

  if (n === 0 || n % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));