//Presentation Component:

import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  handleFormSubmit,
  handleTextInputChange,
  value,
  inputType,
  setInputType,
}) {
  console.log(handleFormSubmit);
  const [toggle, setToggle] = useState(false);
  return (
    <form className="flex items-end" onSubmit={handleFormSubmit}>
      <div className="flex-1 mr-2">
        <TextInput
          label="Enter a word or phrase"
          type={inputType}
          onChange={handleTextInputChange}
          value={value}
        /> 
      </div>

      <div>
        <Button
          styleType="warning"
          text={inputType === "password" ? "Show" : "Hide"}
          onClickHandler={() =>
            setInputType(inputType === "password" ? "text" : "password")
          }
        />
      </div>

      <div>
        <Button text="OK" buttonType="submit" />
      </div>

      <button
        onClick={(event) => {
          event.preventDefault();
          setToggle(!toggle);
        }}
        style={{ backgroundColor: toggle ? "red" : "blue" }}
      >
        Hey
      </button>
    </form>
  );
}

export default TextInputForm;
