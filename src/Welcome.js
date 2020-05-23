import React, { Fragment, Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <h1>Bonjour, {this.props.name}</h1>
        <button className="btn" onClick={this.props.clickHere} type="button">
          Clique ICI
        </button>
      </Fragment>
    );
  }
}
