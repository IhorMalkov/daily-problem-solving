var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!count.has(char) || count.get(char) == 0) {
      return false;
    }
    count.set(char, (count.get(char) || 0) - 1);
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));