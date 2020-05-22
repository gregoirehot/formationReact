import React, { Fragment } from "react";

function Welcome(props) {
  return (
    <Fragment>
      <h1>Bonjour, {props.name}</h1>
      <button className="btn" onClick={props.clickHere} type="button">
        Clique ICI
      </button>
    </Fragment>
  );
}

export default Welcome;
