//Container component for TextInputForm

import { useState } from "react";
import TextInputForm from "./TextInputFrom";

function TextInputFormContainer({ onSubmit }) {
  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState("password");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted", value);
    onSubmit?.(value); // if onSubmit is defined, call it with value
  }

  function handleTextInputChange(event) {
    console.log("text input changed");
    console.log(event.target.value);
    setValue(event.target.value); // whenever I type in the input field, it will update the value
  }

  return (
    //Calling the presentation layer component

    <TextInputForm
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      value={value}
      inputType={inputType}
      setInputType={setInputType}
    />
  );
}

export default TextInputFormContainer;
