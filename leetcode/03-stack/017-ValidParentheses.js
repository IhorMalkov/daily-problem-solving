var isValid = function (s) {
  let stack = [];

  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (stack.length) {
      const last = stack[stack.length - 1];
      if (isPair(last, curr)) {
        stack.pop();
        continue;
      }
    }
    stack.push(curr);
  }
  return stack.length === 0;
};

var isPair = function (last, curr) {
  return (
    (last === "(" && curr === ")") ||
    (last === "{" && curr === "}") ||
    (last === "[" && curr === "]")
  );
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true