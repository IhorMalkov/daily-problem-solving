var backspaceCompare = function (s, t) {
  let sStack = [];
  let tStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      sStack.push(s[i]);
    } else {
      sStack.pop();
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== "#") {
      tStack.push(t[i]);
    } else {
      tStack.pop();
    }
  }

  if (sStack.length !== tStack.length) {
    return false;
  }

  for (let i = 0; i < sStack.length; i++) {
    if (sStack[i] !== tStack[i]) {
      return false;
    }
  }
  return true;
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));