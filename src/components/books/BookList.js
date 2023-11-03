import React, { Component } from "react";
import Book from "./Book";
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from "../../context/ThemeContext";

export default class BookList extends Component {
  render() {
    //!consumer

    return (
      <ThemeContext.Consumer>
        {(contexTheme) => (
          <BookContext.Consumer>
            {(contextBook) => {
              const { isLightTheme, ligth, dark } = contexTheme;

              const toggleTheme = () => {
                contexTheme.toggleTheme();
              };

              const { books } = contextBook;
              const theme = isLightTheme ? ligth : dark;
              console.log(theme);
              return (
                <div
                  className="bookcontainer"
                  style={{
                    background: theme.bg,
                    color: theme.txt,
                    transition: "all 0.5s",
                  }}
                >
                  <button className="toggle" onClick={toggleTheme}>
                    {isLightTheme === true ? "🌙" : "🔆"}
                  </button>

                  <h1>BOOKS</h1>
                  <div className="listContainer">
                    {books.map((book, index) => {
                      return <Book book={book} key={index} />;
                    })}
                  </div>
                </div>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
