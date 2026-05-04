//import React from "react";
import {useState} from "react";
import HolaMundo from "./HolaMundo";
import HolaMundo2, { type Hello2Props } from "./HolaMundo2";
import Contador from "./Contador";

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

  const props : Hello2Props = {
    name: "Otro nombre",
    age: 77
  }

  return (
    <>
      Hola <span>{text}</span>
      <br/>
      <button onClick = {handleClick}>Click</button>
      <br/>
      <HolaMundo name="Juan" />
      <HolaMundo name="Pedro" />
      <br/>
      <HolaMundo2 name="Juan" age={30} />
      <HolaMundo2 {...props} />
      <HolaMundo2 name={props.name} age={props.age} />
      <br/>
      <Contador />
    </>
  )
}

export default App
