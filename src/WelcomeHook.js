import React, { useState, useEffect, useCallback } from "react";
import LocalTime from "./LocalTime";

export default function WelcomeHook({ name }) {
  const [date, setDate] = useState(new Date());

  const tick = useCallback(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <>
      <h1>Bonjour, {name}</h1>
      <LocalTime date={date} />
    </>
  );
}
