var reverseString = function (s) {
  let helper = function (l, r) {
    if (r <= l) {
      return;
    }

    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;

    l++;
    r--;
    helper(l, r);
  };
   helper(0, s.length - 1);
   return s;
 };

console.log(reverseString(["h", "e", "l", "l", "o"]));