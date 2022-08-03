const capitalize = (str) => {
  let word = str.charAt(0).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    word += str[i];
  }
  return word;
};

export { capitalize };
