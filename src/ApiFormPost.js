import React, { Component } from "react";
import axios from "axios";

export default class ApiFormPost extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((response) => {
        console.log("👉 Returned response:", response);
        console.log("👉 Returned response data:", response.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}
