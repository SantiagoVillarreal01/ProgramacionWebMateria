//import React from "react";
import {useState} from "react";
import HolaMundo from "./HolaMundo";

function App() {

  const [text, setText] = useState("mundo!");

  const handleClick = () => {
    //alert("Hola mundo!");

    if (text === "mundo!") {
      setText("React!");
    } else {
      setText("mundo!");
    }
  }

  return (
    <>
      Hola <span>{text}</span>
      <br/>
      <button onClick = {handleClick}>Click</button>
      <br/>
      <HolaMundo name="Juan" />
      <HolaMundo name="Pedro" />
    </>
  )
}

export default App
