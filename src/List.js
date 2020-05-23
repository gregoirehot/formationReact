import React, { Component } from "react";

export default class List extends Component {
  render() {
    const listItems = [
      { id: 1, text: "text1" },
      { id: 2, text: "text2" },
      { id: 3, text: "text3" },
      { id: 4, text: "text4" },
    ];
    return (
      <>
        <h1>Liste :</h1>
        {listItems && listItems.length > 0 && (
          <ul>
            {listItems.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
