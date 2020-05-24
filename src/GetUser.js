import React, { Component } from "react";
import axios from "axios";

export default class GetUser extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  getUsers(idUser) {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idUser}`)
      .then((res) => {
        const user = res.data;
        this.setState({ user });
      });
  }

  componentDidMount() {
    const { match } = this.props;
    const idUser = match?.params?.idUser;

    this.getUsers(idUser);
  }

  render() {
    const { user } = this.state;
    return user ? (
      <span>
        {user?.name} - {user?.username}
      </span>
    ) : (
      <span>Loading...</span>
    );
  }
}
