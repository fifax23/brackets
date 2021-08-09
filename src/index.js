module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsStore = Object.fromEntries(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    const topElement = stack[stack.length - 1];
    if (bracketsStore[topElement] === str[i]) {
      stack.pop();
    } else if (bracketsStore[str[i]]) {
      stack.push(str[i]);
    } else {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};
