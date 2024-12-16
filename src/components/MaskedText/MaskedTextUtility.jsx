export function getAllCharacters(word, usedLetters) {
  //This function will return a string with all the character of the word that have been guessed so far
  usedLetters = usedLetters.map((letter) => letter.toUpperCase());
  const guessedLetters = new Set(usedLetters);

  const characters = word
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedLetters.has(char)) {
        return char;
      }
      return "_";
    });
  return characters.join(""); // _ _ _ B _ E
}
