import React, { Component } from "react";
import axios from "axios";

export default class ApiFormGet extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users } = this.state;
    return (
      <ul>
        {users && users.map((user) => <li key={user.id}>{user?.name} - {user?.username}</li>)}
      </ul>
    );
  }
}
