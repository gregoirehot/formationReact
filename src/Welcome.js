import React, { Component } from "react";
import LocalTime from "./LocalTime";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { name, clickHere } = this.props;
    const { date } = this.state;
    return (
      <>
        <h1>Bonjour, {name}</h1>
        <LocalTime date={date} />
        <button className="btn" onClick={clickHere} type="button">
          Clique ICI
        </button>
      </>
    );
  }
}
