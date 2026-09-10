var isPalindrome = function (s) {
  let sLower = s.toLowerCase();

  let l = 0;
  let r = sLower.length - 1;

  function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);

    return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
  }

  while (l < r) {
    while (l < r && !isAlphaNumeric(sLower[l])) {
      l++;
    }
    while (l < r && !isAlphaNumeric(sLower[r])) {
      r--;
    }

    if (sLower[l] !== sLower[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));