import React from "react";

export default function LocalTime(props) {
  return <h2>Il est {props.date.toLocaleTimeString()}.</h2>;
}
