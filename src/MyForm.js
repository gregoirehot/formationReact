import React, { Component } from "react";

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", text: "", select: "", check: false };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log(
      "Enregistré : ",
      this.state.input,
      this.state.text,
      this.state.select,
      this.state.check
    );
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input
            name="input"
            type="text"
            value={this.state.input1}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          Text :
          <textarea
            name="text"
            value={this.state.input2}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />
        <label>
          Choisissez votre parfum favori :
          <select
            name="select"
            value={this.state.select}
            onChange={this.handleInputChange}
          >
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Check :
          <input
            name="check"
            type="checkbox"
            checked={this.state.check}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
