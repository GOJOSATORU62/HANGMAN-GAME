const ALPHABETS = new Array(26)
  .fill("")
  .map((e, index) => String.fromCharCode(65 + index));

function LetterButtons({ text, usedLetters, onLetterClick }) {
  const originalCharacters = new Set(text.toUpperCase().split(""));
  const selectedLetters = new Set(usedLetters.join("").toUpperCase().split(""));

  const buttonStyle = function (letter) {
    if (selectedLetters.has(letter)) {
      return `${
        originalCharacters.has(letter)
          ? `bg-green-600 border-green-700`
          : `border-[#000] border-4 bg-red-600`
      }`;
    } else {
      return "bg-blue-600 border-blue-700 hover:bg-blue-700";
    }
  };

  const handleClick = function (event) {
    const character = event.target.value;
    onLetterClick?.(character);
  };
  const buttons = ALPHABETS.map((letter) => {
    return (
      <button
        key={`button-${letter}`}
        value={letter}
        disabled={selectedLetters.has(letter)}
        onClick={handleClick}
        className={`w-12 h-12 m-1 text-white bg-blue-600 ${buttonStyle(
          letter
        )} rounded-md focus:outline-none hover:bg-blue-700`}
      >
        {letter}
      </button>
    );
  });

  return <>{buttons}</>;
}

export default LetterButtons;
