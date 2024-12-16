/**
 *
 * @param {text} The word to be guessed
 * @returns {usedLetters} The arr of letters that have been guessed so far
 */

import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({ text, usedLetters }) {
  const letters = getAllCharacters(text, usedLetters).split("");
  return (
    <>
      {letters.map((letter, index) => {
        return (
          <span key={`letter-${index}`} className="inline-block mx-1 ">
            {letter}
          </span>
        );
      })}
    </>
  );
}



export default MaskedText;
