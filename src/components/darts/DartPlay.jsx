import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function DartPlay() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChangeKeyboard = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPressKeyboard = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{Double}" || button === "{Triple}") handleShift();
  };

  const onChangeInputKeyboard = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div>
      <p>DartPlay</p>

      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInputKeyboard}
      />
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        layout={{
          default: [
            "1 2 3 4 5 6 7",
            "8 9 10 11 12 13 14",
            "15 16 17 18 19 20 25",
            "0 Double Triple {backspace}",
          ],
        }}
        onChange={onChangeKeyboard}
        onKeyPress={onKeyPressKeyboard}
      />
    </div>
  );
}

export default DartPlay;
