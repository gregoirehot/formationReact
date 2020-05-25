import React, { useState } from "react";

export default function ToggleHook() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
    console.log("isToggleOn", !isToggleOn);
  };

  return (
    <>
      <h1>Toggle {isToggleOn ? <span>ON</span> : <span>OFF</span>}</h1>
      {isToggleOn && <h2>C'est OUVERT</h2>}
      <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
  );
}
