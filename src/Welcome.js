import React, { Component } from "react";

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
        <h2>Il est {date.toLocaleTimeString()}.</h2>
        <button className="btn" onClick={clickHere} type="button">
          Clique ICI
        </button>
      </>
    );
  }
}
