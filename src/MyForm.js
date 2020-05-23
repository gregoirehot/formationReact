import React, { Component } from "react";

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log("handleChange", event.target.value);
  };

  handleSubmit = (event) => {
    alert("Le nom est enregistré : " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
