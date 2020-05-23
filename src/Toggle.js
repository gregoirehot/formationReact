import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    const { isToggleOn } = this.state;
    return (
      <>
        <h1>Toggle {isToggleOn ? <span>ON</span> : <span>OFF</span>}</h1>
        {isToggleOn && <h2>C'est OUVERT</h2>}
        <button onClick={this.handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
      </>
    );
  }
}
