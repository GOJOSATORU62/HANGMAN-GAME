import getButtonStyling from "./getButtonStyleType";

function Button({ buttonType = "button", text, styleType, onClickHandler }) {
  return (
    <button
      type={buttonType}
      onClick={onClickHandler}
      className={`px-4 py-2 ${getButtonStyling(
        styleType
      )} bg-blue-500 border border-blue-700 text-white hover:bg-blue-700
          hover:border-blue-900 rounded-md transition-all`}
    >
      {text}
    </button>
  );
}

export default Button;
