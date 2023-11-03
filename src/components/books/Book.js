import React, { Component } from "react";
import "./booklist.css";
import { ThemeContext } from "../../context/ThemeContext";

export default class Book extends Component {
  render() {
    return (
      <ThemeContext>
        {(ct) => {
          const { isLightTheme, dark, ligth } = ct;
          const theme = isLightTheme ? ligth : dark;

          return (
            <div className="book">
              <img
                className="bookimg"
                src={this.props.book.imageURL}
                alt="..."
              />

              <div className="descContainer">
                <div className="bookdesc" style={{ background: theme.bg, color:theme.txt }}>
                  <h3>{`Kitap Adı : ${this.props.book.title}`}</h3>
                  <h4>{`Yazar : ${this.props.book.author}`}</h4>
                  <p>{`Özet :${
                    this.props.book.topic.substring(0, 200) + "..."
                  }`}</p>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext>
    );
  }
}
