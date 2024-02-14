export { words, getRandomWord };

let words = {
  helloVariants: ["Hi", "Hello", "Hey", "'sup?"],
  goodbyeVariants: ["Goodbye", "Cheers", "See ya!"],
};

function getRandomWord(wordsArray) {
  return wordsArray[Math.floor(Math.random() * (wordsArray.length - 1))];
}
